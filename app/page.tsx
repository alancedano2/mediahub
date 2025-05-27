'use client';
import { useEffect, useState } from 'react';
import ClapprPlayer from '@/components/ClapprPlayer';
import Navbar from '@/components/Navbar';

const eventos = [
  {
    id: 1,
    nombre: 'WWE NXT',
    fecha: 'Todos los martes a las 8:00pm',
    tipo: 'premium',
    stream: 'https://live20.bozztv.com/giatv/giatv-PPVDeportes2/PPVDeportes2/playlist.m3u8',
    tipoPlayer: 'clappr',
  },
  {
    id: 2,
    nombre: 'BSN - Indios de Mayagüez vs. Mets de Guaynabo',
    fecha: 'Hoy a las 8:00pm',
    tipo: 'gratis',
    stream: 'https://www.youtube.com/embed/IiuqLdGSC-o',
    tipoPlayer: 'youtube',
  },
  {
    id: 3,
    nombre: 'NBA - Indiana Pacers vs New York Knicks',
    fecha: 'Hoy a las 7:00pm',
    tipo: 'premium',
    stream: 'https://live20.bozztv.com/giatv/giatv-PPVDeportes2/PPVDeportes2/playlist.m3u8',
    tipoPlayer: 'clappr',
  },
];

export default function Home() {
  const [eventoActivo, setEventoActivo] = useState(eventos[0]);
  return (
    <main>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">{eventoActivo.nombre}</h1>
        <p className="mb-2">{eventoActivo.fecha}</p>
        <div className="mb-4">
          {eventoActivo.tipoPlayer === 'clappr' ? (
            <ClapprPlayer url={eventoActivo.stream} />
          ) : (
            <iframe
              width="100%"
              height="500"
              src={eventoActivo.stream}
              title="Stream"
              allowFullScreen
              className="rounded-lg"
            />
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {eventos.map((e) => (
            <div
              key={e.id}
              className="p-4 border rounded bg-neutral-900 cursor-pointer hover:bg-neutral-800"
              onClick={() => setEventoActivo(e)}
            >
              <h2 className="text-lg font-semibold">{e.nombre}</h2>
              <p className="text-sm">{e.fecha}</p>
              <span className={`text-xs px-2 py-1 rounded bg-${e.tipo === 'premium' ? 'purple' : 'green'}-600`}>
                {e.tipo.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
