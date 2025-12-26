"use client";

import { ArrowRight } from "lucide-react";
import { Button, Container } from "@/components/ui";

export function HeroSection() {
  return (
    <section className="relative min-h-svh flex items-center justify-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-100 via-white to-white" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center py-32">
          {/* Brand name */}
          <p className="text-base md:text-lg font-medium tracking-[0.3em] text-neutral-400 uppercase mb-8">
            Academia Épica
          </p>

          {/* Main Headline */}
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold tracking-tight text-neutral-900 leading-[1.1] mb-8">
            Tu academia.
            <br />
            <span className="text-neutral-300">Tu plataforma.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-neutral-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Desarrollamos tu propia plataforma educativa. Tu marca, tu control,
            tu éxito.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8" asChild>
              <a
                href="#agenda"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#agenda");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Empezar ahora
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-base text-neutral-500 hover:text-neutral-900"
              asChild
            >
              <a
                href="#servicios"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#servicios");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Conocer más →
              </a>
            </Button>
          </div>

          {/* Tagline */}
          <div className="mt-20 pt-10 border-t border-neutral-100">
            <p className="text-sm text-neutral-500 italic">
              &ldquo;El futuro de la educación online es tuyo&rdquo;
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
