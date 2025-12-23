"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Container,
  Badge,
  Button,
} from "@/components/ui";

interface ShowcaseItem {
  name: string;
  category: string;
  description: string;
  image: string;
  gradient: string;
}

const showcaseItems: ShowcaseItem[] = [
  {
    name: "Academia de Marketing Digital",
    category: "Marketing",
    description:
      "Plataforma con +50 cursos y sistema de certificación automatizado",
    image: "/showcase/marketing.png",
    gradient: "from-neutral-200 to-neutral-300",
  },
  {
    name: "Escuela de Desarrollo Web",
    category: "Tecnología",
    description: "Bootcamp online con mentoría integrada y proyectos prácticos",
    image: "/showcase/tech.png",
    gradient: "from-gray-200 to-gray-300",
  },
  {
    name: "Centro de Idiomas Online",
    category: "Idiomas",
    description:
      "Plataforma multilingüe con clases en vivo y ejercicios interactivos",
    image: "/showcase/languages.png",
    gradient: "from-zinc-200 to-zinc-300",
  },
  {
    name: "Academia de Fitness",
    category: "Salud",
    description: "Programas personalizados con seguimiento de progreso",
    image: "/showcase/fitness.png",
    gradient: "from-stone-200 to-stone-300",
  },
  {
    name: "Escuela de Fotografía",
    category: "Arte",
    description: "Cursos visuales con galerías de estudiantes integradas",
    image: "/showcase/photo.png",
    gradient: "from-neutral-300 to-neutral-400",
  },
  {
    name: "Universidad Corporativa",
    category: "Empresas",
    description: "Sistema LMS completo para capacitación empresarial",
    image: "/showcase/corporate.png",
    gradient: "from-slate-200 to-slate-300",
  },
];

export function ShowcaseSection() {
  return (
    <Section id="clientes">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            Nuestros Clientes
          </Badge>
          <SectionTitle>
            Academias que <span className="gradient-text">inspiran</span>
          </SectionTitle>
          <SectionDescription>
            Cada proyecto es único. Explorá la versatilidad de nuestro sistema
            adaptado a diferentes nichos y necesidades educativas.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border bg-background transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
            >
              {/* Image Placeholder with Gradient */}
              <div
                className={`aspect-16/10 bg-linear-to-br ${item.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                {/* Placeholder UI Elements */}
                <div className="absolute inset-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="h-3 bg-white/10 rounded-t-lg" />
                  <div className="p-3 space-y-2">
                    <div className="h-2 w-1/3 bg-white/20 rounded" />
                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <ExternalLink className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">Ver Demo</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {item.category}
                  </Badge>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="/agenda">
              Quiero mi propia academia
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
