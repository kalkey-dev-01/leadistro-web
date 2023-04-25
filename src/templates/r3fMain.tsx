import { Comfortaa, Poppins } from '@next/font/google';
import { MeshWobbleMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useContext, useRef } from 'react';
import type { Mesh, SphereGeometry } from 'three';
import { Vector3 } from 'three';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
// import { MouseContext } from '@/utils/mouse-observer';
// import { MouseContext } from '@/utils/mouse-observer';
import { ScrollContext } from '@/utils/scroll-observer';
// import { ScrollContext } from '@/utils/scroll-observer';

type Props = {
  meta: React.ReactNode;
  children: React.ReactNode;
};

const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

function Box({
  position,
  color,
  rotY,
  rotX,
  posY,
  posX,
  radius,
}: {
  position: Vector3 | undefined;
  color: string;
  rotY: number;
  rotX: number;
  posY: number;
  posX: number;
  radius: number;
}) {
  const ref = useRef<Mesh>(null!);
  const sphereRef = useRef<SphereGeometry>(null!);
  const PositionY = posY;
  const RotationY = rotY;
  const RotationX = rotX;
  const PositionX = posX;
  useFrame(() => {
    ref.current.rotation.y += RotationY;
    ref.current.rotation.x += RotationX;
    ref.current.position.y = PositionY;
    ref.current.position.x = PositionX;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[radius, 500, 500, 0]} ref={sphereRef} />
      <MeshWobbleMaterial color={color} attach="material" speed={10} />
    </mesh>
  );
}

// Render Boxes in scene

// const boxes: Function[] = [
//   Box,

//  ];

function Scene() {
  const { scrollY } = useContext(ScrollContext);
  return (
    <Canvas
      orthographic
      camera={{
        position: [0, 0, 3],
        left: -2,
        right: -2,
        bottom: -2,
        top: 2,
        zoom: 325,
      }}
    >
      <ambientLight intensity={0.06} />
      <Box
        radius={0.85}
        posX={
          Math.sin(-scrollY * Math.PI * 0.0001) +
          Math.cos(scrollY * Math.PI * 0.0001)
        }
        posY={-scrollY * 0.0001}
        rotX={0.0002}
        rotY={0.0005}
        color="#E7E1EB"
        position={new Vector3(0, -1, 0)}
      />
      <Box
        radius={0.95}
        posX={
          Math.cos(scrollY * Math.PI * 0.0001) +
          Math.sin(scrollY * Math.PI * 0.0001)
        }
        posY={-scrollY * 0.0003}
        rotX={0.0001}
        rotY={0.0009}
        color="#E0D5D5"
        position={new Vector3(1, 0, -1)}
      />
      <Box
        radius={1}
        posX={
          Math.atan(scrollY * Math.PI * 0.0001) +
          -Math.atanh(scrollY * Math.PI * 0.0001)
        }
        posY={-scrollY * 0.0005}
        rotX={0.0004}
        rotY={0.0001}
        color="#fefefe"
        position={new Vector3(-1, 1, 1)}
      />
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
        className={`flex min-w-full flex-col items-center justify-between bg-black text-center md:text-start ${comfortaa.variable} ${poppins.variable}`}
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
