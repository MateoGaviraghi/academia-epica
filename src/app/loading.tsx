import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-white">
      {/* Fondo dividido */}
      <div className="absolute inset-y-0 left-0 w-1/2 bg-white" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-white" />

      {/* Logo grande */}
      <div className="relative z-10 animate-pulse">
        <Image
          src="/logo.png"
          alt="Cargando..."
          width={400}
          height={120}
          className="h-28 sm:h-36 w-auto"
          priority
        />
      </div>
    </div>
  );
}
