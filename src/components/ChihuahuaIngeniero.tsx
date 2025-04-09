import Image from "next/image";

export default function ChihuahuaIngeniero() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src="/chihuahua-ingeniero.png"
        alt="Ingeniero Chihuahua Dorado"
        width={200}
        height={200}
      />
      <p className="mt-2 text-center">
        ¡Hola! Soy Ingeniero, tu guía para aprender ciudadanía digital.
      </p>
    </div>
  );
}
