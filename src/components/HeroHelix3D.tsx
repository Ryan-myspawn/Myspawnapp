import {
  useMemo,
  useRef,
  useState,
  useEffect,
  Suspense,
} from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { AnimatePresence, motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Bases                                                              */
/* ------------------------------------------------------------------ */
type Base = "A" | "G" | "T" | "C";
const ORDER: Base[] = ["A", "G", "T", "C"];
const COMPLEMENT: Record<Base, Base> = { A: "T", T: "A", G: "C", C: "G" };
const COLOR: Record<Base, string> = {
  A: "#34D399",
  T: "#FF8A5C",
  G: "#F5C26B",
  C: "#22D3EE",
};
const INFO: Record<Base, { name: string; kind: string; blurb: string }> = {
  A: { name: "Adenine", kind: "Purine", blurb: "Pairs with thymine across two hydrogen bonds." },
  G: { name: "Guanine", kind: "Purine", blurb: "Pairs with cytosine across three hydrogen bonds." },
  T: { name: "Thymine", kind: "Pyrimidine", blurb: "Unique to DNA — the partner of adenine." },
  C: { name: "Cytosine", kind: "Pyrimidine", blurb: "Pairs with guanine, lending the helix stability." },
};

const ORANGE = "#FF7A2E";
const ORANGE_SOFT = "#FFB35C";
const CYAN = "#22D3EE";

/* ------------------------------------------------------------------ */
/*  Helix geometry                                                     */
/* ------------------------------------------------------------------ */
const PAIRS = 18;
const HEIGHT = 9.5;
const RADIUS = 1.5;
const TURNS = 2.15;

function helixPoint(t: number, phase: number) {
  const angle = t * TURNS * Math.PI * 2 + phase;
  return {
    v: new THREE.Vector3(
      Math.cos(angle) * RADIUS,
      (t - 0.5) * HEIGHT,
      Math.sin(angle) * RADIUS
    ),
    angle,
  };
}

function strandCurve(phase: number) {
  const pts: THREE.Vector3[] = [];
  for (let i = 0; i <= 120; i++) pts.push(helixPoint(i / 120, phase).v);
  return new THREE.CatmullRomCurve3(pts);
}

/* ------------------------------------------------------------------ */
/*  Rotating helix with base labels + front-base detection             */
/* ------------------------------------------------------------------ */
function RotatingHelix({
  onFront,
  speed,
}: {
  onFront: (b: Base) => void;
  speed: number;
}) {
  const group = useRef<THREE.Group>(null);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lastFront = useRef<Base | null>(null);

  const { tubeA, tubeB, nodes, materials } = useMemo(() => {
    const a = new THREE.TubeGeometry(strandCurve(0), 200, 0.055, 12, false);
    const b = new THREE.TubeGeometry(strandCurve(Math.PI), 200, 0.055, 12, false);

    const list: {
      a: THREE.Vector3;
      b: THREE.Vector3;
      mid: THREE.Vector3;
      quat: THREE.Quaternion;
      len: number;
      base: Base;
      theta: number; // angle of strand-A node (for front detection)
    }[] = [];
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < PAIRS; i++) {
      const t = i / (PAIRS - 1);
      const pa = helixPoint(t, 0);
      const pb = helixPoint(t, Math.PI);
      const dir = new THREE.Vector3().subVectors(pb.v, pa.v);
      list.push({
        a: pa.v,
        b: pb.v,
        mid: new THREE.Vector3().addVectors(pa.v, pb.v).multiplyScalar(0.5),
        quat: new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize()),
        len: dir.length(),
        base: ORDER[i % 4],
        theta: pa.angle,
      });
    }

    const mats = {
      strand: new THREE.MeshStandardMaterial({
        color: new THREE.Color(ORANGE_SOFT),
        emissive: new THREE.Color(ORANGE),
        emissiveIntensity: 0.7,
        roughness: 0.35,
        metalness: 0.1,
      }),
      node: new THREE.MeshStandardMaterial({
        color: new THREE.Color("#FFE3C0"),
        emissive: new THREE.Color(ORANGE),
        emissiveIntensity: 0.9,
        roughness: 0.3,
      }),
      rung: new THREE.MeshStandardMaterial({
        color: new THREE.Color("#2E4A66"),
        emissive: new THREE.Color("#123"),
        emissiveIntensity: 0.3,
        roughness: 0.3,
        metalness: 0.5,
      }),
    };
    return { tubeA: a, tubeB: b, nodes: list, materials: mats };
  }, []);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += dt * speed;
    const ry = g.rotation.y;

    // Opacity of each label by how much it faces the camera (+Z), and
    // which base is currently at the front.
    let bestZ = -Infinity;
    let bestBase: Base = "A";
    for (let i = 0; i < nodes.length; i++) {
      const z = Math.sin(nodes[i].theta - ry); // world-space front-ness
      const span = labelRefs.current[i];
      if (span) {
        const op = Math.max(0, Math.min(1, (z + 0.15) / 1.05));
        span.style.opacity = String(op * op);
      }
      if (z > bestZ) {
        bestZ = z;
        bestBase = nodes[i].base;
      }
    }
    if (bestBase !== lastFront.current) {
      lastFront.current = bestBase;
      onFront(bestBase);
    }
  });

  return (
    <group ref={group}>
      <mesh geometry={tubeA} material={materials.strand} />
      <mesh geometry={tubeB} material={materials.strand} />
      {nodes.map((n, i) => (
        <group key={i}>
          <mesh position={n.mid} quaternion={n.quat} material={materials.rung}>
            <cylinderGeometry args={[0.035, 0.035, n.len * 0.9, 10]} />
          </mesh>
          <mesh position={n.a} material={materials.node}>
            <sphereGeometry args={[0.13, 18, 18]} />
          </mesh>
          <mesh position={n.b} material={materials.node}>
            <sphereGeometry args={[0.13, 18, 18]} />
          </mesh>
          {/* Base letter riding strand A */}
          <Html position={n.a} center distanceFactor={9} pointerEvents="none" zIndexRange={[10, 0]}>
            <span
              ref={(el) => (labelRefs.current[i] = el)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: 22,
                color: COLOR[n.base],
                textShadow: `0 0 10px ${COLOR[n.base]}, 0 1px 2px rgba(0,0,0,0.6)`,
                userSelect: "none",
              }}
            >
              {n.base}
            </span>
          </Html>
          {/* Complement letter riding strand B */}
          <Html position={n.b} center distanceFactor={11} pointerEvents="none" zIndexRange={[10, 0]}>
            <span
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                opacity: 0.55,
                color: COLOR[COMPLEMENT[n.base]],
                textShadow: `0 0 8px ${COLOR[COMPLEMENT[n.base]]}`,
                userSelect: "none",
              }}
            >
              {COMPLEMENT[n.base]}
            </span>
          </Html>
        </group>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Public component                                                   */
/* ------------------------------------------------------------------ */
export default function HeroHelix3D({ className }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [front, setFront] = useState<Base>("A");

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const info = INFO[front];

  return (
    <div ref={wrapRef} className={`relative ${className ?? ""}`}>
      <Canvas
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 13.5], fov: 33 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <directionalLight position={[5, 7, 6]} intensity={2} color={ORANGE_SOFT} />
          <directionalLight position={[-6, 2, -5]} intensity={0.9} color={CYAN} />
          <pointLight position={[0, 0, 3]} intensity={2.2} color={ORANGE} distance={12} />
          <group rotation={[0, 0, 0.28]} scale={0.9}>
            <RotatingHelix onFront={setFront} speed={0.2} />
          </group>
          <EffectComposer multisampling={0} enableNormalPass={false}>
            <Bloom intensity={1.1} luminanceThreshold={0.15} luminanceSmoothing={0.9} mipmapBlur />
            <Vignette eskil={false} offset={0.2} darkness={0.7} />
          </EffectComposer>
        </Suspense>
      </Canvas>

      {/* Arrow locked to helix centre, naming the base at the front */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex -translate-y-1/2 items-center gap-2" style={{ transform: "translate(-140%, -50%)" }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={front}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3 }}
            className="grid h-7 w-7 place-items-center rounded-lg text-sm font-bold text-navy-deeper"
            style={{ backgroundColor: COLOR[front], boxShadow: `0 0 18px -2px ${COLOR[front]}` }}
          >
            {front}
          </motion.span>
        </AnimatePresence>
        <svg width="40" height="12" viewBox="0 0 40 12" fill="none">
          <path d="M0 6H36M36 6L30 2M36 6L30 10" stroke={COLOR[front]} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Legend */}
      <div className="pointer-events-none absolute right-4 top-4 z-20 flex flex-col gap-1.5 sm:right-6 sm:top-6">
        {ORDER.map((b) => (
          <div
            key={b}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-navy-deeper/50 px-2.5 py-1 backdrop-blur-sm transition-opacity duration-500"
            style={{ opacity: b === front ? 1 : 0.4 }}
          >
            <span className="grid h-4 w-4 place-items-center rounded-full text-[9px] font-bold text-navy-deeper" style={{ backgroundColor: COLOR[b] }}>
              {b}
            </span>
            <span className="text-[10px] font-medium tracking-wide text-offwhite/70">{INFO[b].name}</span>
          </div>
        ))}
      </div>

      {/* Compact live card */}
      <div className="absolute bottom-4 left-4 z-20 max-w-[11.5rem] sm:bottom-6 sm:left-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={front}
            initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -6, filter: "blur(5px)" }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-white/10 bg-navy-deeper/70 p-2.5 backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md text-xs font-bold text-navy-deeper" style={{ backgroundColor: COLOR[front], boxShadow: `0 0 16px -4px ${COLOR[front]}` }}>
                {front}
              </span>
              <div className="leading-none">
                <div className="font-heading text-[13px] font-bold leading-tight text-white">{info.name}</div>
                <div className="mt-0.5 text-[8px] font-medium uppercase tracking-[0.16em] text-offwhite/40">
                  {info.kind} · pairs {COMPLEMENT[front]}
                </div>
              </div>
            </div>
            <p className="mt-1.5 text-[10px] font-light leading-snug text-offwhite/55">{info.blurb}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
