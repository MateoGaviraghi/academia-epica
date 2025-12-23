"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function PageTransition() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">(
    "visible"
  );

  useEffect(() => {
    // Mostrar logo brevemente, luego desvanecer
    const fadeTimer = setTimeout(() => {
      setPhase("fading");
    }, 700);

    // Ocultar completamente después de la animación
    const hideTimer = setTimeout(() => {
      setPhase("hidden");
    }, 1300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        opacity: phase === "fading" ? 0 : 1,
        transition: "opacity 0.6s ease-out",
        pointerEvents: phase === "fading" ? "none" : "auto",
      }}
    >
      <Image
        src="/logo.png"
        alt="Kursa"
        width={320}
        height={100}
        style={{ height: "7rem", width: "auto" }}
        priority
      />
    </div>
  );
}
