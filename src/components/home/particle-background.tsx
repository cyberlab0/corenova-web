"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Deterministic PRNG so particle coordinates are pure and hydration-safe
function mulberry32(seed: number) {
  let a = seed;
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Particles() {
  const count = 1000;
  const mesh = useRef<THREE.InstancedMesh>(null);

  const particles = useMemo(() => {
    const rand = mulberry32(9697390);
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = rand() * 100;
      const factor = rand() * 100 + 20;
      const speed = rand() * 0.01 + 0.005;
      const x = rand() * 200 - 100;
      const y = rand() * 200 - 100;
      const z = rand() * 200 - 100;
      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((particle, i) => {
      const { factor, speed, x, y, z } = particle;

      const t = (particle.time += speed);

      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );

      const scale = Math.max(0.1, Math.sin(t) * 1.5);
      dummy.scale.set(scale, scale, scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current!.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06B6D4" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="#2563EB" transparent opacity={0.6} />
      </instancedMesh>
    </>
  );
}

export function ParticleBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Canvas camera={{ fov: 75, position: [0, 0, 30] }} gl={{ antialias: false, alpha: true }}>
        <Particles />
      </Canvas>
    </div>
  );
}
