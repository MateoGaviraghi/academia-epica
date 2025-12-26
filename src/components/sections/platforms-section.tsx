"use client";

import {
  Play,
  BookOpen,
  Users,
  Award,
  BarChart3,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Container,
  Badge,
  Card,
} from "@/components/ui";

interface PlatformFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface PlatformExample {
  name: string;
  type: string;
  features: string[];
  gradient: string;
  stats: {
    courses: string;
    students: string;
  };
}

const platformFeatures: PlatformFeature[] = [
  {
    icon: Play,
    title: "Reproductor de Video HD",
    description:
      "Streaming optimizado con controles avanzados y velocidad variable",
  },
  {
    icon: BookOpen,
    title: "Sistema de Cursos",
    description: "Módulos, lecciones, materiales descargables y contenido drip",
  },
  {
    icon: Users,
    title: "Gestión de Alumnos",
    description: "Panel completo con progreso, métricas y comunicación directa",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Certificados automáticos personalizados con tu marca",
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description: "Métricas de engagement, completación y comportamiento",
  },
  {
    icon: MessageCircle,
    title: "Comunidad Integrada",
    description: "Foros, comentarios y espacios de interacción entre alumnos",
  },
];

const platformExamples: PlatformExample[] = [
  {
    name: "Academia Pro Marketing",
    type: "Cursos Grabados + Comunidad",
    features: ["Video HD", "Certificados", "Foro privado", "App móvil"],
    gradient: "from-violet-500/20 to-purple-500/20",
    stats: { courses: "45+", students: "2.500+" },
  },
  {
    name: "TechBootcamp Online",
    type: "Bootcamp + Mentoría",
    features: [
      "Clases en vivo",
      "Proyectos",
      "Code review",
      "Bolsa de trabajo",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    stats: { courses: "12", students: "800+" },
  },
  {
    name: "Wellness Academy",
    type: "Membresía + Contenido",
    features: ["Videos on-demand", "Calendario", "Recetas", "Tracking"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    stats: { courses: "30+", students: "5.000+" },
  },
];

export function PlatformsSection() {
  return (
    <Section id="plataformas">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            Plataformas Educativas
          </Badge>
          <SectionTitle>
            Lo que tu web va a <span className="gradient-text">incluir</span>
          </SectionTitle>
          <SectionDescription>
            Cada plataforma que creamos viene equipada con todo lo necesario
            para ofrecer una experiencia educativa de primer nivel.
          </SectionDescription>
        </SectionHeader>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {platformFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background/50 hover:bg-muted/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <feature.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium text-foreground mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Examples Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Ejemplos Reales
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold">
              Plataformas de nuestros clientes
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {platformExamples.map((example, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Header with gradient */}
                <div
                  className={`h-32 bg-linear-to-br ${example.gradient} relative`}
                >
                  <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-white/90 text-foreground hover:bg-white">
                      {example.type}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h4 className="font-semibold text-lg mb-3">{example.name}</h4>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {example.stats.courses}
                      </p>
                      <p className="text-xs text-muted-foreground">Cursos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary">
                        {example.stats.students}
                      </p>
                      <p className="text-xs text-muted-foreground">Alumnos</p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {example.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
