import { useGLTF } from "@react-three/drei";

export default function SportCarModel(props) {
  const { scene } = useGLTF("/models/sportcar.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} {...props} />;
}

useGLTF.preload("/models/sportcar.glb");
