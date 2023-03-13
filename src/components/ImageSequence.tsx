import type gsap from 'gsap';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef } from 'react';

import { ScrollContext } from '@/utils/scroll-observer';

interface ImageSequenceProps {
  images: string[];
  timeline: gsap.core.Timeline;
}
const ImageSequence: React.FC<ImageSequenceProps> = ({ images, timeline }) => {
  const router = useRouter();
  const { scrollY } = useContext(ScrollContext);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const { scrollHeight, clientHeight } = container;
    const progress = scrollY / (scrollHeight - clientHeight);
    timeline.progress(progress);
  }, [scrollY, timeline]);
  return (
    <div
      ref={containerRef}
      className="relative h-halfScreen overflow-hidden bg-red-500"
      style={{ width: '100%', height: '50vh' }}
    >
      {images.map((image, i) => (
        <Image
          alt={`${`${router.basePath}${image}`}`}
          key={image}
          src={`${router.basePath}${image}`}
          fill={true}
          style={{
            objectFit: 'cover',
          }}
          className={`absolute inset-0 opacity-0 ${
            i === 0 ? 'opacity-100' : ''
          }`}
        />
      ))}
    </div>
  );
};

export default ImageSequence;
