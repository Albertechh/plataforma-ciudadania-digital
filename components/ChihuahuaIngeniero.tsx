'use client';

import Image from 'next/image';

export default function ChihuahuaIngeniero() {
  return (
    <div className="mt-4">
      <Image
        src="/ingeniero.png" // Asegúrate que esta imagen esté en /public
        alt="Chihuahua Ingeniero"
        width={200}
        height={200}
        className="rounded-full shadow-lg"
      />
      <p className="text-sm mt-2">¡Hola! Soy Ingeniero, tu guía digital 🐶✨</p>
    </div>
  );
}
