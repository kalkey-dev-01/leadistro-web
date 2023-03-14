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
  const numY = 0.35 - scrollY * 0.00425;
  const distort = 0.3 + scrollY * 0.0006;
  return (
    <>
      <div
        className={`${
          innerWidth < 450 ? 'min-h-[161.5vh]' : 'min-h-[211.5vh]'
        } flex min-w-full flex-col items-center justify-between bg-black   py-2 text-center `}
      >
        {meta}
        <Navbar fontName={comfortaa} />
        {/* Background Animation */}
        <div
          className={`absolute w-full object-cover ${
            innerWidth < 450 ? 'h-[160vh]' : 'h-[210vh]'
          }  `}
        >
          <Canvas>
            <ambientLight intensity={1.75} />
            <directionalLight
              position={[-3 + x * 3, -numY * 0.001 + 2 - y * 3, 4]}
              intensity={2.5}
            />
            <React.Suspense>
              <Sphere
                visible
                args={[1.0, 500, 500]}
                scale={innerWidth < 640 ? 0.5 : 1}
                position={[0, numY, 2.5]}
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
