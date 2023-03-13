/* eslint-disable import/no-extraneous-dependencies */
import { Comfortaa, Poppins } from '@next/font/google';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import type { ReactNode } from 'react';
import { useContext } from 'react';

import Navbar from '@/components/Navbar';
import { AppConfig } from '@/utils/AppConfig';
import { MouseContext } from '@/utils/mouse-observer';
import { ScrollContext } from '@/utils/scroll-observer';
import { SizeContext } from '@/utils/size-observer';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const comfortaa = Comfortaa({
  subsets: ['latin'],
  variable: '--font-comfortaa',
});
const Main = (props: IMainProps) => {
  const { innerWidth } = useContext(SizeContext);
  const { scrollY } = useContext(ScrollContext);
  const { x, y } = useContext(MouseContext);
  const numY = 0.35 - scrollY * 0.00425;
  const distort = 0.3 + scrollY * 0.0006;
  // console.log(scrollY);

  return (
    <>
      <div
        className={` items-center  text-white antialiased ${comfortaa.className}  `}
      >
        {props.meta}
        <div className="mx-auto  max-w-screen-lg  ">
          <Navbar fontName={comfortaa} />

          <div className={`absolute inset-0 -z-10 min-h-[200vh]`}>
            <Canvas className="">
              <ambientLight intensity={1.75} />
              <directionalLight
                position={[-3 + x * 3, -numY * 0.001 + 2 - y * 3, 4]}
                intensity={2.5}
              />
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
            </Canvas>
            <main className="z-10">{props.children}</main>
            <footer className="border-t border-gray-300 bg-transparent py-8 text-center text-sm">
              © Copyright {new Date().getFullYear()} {AppConfig.title}. Made
              with <a href="#">leadistro</a>.
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export { Main };
