import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

/* ------------------------------------------------------------------ */
/*  Palette — restrained monochrome violet with rare accents           */
/* ------------------------------------------------------------------ */
const FOG = "#0F1722";
const VIOLET = "#6055AC";
const VIOLET_DEEP = "#4A3F96";
const VIOLET_PALE = "#B7AEE8";
const TEAL = "#00C9A7";
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
/*  The double helix — smooth tubes, fine rungs, sparse accents        */
/* ------------------------------------------------------------------ */
function DnaModel({ detail = 1 }: { detail?: number }) {
  const params: HelixParams = useMemo(
    () => ({
      pairs: Math.round(30 * detail),
      height: 10,
      radius: 1.45,
      turns: 2.3,
    }),
    [detail]
  );

  const { tubeA, tubeB, rungs } = useMemo(() => {
    const a = new THREE.TubeGeometry(strandCurve(0, params), 260, 0.062, 14, false);
    const b = new THREE.TubeGeometry(strandCurve(Math.PI, params), 260, 0.062, 14, false);

    const list: {
      mid: THREE.Vector3;
      quat: THREE.Quaternion;
      len: number;
      pa: THREE.Vector3;
      pb: THREE.Vector3;
      kind: "base" | "teal" | "gold";
    }[] = [];
    const up = new THREE.Vector3(0, 1, 0);
    for (let i = 0; i < params.pairs; i++) {
      const t = i / (params.pairs - 1);
      const pa = helixPoint(t, 0, params);
      const pb = helixPoint(t, Math.PI, params);
      const dir = new THREE.Vector3().subVectors(pb, pa);
      const kind = i % 8 === 3 ? "teal" : i % 10 === 7 ? "gold" : "base";
      list.push({
        mid: new THREE.Vector3().addVectors(pa, pb).multiplyScalar(0.5),
        quat: new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize()),
        len: dir.length(),
        pa,
        pb,
        kind,
      });
    }
    return { tubeA: a, tubeB: b, rungs: list };
  }, [params]);

  const materials = useMemo(
    () => ({
      strand: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#6C5FC7"),
        emissive: new THREE.Color(VIOLET_DEEP),
        emissiveIntensity: 0.45,
        roughness: 0.28,
        metalness: 0.3,
        clearcoat: 1,
        clearcoatRoughness: 0.25,
      }),
      joint: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(VIOLET_PALE),
        emissive: new THREE.Color(VIOLET),
        emissiveIntensity: 0.75,
        roughness: 0.2,
        metalness: 0.2,
        clearcoat: 1,
      }),
      rung: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color("#9C93DB"),
        emissive: new THREE.Color(VIOLET),
        emissiveIntensity: 0.35,
        roughness: 0.32,
        metalness: 0.15,
      }),
      rungTeal: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(TEAL),
        emissive: new THREE.Color(TEAL),
        emissiveIntensity: 1.25,
        roughness: 0.25,
        metalness: 0.1,
      }),
      rungGold: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(GOLD),
        emissive: new THREE.Color(GOLD),
        emissiveIntensity: 0.9,
        roughness: 0.22,
        metalness: 0.35,
      }),
    }),
    []
  );

  return (
    <group>
      {/* Backbone strands — continuous polished ribbons of light */}
      <mesh geometry={tubeA} material={materials.strand} />
      <mesh geometry={tubeB} material={materials.strand} />

      {rungs.map((r, i) => {
        const rungMat =
          r.kind === "teal"
            ? materials.rungTeal
            : r.kind === "gold"
              ? materials.rungGold
              : materials.rung;
        return (
          <group key={i}>
            {/* Fine base-pair rung */}
            <mesh position={r.mid} quaternion={r.quat} material={rungMat}>
              <cylinderGeometry args={[0.024, 0.024, r.len * 0.94, 10, 1]} />
            </mesh>
            {/* Backbone joints */}
            <mesh position={r.pa} material={materials.joint}>
              <sphereGeometry args={[0.095, 20, 20]} />
            </mesh>
            <mesh position={r.pb} material={materials.joint}>
              <sphereGeometry args={[0.095, 20, 20]} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Drifting particle dust — quiet, galaxy-like                        */
/* ------------------------------------------------------------------ */
function ParticleField({ count = 700 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      { c: new THREE.Color(VIOLET_PALE), w: 0.62 },
      { c: new THREE.Color(VIOLET), w: 0.2 },
      { c: new THREE.Color(TEAL), w: 0.1 },
      { c: new THREE.Color(GOLD), w: 0.08 },
    ];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 1.9 + Math.pow(Math.random(), 1.7) * 5;
      const y = (Math.random() - 0.5) * 12;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = y;
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
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    points.current.rotation.y = t * 0.025;
    points.current.position.y = Math.sin(t * 0.2) * 0.3;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={positions.length / 3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
          count={colors.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
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
  className?: string;
}

export default function DnaScene({
  scale = 1,
  particleCount = 700,
  interactive = true,
  rotationSpeed = 0.1,
  detail = 1,
  lean = 0.3,
  className,
}: DnaSceneProps) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 12.5], fov: 35 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={[FOG, 9.5, 18.5]} />

          {/* Warm key, teal fill, violet core — volumetric and hopeful */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[7, 9, 5]} intensity={1.3} color={GOLD} />
          <directionalLight position={[-7, -5, -4]} intensity={0.45} color={TEAL} />
          <pointLight position={[0, 0, 0]} intensity={3.4} color={VIOLET} distance={10} />
          <pointLight position={[0, 6, 4]} intensity={1} color="#ffffff" distance={13} />

          <group scale={scale} rotation={[0, 0, lean]}>
            <Float speed={1} rotationIntensity={0.08} floatIntensity={0.5}>
              <Rig interactive={interactive} speed={rotationSpeed}>
                <DnaModel detail={detail} />
              </Rig>
            </Float>
            <ParticleField count={particleCount} />
          </group>

          <EffectComposer multisampling={0}>
            <Bloom
              intensity={1.05}
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
