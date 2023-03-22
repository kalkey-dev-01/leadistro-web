// import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import type { Mesh } from 'three';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// import { MouseContext } from '@/utils/mouse-observer';
// import { ScrollContext } from '@/utils/scroll-observer';

type Props = {
  meta: React.ReactNode;
  children: React.ReactNode;
};

function Box() {
  const ref = useRef<Mesh>(null!);
  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 100, 100, 0]} />
      <meshStandardMaterial color={'#e0e0e0'} />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 2],
        left: -2,
        right: -2,
        bottom: -2,
        top: 2,
        zoom: 300,
      }}
    >
      {/* <Canvas camera={{ position: [0, 0, 2], fov: 60, near: 1, far: 3 }}> */}
      <ambientLight intensity={0.2} />

      <axesHelper args={[10]} />
      <Box />
      <Box />
    </Canvas>
  );
}

// function CanvasWithSphere(
//   x: number,
//   numY: number,
//   y: number,
//   innerWidth: number,
//   z: number,
//   distort: number
// ) {
//   return (
//     <Canvas className="h-full w-full">
//       <ambientLight intensity={1.75} />
//       <directionalLight
//         position={[-3 + x * 3, -numY * 0.001 + 2 - y * 3, 4 + x + y]}
//         intensity={2.5}
//       />
//       <React.Suspense fallback={null}>
//         <Sphere
//           visible
//           args={[1.0, 500, 500]}
//           scale={innerWidth < 640 ? 0.75 : 1.25}
//           position={
//             innerWidth > 640 ? [1 + x * -0.5, z + numY, z] : [0, 1 + numY, 1.75]
//           }
//         >
//           <MeshDistortMaterial
//             color="#212529"
//             attach="material"
//             speed={1.25}
//             distort={distort}
//           />
//         </Sphere>
//       </React.Suspense>
//     </Canvas>
//   );
// }

const MainWithThree: React.FC<Props> = ({ children, meta }) => {
  //  const { innerWidth } = useContext(SizeContext);
  //   const { scrollY } = useContext(ScrollContext);
  //   const { x, y } = useContext(MouseContext);
  //   const numY = -scrollY * 0.00425;
  //   const distort = 0.4;
  //   // const ref = useRef<MeshProps | null>(null);
  //   const z: number = 2.15;
  return (
    <>
      <div
        className={`flex min-w-full  flex-col items-center justify-between bg-black text-center md:text-start `}
      >
        {meta}
        <div className="fixed h-screen w-full bg-black">
          <Scene />
        </div>
        <Navbar />
        {/* Background Animation */}

        {children}

        <Footer />
      </div>
    </>
  );
};

export default MainWithThree;
