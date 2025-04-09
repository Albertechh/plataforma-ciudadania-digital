import Link from "next/link";
import ChihuahuaIngeniero from "../components/ChihuahuaIngeniero";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <h1 className="text-3xl font-bold mt-8">¡Bienvenido a Ciudadanía Digital!</h1>
      <p className="text-lg max-w-xl">
        Desde preescolar hasta preparatoria. 40 módulos interactivos y gamificados
        para aprender ciudadanía digital de forma divertida.
      </p>
      <ChihuahuaIngeniero />
      <div className="flex gap-4">
        <Link href="/auth/login" className="px-4 py-2 bg-blue-500 text-white rounded">
          Iniciar Sesión
        </Link>
        <Link href="/auth/register" className="px-4 py-2 bg-green-500 text-white rounded">
          Registrarse
        </Link>
      </div>
    </div>
  );
} //hola
