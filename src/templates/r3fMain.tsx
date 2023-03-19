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
  const distort = 0.4;
  // const ref = useRef<MeshProps | null>(null);

  return (
    <>
      <div
        className={`${
          innerWidth < 450 ? 'min-h-screen' : 'min-h-[200vh]'
        }  flex min-w-full flex-col items-center justify-between bg-black text-center md:text-start `}
      >
        {meta}
        <Navbar fontName={comfortaa} />
        {/* Background Animation */}
        <div
          className={`absolute  w-full object-cover ${
            innerWidth < 450 ? 'h-[120vh]' : 'h-[210vh]'
          }  `}
        >
          <Canvas className="h-full w-full">
            <ambientLight intensity={1.75} />
            <directionalLight
              position={[-3 + x * 3, -numY * 0.001 + 2 - y * 3, 4 + x + y]}
              intensity={2.5}
            />
            <React.Suspense fallback={null}>
              <Sphere
                visible
                args={[1.0, 500, 500]}
                scale={innerWidth < 640 ? 0.75 : 1.25}
                position={
                  innerWidth > 640
                    ? [1 + x * -0.5, 1 + numY, 2.75]
                    : [0, 1 + numY, 1.75]
                }
              >
                <MeshDistortMaterial
                  // ref={ref}
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
