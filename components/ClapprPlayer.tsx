'use client';
import { useEffect, useRef } from 'react';
import Clappr from 'clappr';

export default function ClapprPlayer({ url }: { url: string }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (!playerRef.current) return;
    const player = new Clappr.Player({
      source: url,
      parentId: '#player',
      width: '100%',
      height: 500,
    });
    return () => player.destroy();
  }, [url]);

  return <div id="player" ref={playerRef} className="rounded-lg" />;
}
