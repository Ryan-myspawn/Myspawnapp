import { useMemo, useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";

/* ------------------------------------------------------------------ */
/*  Palette                                                            */
/* ------------------------------------------------------------------ */
const VIOLET = "#6055AC";
const VIOLET_BRIGHT = "#8B7FD6";
const TEAL = "#00C9A7";
const EMERALD = "#10B981";
const GOLD = "#F5C26B";

/* ------------------------------------------------------------------ */
/*  Helix geometry helpers                                             */
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

/** Half-rung cylinder stretched between two points. */
function Rung({
  start,
  end,
  color,
  radius,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string;
  radius: number;
}) {
  const { position, quaternion, length } = useMemo(() => {
    const dir = new THREE.Vector3().subVectors(end, start);
    const len = dir.length();
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    const quat = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir.clone().normalize()
    );
    return { position: mid, quaternion: quat, length: len };
  }, [start, end]);

  return (
    <mesh position={position} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius, length, 12, 1]} />
      <meshPhysicalMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.55}
        roughness={0.3}
        metalness={0.1}
        clearcoat={0.6}
      />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  The double helix                                                   */
/* ------------------------------------------------------------------ */
function DnaModel({ detail = 1 }: { detail?: number }) {
  const params: HelixParams = useMemo(
    () => ({
      pairs: Math.round(26 * detail),
      height: 9,
      radius: 1.35,
      turns: 2.1,
    }),
    [detail]
  );

  const rungColors = [TEAL, EMERALD];

  const elements = useMemo(() => {
    const items: {
      a: THREE.Vector3;
      b: THREE.Vector3;
      mid: THREE.Vector3;
      color: string;
    }[] = [];
    for (let i = 0; i < params.pairs; i++) {
      const t = i / (params.pairs - 1);
      const a = helixPoint(t, 0, params);
      const b = helixPoint(t, Math.PI, params);
      const mid = new THREE.Vector3().addVectors(a, b).multiplyScalar(0.5);
      items.push({ a, b, mid, color: rungColors[i % rungColors.length] });
    }
    return items;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return (
    <group>
      {elements.map((el, i) => (
        <group key={i}>
          {/* Backbone nodes — softly glowing violet spheres */}
          <mesh position={el.a}>
            <sphereGeometry args={[0.17, 24, 24]} />
            <meshPhysicalMaterial
              color={VIOLET_BRIGHT}
              emissive={VIOLET}
              emissiveIntensity={0.85}
              roughness={0.2}
              metalness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.25}
            />
          </mesh>
          <mesh position={el.b}>
            <sphereGeometry args={[0.17, 24, 24]} />
            <meshPhysicalMaterial
              color={VIOLET_BRIGHT}
              emissive={VIOLET}
              emissiveIntensity={0.85}
              roughness={0.2}
              metalness={0.15}
              clearcoat={1}
              clearcoatRoughness={0.25}
            />
          </mesh>
          {/* Base pair — two half-rungs in teal / emerald */}
          <Rung start={el.a} end={el.mid} color={el.color} radius={0.05} />
          <Rung
            start={el.mid}
            end={el.b}
            color={el.color === TEAL ? EMERALD : TEAL}
            radius={0.05}
          />
          {/* Central hydrogen-bond node with a warm gold kiss */}
          <mesh position={el.mid}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshPhysicalMaterial
              color={GOLD}
              emissive={GOLD}
              emissiveIntensity={0.5}
              roughness={0.15}
              metalness={0.4}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Drifting particle galaxy around the strands                        */
/* ------------------------------------------------------------------ */
function ParticleField({ count = 500 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    const palette = [
      new THREE.Color(VIOLET_BRIGHT),
      new THREE.Color(TEAL),
      new THREE.Color(EMERALD),
      new THREE.Color(GOLD),
    ];
    const weights = [0.45, 0.25, 0.15, 0.15];

    for (let i = 0; i < count; i++) {
      // Cylindrical shell around the helix, denser near the middle
      const angle = Math.random() * Math.PI * 2;
      const r = 1.8 + Math.pow(Math.random(), 1.6) * 4.5;
      const y = (Math.random() - 0.5) * 11;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = Math.sin(angle) * r;

      let pick = Math.random();
      let ci = 0;
      for (let w = 0; w < weights.length; w++) {
        if (pick < weights[w]) {
          ci = w;
          break;
        }
        pick -= weights[w];
      }
      const c = palette[ci];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      siz[i] = 0.02 + Math.random() * 0.05;
    }
    return { positions: pos, colors: col, sizes: siz };
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    points.current.rotation.y = t * 0.03;
    points.current.position.y = Math.sin(t * 0.25) * 0.25;
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
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={sizes.length}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        size={0.055}
        sizeAttenuation
        transparent
        opacity={0.75}
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
      // Gentle tilt toward the pointer — museum-piece, not a toy
      const targetX = state.pointer.y * -0.14;
      const targetZ = state.pointer.x * 0.1;
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        targetX,
        0.04
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        targetZ,
        0.04
      );
    }
  });

  return <group ref={group}>{children}</group>;
}

/* ------------------------------------------------------------------ */
/*  Public scene component                                             */
/* ------------------------------------------------------------------ */
export interface DnaSceneProps {
  /** Overall scale of the helix group. */
  scale?: number;
  /** Particles drifting around the strands. */
  particleCount?: number;
  /** Mouse parallax tilt. */
  interactive?: boolean;
  /** Y-axis rotation speed (radians/s). */
  rotationSpeed?: number;
  /** Geometry density multiplier (lower for small embeds). */
  detail?: number;
  className?: string;
}

export default function DnaScene({
  scale = 1,
  particleCount = 500,
  interactive = true,
  rotationSpeed = 0.14,
  detail = 1,
  className,
}: DnaSceneProps) {
  return (
    <div className={className} aria-hidden>
      <Canvas
        camera={{ position: [0, 0, 11.5], fov: 38 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          {/* Soft key + warm gold rim + violet fill = warm, hopeful light */}
          <ambientLight intensity={0.35} />
          <directionalLight position={[6, 8, 4]} intensity={1.1} color={GOLD} />
          <directionalLight position={[-6, -4, -4]} intensity={0.5} color={TEAL} />
          <pointLight position={[0, 0, 0]} intensity={3.2} color={VIOLET} distance={10} />
          <pointLight position={[0, 5, 3]} intensity={1.2} color={"#ffffff"} distance={12} />

          <group scale={scale}>
            <Float speed={1.1} rotationIntensity={0.12} floatIntensity={0.55}>
              <Rig interactive={interactive} speed={rotationSpeed}>
                <DnaModel detail={detail} />
              </Rig>
            </Float>
            <ParticleField count={particleCount} />
          </group>

          <EffectComposer multisampling={0}>
            <Bloom
              intensity={0.85}
              luminanceThreshold={0.18}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.18} darkness={0.72} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
