import {
  useMemo,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  Suspense,
} from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  Vignette,
  DepthOfField,
} from "@react-three/postprocessing";

/* ------------------------------------------------------------------ */
/*  Palette — molten orange strands, cool steel rungs, teal sparkle    */
/* ------------------------------------------------------------------ */
const FOG = "#0F1722";
const ORANGE = "#FF8C42";
const ORANGE_DEEP = "#E85A1A";
const ORANGE_SOFT = "#FFB35C";
const TEAL = "#00C9A7";
const TEAL_PALE = "#7FE8D8";
const STEEL = "#3A5A78";
const STEEL_DEEP = "#16324F";
const GOLD = "#F5C26B";

/* ------------------------------------------------------------------ */
/*  Helix geometry                                                     */
/* ------------------------------------------------------------------ */
interface HelixParams {
  pairs: number;
  height: number;
  radius: number;
  turns: number;
}

function helixPoint(t: number, phase: number, p: HelixParams): THREE.Vector3 {
  const angle = t * p.turns * Math.PI * 2 + phase;
  return new THREE.Vector3(
    Math.cos(angle) * p.radius,
    (t - 0.5) * p.height,
    Math.sin(angle) * p.radius
  );
}

function strandCurve(phase: number, p: HelixParams): THREE.CatmullRomCurve3 {
  const pts: THREE.Vector3[] = [];
  const N = 140;
  for (let i = 0; i <= N; i++) pts.push(helixPoint(i / N, phase, p));
  return new THREE.CatmullRomCurve3(pts);
}

/* ------------------------------------------------------------------ */
/*  Organic bead cluster along one strand — the photoreal backbone     */
/* ------------------------------------------------------------------ */
function BeadStrand({
  phase,
  params,
  beads,
  material,
  jitter = 0.07,
  rMin = 0.05,
  rMax = 0.13,
}: {
  phase: number;
  params: HelixParams;
  beads: number;
  material: THREE.Material;
  jitter?: number;
  rMin?: number;
  rMax?: number;
}) {
  const ref = useRef<THREE.InstancedMesh>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;
    const dummy = new THREE.Object3D();
    for (let i = 0; i < beads; i++) {
      const t = i / (beads - 1);
      const p = helixPoint(t, phase, params);
      dummy.position.set(
        p.x + (Math.random() - 0.5) * 2 * jitter,
        p.y + (Math.random() - 0.5) * 2 * jitter,
        p.z + (Math.random() - 0.5) * 2 * jitter
      );
      dummy.scale.setScalar(rMin + Math.random() * (rMax - rMin));
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  }, [beads, phase, params, jitter, rMin, rMax]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, beads]} material={material}>
      <sphereGeometry args={[1, 10, 10]} />
    </instancedMesh>
  );
}

