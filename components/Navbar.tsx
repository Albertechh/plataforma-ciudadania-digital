"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const hasToken = document.cookie.includes("token=");
    setIsLogged(hasToken);
  }, [pathname]);

  const handleLogout = () => {
    document.cookie = "token=; path=/; max-age=0";
    router.push("/auth/login");
  };

  return (
    <nav className="bg-yellow-300 text-black px-4 py-3 flex justify-between items-center shadow-md">
      <Link href="/" className="text-2xl font-bold tracking-tight">
        Ciudadanía Digital
      </Link>
      <div className="flex gap-4 text-sm">
        {isLogged ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded">
            Cerrar sesión
          </button>
        ) : (
          <>
            <Link href="/auth/login" className="hover:underline">Login</Link>
            <Link href="/auth/register" className="hover:underline">Registro</Link>
          </>
        )}
      </div>
    </nav>
  );
}
