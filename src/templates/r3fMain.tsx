import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useContext } from 'react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { MouseContext } from '@/utils/mouse-observer';
import { ScrollContext } from '@/utils/scroll-observer';
// import { MouseContext } from '@/utils/mouse-observer';
// import { ScrollContext } from '@/utils/scroll-observer';
import { SizeContext } from '@/utils/size-observer';

import { comfortaa } from './Main';

type Props = {
  meta: React.ReactNode;
  children: React.ReactNode;
};

const MainWithThree: React.FC<Props> = ({ children, meta }) => {
  const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  const { x, y } = useContext(MouseContext);
  const numY = -scrollY * 0.00425;
  const distort = numY * (-scrollY * 0.001);
  return (
    <>
      <div
        className={`${
          innerWidth < 450 ? 'min-h-[101.5vh]' : 'min-h-[211.5vh]'
        } flex min-w-full flex-col items-center justify-between bg-black text-center md:text-start `}
      >
        {meta}
        <Navbar fontName={comfortaa} />
        {/* Background Animation */}
        <div
          className={`absolute w-full object-cover ${
            innerWidth < 450 ? 'h-[100vh]' : 'h-[210vh]'
          }  `}
        >
          <Canvas>
            <ambientLight intensity={1.75} />
            <directionalLight
              position={[-3 + x * 3, -numY * 0.001 + 2 - y * 3, 4 + x + y]}
              intensity={2.5}
            />
            <React.Suspense fallback={null}>
              <Sphere
                visible
                args={[1.0, 500, 500]}
                scale={innerWidth < 640 ? 1 : 1.25}
                position={
                  innerWidth > 640 ? [1, 1 + numY, 2.5] : [0, numY - 0.59, 2]
                }
              >
                <MeshDistortMaterial
                  color="#212529"
                  attach="material"
                  speed={1.25}
                  distort={distort}
                />
              </Sphere>
            </React.Suspense>
          </Canvas>
        </div>
        {children}
        <Footer />
      </div>
    </>
  );
};

export default MainWithThree;
