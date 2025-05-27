'use client';
import { useEffect } from 'react';

const ClapprPlayer = ({ src }: { src: string }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js';
    script.async = true;
    script.onload = () => {
      new (window as any).Clappr.Player({
        source: src,
        parentId: '#clappr',
        width: '100%',
        height: '100%',
      });
    };
    document.body.appendChild(script);
  }, [src]);

  return <div id="clappr" className="w-full h-[60vh] bg-black"></div>;
};
export default ClapprPlayer;
