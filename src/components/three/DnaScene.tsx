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
  BrightnessContrast,
  HueSaturation,
} from "@react-three/postprocessing";

/* ------------------------------------------------------------------ */
/*  Palette — molten amber strands, cyan flecks, steel rungs           */
/* ------------------------------------------------------------------ */
const FOG = "#0F1722";
const RUST = "#B8480E";
const ORANGE = "#FF7A2E";
const ORANGE_SOFT = "#FFB35C";
const CREAM = "#FFE3C0";
const KEY_WARM = "#FFC98A";
const TEAL = "#00C9A7";
const CYAN = "#67E8F9";
const STEEL = "#2E4A66";
const STEEL_DEEP = "#132A44";

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

/* Soft round sprite used for glows, bokeh and dust */
function makeCircleTexture(): THREE.Texture {
  const c = document.createElement("canvas");
  c.width = c.height = 128;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.55)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

/* ------------------------------------------------------------------ */
/*  Instanced micro-bead cluster along one strand                      */
/*  Many small spheres + per-bead diffuse tint = organic knobby rope   */
/* ------------------------------------------------------------------ */
function BeadStrand({
  phase,
  params,
  beads,
  material,
  jitter = 0.09,
  rMin = 0.03,
  rMax = 0.1,
  palette,
}: {
  phase: number;
  params: HelixParams;
  beads: number;
  material: THREE.Material;
  jitter?: number;
  rMin?: number;
  rMax?: number;
  /** Optional per-instance diffuse tints (requires white material color). */
  palette?: THREE.Color[];
}) {
  const ref = useRef<THREE.InstancedMesh>(null);

  useLayoutEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    const tint = new THREE.Color();
    for (let i = 0; i < beads; i++) {
      const t = Math.min(
        1,
        Math.max(0, (i + (Math.random() - 0.5) * 1.6) / (beads - 1))
      );
      const p = helixPoint(t, phase, params);
      dummy.position.set(
        p.x + (Math.random() - 0.5) * 2 * jitter,
        p.y + (Math.random() - 0.5) * 2 * jitter,
        p.z + (Math.random() - 0.5) * 2 * jitter
      );
      // Bias toward small beads — a few larger knuckles for organic texture
      dummy.scale.setScalar(rMin + Math.pow(Math.random(), 1.7) * (rMax - rMin));
      dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      if (palette) {
        tint.copy(palette[Math.floor(Math.random() * palette.length)]);
        // Slight per-bead lightness drift so no two beads match
        tint.offsetHSL(0, (Math.random() - 0.5) * 0.06, (Math.random() - 0.5) * 0.1);
        mesh.setColorAt(i, tint);
      }
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  }, [beads, phase, params, jitter, rMin, rMax, palette]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, beads]} material={material}>
      <sphereGeometry args={[1, 10, 10]} />
    </instancedMesh>
  );
}