/* ------------------------------------------------------------------ */
/*  The double helix                                                   */
/* ------------------------------------------------------------------ */
function DnaModel({ detail = 1 }: { detail?: number }) {
  const params: HelixParams = useMemo(
    () => ({
      pairs: Math.round(26 * detail),
      height: 10,
      radius: 1.45,
      turns: 2.3,
    }),
    [detail]
  );

  const materials = useMemo(
    () => ({
      /* Continuous inner core keeps the silhouette unbroken under the beads */
      core: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(ORANGE),
        emissive: new THREE.Color(ORANGE_DEEP),
        emissiveIntensity: 0.7,
        roughness: 0.35,
        metalness: 0.1,
      }),
      bead: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(ORANGE_SOFT),
        emissive: new THREE.Color(ORANGE_DEEP),
        emissiveIntensity: 0.55,
        roughness: 0.38,
        metalness: 0.08,
        clearcoat: 0.7,
        clearcoatRoughness: 0.4,
      }),
      beadHot: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(ORANGE),
        emissive: new THREE.Color(ORANGE),
        emissiveIntensity: 1.1,
        roughness: 0.3,
        metalness: 0.05,
      }),
      sparkle: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(TEAL_PALE),
        emissive: new THREE.Color(TEAL),
        emissiveIntensity: 1.5,
        roughness: 0.25,
        metalness: 0.1,
      }),
      rung: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(STEEL),
        emissive: new THREE.Color(STEEL_DEEP),
        emissiveIntensity: 0.35,
        roughness: 0.28,
        metalness: 0.55,
        clearcoat: 1,
        clearcoatRoughness: 0.2,
      }),
      rungTeal: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(TEAL),
        emissive: new THREE.Color(TEAL),
        emissiveIntensity: 1.2,
        roughness: 0.25,
        metalness: 0.15,
      }),
      rungEmber: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(ORANGE_SOFT),
        emissive: new THREE.Color(ORANGE),
        emissiveIntensity: 1.1,
        roughness: 0.25,
        metalness: 0.2,
      }),
      cap: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(ORANGE_SOFT),
        emissive: new THREE.Color(ORANGE),
        emissiveIntensity: 0.9,
        roughness: 0.3,
        metalness: 0.1,
      }),
    }),
    []
  );

  const { coreA, coreB, rungs } = useMemo(() => {
    const a = new THREE.TubeGeometry(strandCurve(0, params), 240, 0.05, 10, false);
    const b = new THREE.TubeGeometry(strandCurve(Math.PI, params), 240, 0.05, 10, false);

    const list: {
      mid: THREE.Vector3;
      quat: THREE.Quaternion;
      len: number;
      pa: THREE.Vector3;
      pb: THREE.Vector3;
      kind: "base" | "teal" | "ember";
    }[] = [];
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < params.pairs; i++) {
      const t = i / (params.pairs - 1);
      const pa = helixPoint(t, 0, params);
      const pb = helixPoint(t, Math.PI, params);
      const dir = new THREE.Vector3().subVectors(pb, pa);
      const kind = i % 7 === 3 ? "teal" : i % 9 === 5 ? "ember" : "base";
      list.push({
        mid: new THREE.Vector3().addVectors(pa, pb).multiplyScalar(0.5),
        quat: new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize()),
        len: dir.length(),
        pa,
        pb,
        kind,
      });
    }
    return { coreA: a, coreB: b, rungs: list };
  }, [params]);

  const beadCount = Math.round(430 * detail);

  return (
    <group>
      <mesh geometry={coreA} material={materials.core} />
      <mesh geometry={coreB} material={materials.core} />

      {/* Molecule-cluster backbones: dense warm beads + hot highlights + teal sparkle */}
      <BeadStrand phase={0} params={params} beads={beadCount} material={materials.bead} />
      <BeadStrand phase={Math.PI} params={params} beads={beadCount} material={materials.bead} />
      <BeadStrand
        phase={0}
        params={params}
        beads={Math.round(beadCount * 0.22)}
        material={materials.beadHot}
        jitter={0.05}
        rMin={0.04}
        rMax={0.09}
      />
      <BeadStrand
        phase={Math.PI}
        params={params}
        beads={Math.round(beadCount * 0.22)}
        material={materials.beadHot}
        jitter={0.05}
        rMin={0.04}
        rMax={0.09}
      />
      <BeadStrand
        phase={0}
        params={params}
        beads={Math.round(beadCount * 0.09)}
        material={materials.sparkle}
        jitter={0.09}
        rMin={0.025}
        rMax={0.055}
      />
      <BeadStrand
        phase={Math.PI}
        params={params}
        beads={Math.round(beadCount * 0.09)}
        material={materials.sparkle}
        jitter={0.09}
        rMin={0.025}
        rMax={0.055}
      />

      {/* Ladder rungs — cool glassy steel with rare glowing accents */}
      {rungs.map((r, i) => {
        const mat =
          r.kind === "teal"
            ? materials.rungTeal
            : r.kind === "ember"
              ? materials.rungEmber
              : materials.rung;
        return (
          <group key={i}>
            <mesh position={r.mid} quaternion={r.quat} material={mat}>
              <cylinderGeometry args={[0.034, 0.034, r.len * 0.9, 10, 1]} />
            </mesh>
            <mesh position={r.pa} material={materials.cap}>
              <sphereGeometry args={[0.12, 14, 14]} />
            </mesh>
            <mesh position={r.pb} material={materials.cap}>
              <sphereGeometry args={[0.12, 14, 14]} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Particle atmosphere — fine dust + big soft bokeh orbs              */
/* ------------------------------------------------------------------ */
function makeCloud(
  count: number,
  rMinBase: number,
  rSpread: number,
  ySpread: number,
  palette: { c: THREE.Color; w: number }[]
) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = rMinBase + Math.pow(Math.random(), 1.5) * rSpread;
    pos[i * 3] = Math.cos(angle) * r;
    pos[i * 3 + 1] = (Math.random() - 0.5) * ySpread;
    pos[i * 3 + 2] = Math.sin(angle) * r;

    let pick = Math.random();
    let chosen = palette[0].c;
    for (const p of palette) {
      if (pick < p.w) {
        chosen = p.c;
        break;
      }
      pick -= p.w;
    }
    col[i * 3] = chosen.r;
    col[i * 3 + 1] = chosen.g;
    col[i * 3 + 2] = chosen.b;
  }
  return { pos, col };
}

function makeCircleTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function ParticleField({ count = 700 }: { count?: number }) {
  const dustRef = useRef<THREE.Points>(null);
  const bokehRef = useRef<THREE.Points>(null);
  const sprite = useMemo(() => makeCircleTexture(), []);

  const { dust, bokeh } = useMemo(() => {
    const warm = [
      { c: new THREE.Color(ORANGE_SOFT), w: 0.42 },
      { c: new THREE.Color(ORANGE), w: 0.25 },
      { c: new THREE.Color(GOLD), w: 0.15 },
      { c: new THREE.Color(TEAL), w: 0.18 },
    ];
    return {
      dust: makeCloud(count, 1.8, 5, 12, warm),
      bokeh: makeCloud(Math.round(count * 0.14), 2.5, 6, 13, warm),
    };
  }, [count]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (dustRef.current) {
      dustRef.current.rotation.y = t * 0.025;
      dustRef.current.position.y = Math.sin(t * 0.2) * 0.3;
    }
    if (bokehRef.current) {
      bokehRef.current.rotation.y = -t * 0.014;
    }
  });

  return (
    <>
      <points ref={dustRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[dust.pos, 3]}
            count={dust.pos.length / 3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[dust.col, 3]}
            count={dust.col.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial
          vertexColors
          map={sprite}
          alphaMap={sprite}
          size={0.04}
          sizeAttenuation
          transparent
          opacity={0.7}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      {/* Large soft orbs — melt into bokeh discs under depth of field */}
      <points ref={bokehRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[bokeh.pos, 3]}
            count={bokeh.pos.length / 3}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[bokeh.col, 3]}
            count={bokeh.col.length / 3}
          />
        </bufferGeometry>
        <pointsMaterial
          vertexColors
          map={sprite}
          alphaMap={sprite}
          size={0.55}
          sizeAttenuation
          transparent
          opacity={0.16}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Rotation + mouse-parallax rig                                      */
/* ------------------------------------------------------------------ */
function Rig({
  children,
  interactive,
  speed,
}: {
  children: React.ReactNode;
  interactive: boolean;
  speed: number;
}) {
  const group = useRef<THREE.Group>(null);
  const spin = useRef(0);

  useFrame((state, delta) => {
    if (!group.current) return;
    spin.current += delta * speed;
    group.current.rotation.y = spin.current;
    if (interactive) {
      const targetX = state.pointer.y * -0.12;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.035
      );
    }
  });

  return <group ref={group}>{children}</group>;
}

/* ------------------------------------------------------------------ */
/*  Public scene component                                             */
/* ------------------------------------------------------------------ */
export interface DnaSceneProps {
  scale?: number;
  particleCount?: number;
  interactive?: boolean;
  rotationSpeed?: number;
  detail?: number;
  /** Cinematic axial lean, radians. */
  lean?: number;
  /** Depth-of-field bokeh — the hero look; disable in small embeds for perf. */
  dof?: boolean;
  className?: string;
}

export default function DnaScene({
  scale = 1,
  particleCount = 700,
  interactive = true,
  rotationSpeed = 0.1,
  detail = 1,
  lean = 0.3,
  dof = true,
  className,
}: DnaSceneProps) {
  // Pause rendering entirely while scrolled out of view
  const wrapRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrapRef} className={className} aria-hidden>
      <Canvas
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 12.5], fov: 35 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={[FOG, 10, 19]} />

          {/* Molten key light, teal counter-light, ember core */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[6, 8, 5]} intensity={1.5} color={ORANGE_SOFT} />
          <directionalLight position={[-7, -4, -5]} intensity={0.6} color={TEAL} />
          <pointLight position={[0, 0, 0]} intensity={3.6} color={ORANGE} distance={10} />
          <pointLight position={[0, 6, 4]} intensity={0.9} color="#ffffff" distance={13} />

          <group scale={scale} rotation={[0, 0, lean]}>
            <Float speed={1} rotationIntensity={0.08} floatIntensity={0.5}>
              <Rig interactive={interactive} speed={rotationSpeed}>
                <DnaModel detail={detail} />
              </Rig>
            </Float>
            <ParticleField count={particleCount} />
          </group>

          <EffectComposer multisampling={0} enableNormalPass={false}>
            {dof ? (
              <DepthOfField
                worldFocusDistance={12.5}
                worldFocusRange={5.5}
                bokehScale={4.5}
              />
            ) : (
              <></>
            )}
            <Bloom
              intensity={1.1}
              luminanceThreshold={0.14}
              luminanceSmoothing={0.92}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.16} darkness={0.78} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
