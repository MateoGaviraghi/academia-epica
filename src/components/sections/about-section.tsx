"use client";

import { Users, Target, Heart, Lightbulb, Award, Rocket } from "lucide-react";
import { Section, Container, Badge } from "@/components/ui";

const values = [
  {
    icon: Target,
    title: "Foco en Resultados",
    description:
      "No construimos webs bonitas, construimos plataformas que generan ingresos.",
  },
  {
    icon: Heart,
    title: "Pasión por Educar",
    description:
      "Creemos que la educación online puede cambiar vidas. Por eso hacemos lo que hacemos.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Constante",
    description:
      "Siempre explorando nuevas tecnologías para darte la mejor experiencia.",
  },
  {
    icon: Users,
    title: "Socios, No Proveedores",
    description:
      "Tu éxito es nuestro éxito. Trabajamos codo a codo con cada cliente.",
  },
];

const stats = [
  { value: "5+", label: "Años de experiencia" },
  { value: "50+", label: "Academias lanzadas" },
  { value: "15K+", label: "Estudiantes impactados" },
  { value: "24/7", label: "Soporte técnico" },
];

export function AboutSection() {
  return (
    <Section id="nosotros" variant="muted">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div>
            <Badge variant="outline" className="mb-6">
              Sobre Nosotros
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Somos <span className="gradient-text">Épica</span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Nacimos con una misión clara: democratizar el acceso a
                plataformas educativas de calidad.
              </p>
              <p>
                Creemos que cada educador, coach o experto merece tener su
                propia academia online, con su marca y bajo su control total. No
                más depender de marketplaces que se quedan con tus ganancias y
                tus datos.
              </p>
              <p>
                Nuestro equipo combina años de experiencia en desarrollo web,
                diseño UX y marketing digital. Entendemos tanto la tecnología
                como el negocio educativo.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 pt-10 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-2xl md:text-3xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-primary" />
              <span className="font-medium">Nuestros Valores</span>
            </div>

            {values.map((value, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-6">
              <a
                href="#agenda"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#agenda");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                <Rocket className="w-4 h-4" />
                Empezá tu proyecto con nosotros
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
