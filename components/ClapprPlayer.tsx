'use client';
import { useEffect, useRef } from 'react';

export default function ClapprPlayer({ url }: { url: string }) {
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/clappr@latest/dist/clappr.min.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).Clappr && playerRef.current) {
        new (window as any).Clappr.Player({
          source: url,
          parentId: '#player',
          width: '100%',
          height: 500,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return <div id="player" ref={playerRef} className="rounded-lg" />;
}
