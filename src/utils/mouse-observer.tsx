import React from 'react';

interface MouseValue {
  x: number;
  y: number;
}

export const MouseContext = React.createContext<MouseValue>({
  x: 0,
  y: 0,
});

const MouseObserver: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [coord, setCoord] = React.useState({ x: 0, y: 0 });
  const handleMouseMove = React.useCallback(
    (e: { clientX: number; clientY: number }) => {
      return setCoord({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    },
    []
  );
  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);
  return (
    <MouseContext.Provider value={coord}>
      <>{children}</>
    </MouseContext.Provider>
  );
};

export default MouseObserver;
