import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ModellinoFerrari = () => {
  const { scene } = useGLTF("src/assets/ferrari/ferrari_f1_2019.glb");

  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

const Modellino = () => {
  return (
    <Canvas style={{ height: "50vh" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} />
      <ModellinoFerrari />
      <OrbitControls />
    </Canvas>
  );
};

export default Modellino;
