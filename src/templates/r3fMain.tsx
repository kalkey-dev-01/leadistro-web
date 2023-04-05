import { MeshDistortMaterial } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useContext, useRef } from 'react';
import type { Mesh, SphereGeometry } from 'three';

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

function Box() {
  const { scrollY } = useContext(ScrollContext);
  const ref = useRef<Mesh>(null!);
  const sphereRef = useRef<SphereGeometry>(null!);
  useFrame(() => {
    ref.current.rotation.y += 0.0005;
    ref.current.rotation.x += 0.0002;
    ref.current.position.y = -scrollY * 0.0001;
    // ref.current.position.x =
    //   Math.sin(-scrollY * Math.PI * 0.0001) +
    //   Math.cos(scrollY * Math.PI * 0.0001);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[1, 500, 500, 0]} ref={sphereRef} />
      <MeshDistortMaterial
        color="#fff"
        attach="material"
        speed={1}
        distort={0.5}
      />
    </mesh>
  );
}

function Scene() {
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
      {/* <Canvas camera={{ position: [0, 0, 2], fov: 60, near: 1, far: 3 }}> */}
      <ambientLight intensity={0.05} />

      {/* <axesHelper args={[10]} /> */}
      <Box />
      {/* <Box /> */}
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
        {/* Put this part before </body> tag */}
        {/* <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom max-w-screen-lg sm:modal-middle">
          <div className="modal-box h-[40vh] bg-leadistroDark px-10 text-leadistroWhite md:h-full">
            <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
              Sign In
            </h3>
            <p className="py-4">
              Youve been selected for a chance to get one year of subscription
              to use Wikipedia for free!
            </p>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="bg-white">
                Yay!
              </label>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MainWithThree;
