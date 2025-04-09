'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <Link href="/" className="text-xl font-bold">
        Ciudadanía Digital
      </Link>
      <div className="flex gap-4">
        <Link href="/auth/login">Iniciar sesión</Link>
        <Link href="/auth/register">Registrarse</Link>
      </div>
    </nav>
  );
}