/* Tiny emissive flecks scattered at given points (rung glitter) */
function Flecks({
  points,
  material,
  rMin = 0.014,
  rMax = 0.038,
}: {
  points: THREE.Vector3[];
  material: THREE.Material;
  rMin?: number;
  rMax?: number;
}) {
  const ref = useRef<THREE.InstancedMesh>(null);

  useLayoutEffect(() => {
    const mesh = ref.current;
    if (!mesh) return;
    const dummy = new THREE.Object3D();
    points.forEach((p, i) => {
      dummy.position.copy(p);
      dummy.scale.setScalar(rMin + Math.random() * (rMax - rMin));
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    });
    mesh.instanceMatrix.needsUpdate = true;
  }, [points, rMin, rMax]);

  return (
    <instancedMesh
      ref={ref}
      args={[undefined, undefined, points.length]}
      material={material}
    >
      <sphereGeometry args={[1, 8, 8]} />
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
      /* White base + per-instance tints; lit by strong warm/cool lights */
      bead: new THREE.MeshStandardMaterial({
        color: 0xffffff,
        roughness: 0.42,
        metalness: 0.05,
      }),
      /* Bright emissive knuckles that feed the bloom */
      beadHot: new THREE.MeshStandardMaterial({
        color: new THREE.Color(ORANGE_SOFT),
        emissive: new THREE.Color(ORANGE),
        emissiveIntensity: 1.9,
        roughness: 0.3,
      }),
      beadSparkle: new THREE.MeshStandardMaterial({
        color: new THREE.Color(CYAN),
        emissive: new THREE.Color(CYAN),
        emissiveIntensity: 2.1,
        roughness: 0.25,
      }),
      rung: new THREE.MeshPhysicalMaterial({
        color: new THREE.Color(STEEL),
        emissive: new THREE.Color(STEEL_DEEP),
        emissiveIntensity: 0.4,
        roughness: 0.22,
        metalness: 0.65,
        clearcoat: 1,
        clearcoatRoughness: 0.15,
      }),
      fleckWarm: new THREE.MeshStandardMaterial({
        color: new THREE.Color(ORANGE_SOFT),
        emissive: new THREE.Color(ORANGE),
        emissiveIntensity: 2.4,
      }),
      fleckCool: new THREE.MeshStandardMaterial({
        color: new THREE.Color(CYAN),
        emissive: new THREE.Color(CYAN),
        emissiveIntensity: 2.4,
      }),
      cap: new THREE.MeshStandardMaterial({
        color: new THREE.Color(CREAM),
        emissive: new THREE.Color(ORANGE),
        emissiveIntensity: 0.7,
        roughness: 0.35,
      }),
    }),
    []
  );

  /* Warm bead palette — rust shadows to cream highlights */
  const beadPalette = useMemo(
    () => [
      new THREE.Color(RUST),
      new THREE.Color("#E85A1A"),
      new THREE.Color(ORANGE),
      new THREE.Color(ORANGE),
      new THREE.Color(ORANGE_SOFT),
      new THREE.Color(ORANGE_SOFT),
      new THREE.Color(CREAM),
    ],
    []
  );

  const { rungs, warmFlecks, coolFlecks } = useMemo(() => {
    const list: {
      mid: THREE.Vector3;
      quat: THREE.Quaternion;
      len: number;
      pa: THREE.Vector3;
      pb: THREE.Vector3;
    }[] = [];
    const warm: THREE.Vector3[] = [];
    const cool: THREE.Vector3[] = [];
    const up = new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < params.pairs; i++) {
      const t = i / (params.pairs - 1);
      const pa = helixPoint(t, 0, params);
      const pb = helixPoint(t, Math.PI, params);
      const dir = new THREE.Vector3().subVectors(pb, pa);
      list.push({
        mid: new THREE.Vector3().addVectors(pa, pb).multiplyScalar(0.5),
        quat: new THREE.Quaternion().setFromUnitVectors(up, dir.clone().normalize()),
        len: dir.length(),
        pa,
        pb,
      });
      /* Glitter specks along each rung — the sparkle in the references */
      const n = 7;
      for (let k = 1; k < n - 1; k++) {
        const p = new THREE.Vector3().lerpVectors(pa, pb, k / (n - 1));
        p.x += (Math.random() - 0.5) * 0.05;
        p.y += (Math.random() - 0.5) * 0.05;
        p.z += (Math.random() - 0.5) * 0.05;
        (Math.random() < 0.6 ? warm : cool).push(p);
      }
    }
    return { rungs: list, warmFlecks: warm, coolFlecks: cool };
  }, [params]);

  const beadCount = Math.round(1150 * detail);

  return (
    <group>
      {/* Knobby molecule-cluster backbones */}
      {[0, Math.PI].map((phase) => (
        <group key={phase}>
          <BeadStrand
            phase={phase}
            params={params}
            beads={beadCount}
            material={materials.bead}
            palette={beadPalette}
            jitter={0.085}
            rMin={0.032}
            rMax={0.105}
          />
          <BeadStrand
            phase={phase}
            params={params}
            beads={Math.round(beadCount * 0.16)}
            material={materials.beadHot}
            jitter={0.07}
            rMin={0.02}
            rMax={0.05}
          />
          <BeadStrand
            phase={phase}
            params={params}
            beads={Math.round(beadCount * 0.07)}
            material={materials.beadSparkle}
            jitter={0.11}
            rMin={0.013}
            rMax={0.034}
          />
        </group>
      ))}

      {/* Glassy steel rungs with glitter flecks */}
      {rungs.map((r, i) => (
        <group key={i}>
          <mesh position={r.mid} quaternion={r.quat} material={materials.rung}>
            <cylinderGeometry args={[0.032, 0.032, r.len * 0.88, 10, 1]} />
          </mesh>
          <mesh position={r.pa} material={materials.cap}>
            <sphereGeometry args={[0.1, 12, 12]} />
          </mesh>
          <mesh position={r.pb} material={materials.cap}>
            <sphereGeometry args={[0.1, 12, 12]} />
          </mesh>
        </group>
      ))}
      <Flecks points={warmFlecks} material={materials.fleckWarm} />
      <Flecks points={coolFlecks} material={materials.fleckCool} />
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Luminous backdrop — the cinematic glow environment                 */
/* ------------------------------------------------------------------ */
function GlowBackdrop({ sprite }: { sprite: THREE.Texture }) {
  const glows: {
    pos: [number, number, number];
    scale: number;
    color: string;
    opacity: number;
  }[] = [
    { pos: [2.8, 0.8, -4.5], scale: 15, color: ORANGE, opacity: 0.2 },
    { pos: [1.2, 0.3, -3], scale: 7.5, color: "#FFD9A0", opacity: 0.24 },
    { pos: [-4.5, -2.5, -5.5], scale: 13, color: TEAL, opacity: 0.11 },
    { pos: [-3, 3.8, -5], scale: 10, color: "#177E8C", opacity: 0.1 },
  ];
  return (
    <>
      {glows.map((g, i) => (
        <sprite key={i} position={g.pos} scale={[g.scale, g.scale, 1]}>
          <spriteMaterial
            map={sprite}
            color={g.color}
            transparent
            opacity={g.opacity}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            fog={false}
          />
        </sprite>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Particle atmosphere — dust, mid bokeh, big foreground bokeh        */
/* ------------------------------------------------------------------ */
function makeCloud(
  count: number,
  rMinBase: number,
  rSpread: number,
  ySpread: number,
  zOffset: number,
  palette: { c: THREE.Color; w: number }[]
) {
  const pos = new Float32Array(count * 3);
  const col = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const r = rMinBase + Math.pow(Math.random(), 1.4) * rSpread;
    pos[i * 3] = Math.cos(angle) * r;
    pos[i * 3 + 1] = (Math.random() - 0.5) * ySpread;
    pos[i * 3 + 2] = Math.sin(angle) * r + zOffset;

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

function Cloud({
  data,
  sprite,
  size,
  opacity,
  drift = 0.02,
}: {
  data: { pos: Float32Array; col: Float32Array };
  sprite: THREE.Texture;
  size: number;
  opacity: number;
  drift?: number;
}) {
  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * drift;
    ref.current.position.y = Math.sin(t * 0.18 + size) * 0.25;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[data.pos, 3]}
          count={data.pos.length / 3}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[data.col, 3]}
          count={data.col.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        vertexColors
        map={sprite}
        alphaMap={sprite}
        size={size}
        sizeAttenuation
        transparent
        opacity={opacity}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Atmosphere({ count, sprite }: { count: number; sprite: THREE.Texture }) {
  const { dust, mid, fore } = useMemo(() => {
    const warm = [
      { c: new THREE.Color(ORANGE_SOFT), w: 0.4 },
      { c: new THREE.Color(ORANGE), w: 0.24 },
      { c: new THREE.Color(CREAM), w: 0.14 },
      { c: new THREE.Color(TEAL), w: 0.14 },
      { c: new THREE.Color(CYAN), w: 0.08 },
    ];
    return {
      dust: makeCloud(count, 1.8, 5, 12, 0, warm),
      mid: makeCloud(Math.round(count * 0.2), 2.5, 5.5, 12, -1, warm),
      fore: makeCloud(Math.round(count * 0.05), 2.2, 4, 9, 5.5, warm),
    };
  }, [count]);

  return (
    <>
      <Cloud data={dust} sprite={sprite} size={0.045} opacity={0.75} drift={0.025} />
      <Cloud data={mid} sprite={sprite} size={0.7} opacity={0.2} drift={-0.015} />
      {/* Near-camera orbs — melt into huge bokeh discs under DoF */}
      <Cloud data={fore} sprite={sprite} size={1.7} opacity={0.12} drift={0.01} />
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
      const targetX = state.pointer.y * -0.11;
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
  rotationSpeed = 0.09,
  detail = 1,
  lean = 0.32,
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

  const [sprite] = useState(() => makeCircleTexture());

  return (
    <div ref={wrapRef} className={className} aria-hidden>
      <Canvas
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 11.8], fov: 34 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        <Suspense fallback={null}>
          <fog attach="fog" args={[FOG, 11, 21]} />

          {/* Hot amber key, cyan rim from behind, warm core */}
          <ambientLight intensity={0.22} />
          <directionalLight position={[5, 7, 6]} intensity={2.3} color={KEY_WARM} />
          <directionalLight position={[-6, 2, -6]} intensity={1.15} color={CYAN} />
          <pointLight position={[0, 0, 0]} intensity={3} color={ORANGE} distance={9} />
          <pointLight position={[3, 1, 2]} intensity={2} color={"#FFD9A0"} distance={8} />

          <GlowBackdrop sprite={sprite} />

          <group scale={scale} rotation={[0, 0, lean]}>
            <Float speed={1} rotationIntensity={0.07} floatIntensity={0.45}>
              <Rig interactive={interactive} speed={rotationSpeed}>
                <DnaModel detail={detail} />
              </Rig>
            </Float>
            <Atmosphere count={particleCount} sprite={sprite} />
          </group>

          <EffectComposer multisampling={0} enableNormalPass={false}>
            {dof ? (
              <DepthOfField
                worldFocusDistance={11.8}
                worldFocusRange={5}
                bokehScale={5.5}
              />
            ) : (
              <></>
            )}
            <Bloom
              intensity={1.35}
              luminanceThreshold={0.12}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            {/* Teal-orange film grade */}
            <HueSaturation saturation={0.16} />
            <BrightnessContrast brightness={-0.015} contrast={0.14} />
            <Vignette eskil={false} offset={0.14} darkness={0.85} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
