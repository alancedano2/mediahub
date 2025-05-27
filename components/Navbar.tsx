import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-neutral-950 px-4 py-2 flex justify-between items-center">
      <h1 className="text-xl font-bold text-purple-500">MediaHub</h1>
      <div className="flex gap-4">
        <Link href="/">Eventos</Link>
        <Link href="/noticias">Noticias</Link>
        <Link href="/login" className="bg-purple-600 px-3 py-1 rounded">Login</Link>
      </div>
    </nav>
  );
}
