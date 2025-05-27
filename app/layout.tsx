import './globals.css';
export const metadata = {
  title: 'MediaHub',
  description: 'Transmisión de eventos en vivo',
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
