import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function Bubbles({
  count = 1000,
  radius = 1.25,
  height = 1.2,
  speed = 0.55,
  center = [0, 0.55, 0],
  bubbleSize = 0.045,
}) {
  const meshRef = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const data = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random()) * radius;
      const x = Math.cos(a) * r;
      const z = Math.sin(a) * r;
      const y = (Math.random() - 0.5) * height;

      arr.push({
        position: new THREE.Vector3(x, y, z),
        drift: new THREE.Vector3(
          (Math.random() - 0.5) * 0.12,
          0,
          (Math.random() - 0.5) * 0.12,
        ),
        scale: bubbleSize * (0.6 + Math.random() * 1.3),
        speed: speed * (0.6 + Math.random() * 0.9),
      });
    }
    return arr;
  }, [count, radius, height, speed, bubbleSize]);

  useFrame((_, delta) => {
    const m = meshRef.current;
    if (!m) return;

    for (let i = 0; i < data.length; i++) {
      const b = data[i];

      b.position.y += b.speed * delta;
      b.position.x += b.drift.x * delta;
      b.position.z += b.drift.z * delta;

      // wrap to bottom
      if (b.position.y > height * 0.5) {
        b.position.y = -height * 0.5;
        const a = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * radius;
        b.position.x = Math.cos(a) * r;
        b.position.z = Math.sin(a) * r;
      }

      dummy.position.set(
        center[0] + b.position.x,
        center[1] + b.position.y,
        center[2] + b.position.z,
      );

      dummy.scale.setScalar(b.scale);
      dummy.rotation.y += 0.35 * delta;

      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
    }

    m.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[null, null, count]}>
      <sphereGeometry args={[1, 20, 20]} />
      <MeshTransmissionMaterial
        transmission={1}
        thickness={0.25}
        ior={1.25}
        roughness={0.08}
        chromaticAberration={0.02}
        anisotropy={0.2}
        distortion={0.15}
        distortionScale={0.25}
        temporalDistortion={0.08}
        backside
        depthWrite={false}
      />
    </instancedMesh>
  );
}
