"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Container,
  Badge,
  Card,
  Button,
} from "@/components/ui";
import { ArrowLeft, ArrowRight, Sparkles, Rocket } from "lucide-react";

interface Screenshot {
  label: string;
  gradient: string;
}

interface Project {
  title: string;
  category: string;
  result: string;
  highlights: string[];
  screenshots: Screenshot[];
  accent: string;
}

const projects: Project[] = [
  {
    title: "Marketing Academy",
    category: "Cursos on-demand + comunidad",
    result: "+40% en conversiones",
    highlights: [
      "Home personalizada",
      "Panel de alumnos",
      "Embudo de venta propio",
    ],
    screenshots: [
      { label: "Home", gradient: "from-primary/20 via-primary/10 to-white" },
      {
        label: "Panel de alumnos",
        gradient: "from-sky-200/40 via-white to-primary/5",
      },
      {
        label: "Checkout",
        gradient: "from-amber-200/40 via-white to-primary/5",
      },
    ],
    accent: "from-primary/20 to-primary/5",
  },
  {
    title: "TechBootcamp",
    category: "Bootcamp en vivo + mentoría",
    result: "800+ alumnos formados",
    highlights: ["Clases en vivo", "Proyectos guiados", "Code review"],
    screenshots: [
      {
        label: "Dashboard",
        gradient: "from-emerald-300/40 via-white to-emerald-50",
      },
      {
        label: "Clase en vivo",
        gradient: "from-blue-300/30 via-white to-emerald-50",
      },
      {
        label: "Proyectos",
        gradient: "from-teal-300/30 via-white to-emerald-50",
      },
    ],
    accent: "from-emerald-200/30 to-emerald-50/30",
  },
  {
    title: "Wellness Studio",
    category: "Membresía + app móvil",
    result: "5.000+ miembros activos",
    highlights: [
      "Biblioteca de videos",
      "Calendario de clases",
      "Pagos recurrentes",
    ],
    screenshots: [
      {
        label: "Biblioteca",
        gradient: "from-amber-200/30 via-white to-orange-50",
      },
      {
        label: "Calendario",
        gradient: "from-pink-200/30 via-white to-orange-50",
      },
      { label: "Pagos", gradient: "from-rose-200/30 via-white to-orange-50" },
    ],
    accent: "from-amber-200/30 to-amber-50/30",
  },
];

export function ProjectsSection() {
  const [activeSlides, setActiveSlides] = useState<number[]>(
    projects.map(() => 0)
  );
  const isOdd = projects.length % 2 === 1;

  const updateSlide = (index: number, direction: "prev" | "next") => {
    setActiveSlides((prev) => {
      const next = [...prev];
      const total = projects[index].screenshots.length;
      const current = prev[index];
      const delta = direction === "next" ? 1 : -1;
      next[index] = (current + delta + total) % total;
      return next;
    });
  };

  return (
    <Section id="proyectos" variant="muted">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            Proyectos
          </Badge>
          <SectionTitle>
            Casos reales con <span className="gradient-text">impacto</span>
          </SectionTitle>
          <SectionDescription>
            Proyectos recientes con resultados medibles. Cada uno con su diseño,
            lógica y contenido a medida.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={cn(
                "p-6 flex flex-col gap-6 rounded-none",
                isOdd && index === projects.length - 1
                  ? "lg:col-span-2 lg:max-w-5xl lg:mx-auto"
                  : ""
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg font-semibold leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-emerald-600 font-medium flex items-center gap-2 mt-1">
                    <Sparkles className="w-4 h-4" />
                    {project.result}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
              </div>

              <div
                className={`relative overflow-hidden bg-gradient-to-br ${project.accent} border border-border/50 rounded-none`}
              >
                <div className="relative aspect-[21/9] min-h-[260px] flex items-center justify-center text-base font-semibold text-foreground/80">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      project.screenshots[activeSlides[index]].gradient
                    }`}
                  />
                  <div className="relative z-10 px-8 text-center text-lg font-semibold text-foreground drop-shadow-sm">
                    {project.screenshots[activeSlides[index]].label}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-3 flex items-center justify-between px-4">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-9 w-9 rounded-full shadow"
                    onClick={() => updateSlide(index, "prev")}
                    aria-label="Anterior"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <div className="flex gap-1.5">
                    {project.screenshots.map((_, dotIndex) => (
                      <span
                        key={dotIndex}
                        className={`h-2 w-5 rounded-full transition-colors ${
                          activeSlides[index] === dotIndex
                            ? "bg-primary"
                            : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="h-9 w-9 rounded-full shadow"
                    onClick={() => updateSlide(index, "next")}
                    aria-label="Siguiente"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
