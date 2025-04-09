'use client';

import { useParams } from 'next/navigation';

export default function ModuloPage() {
  const params = useParams();
  const id = params.id;

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">🧩 Módulo: {id}</h1>
      <p className="text-lg">
        Estás viendo el contenido del módulo <strong>{id}</strong>. Aquí puedes agregar
        juegos, quizzes, retos y contenido gamificado para tus estudiantes.
      </p>
    </div>
  );
}
