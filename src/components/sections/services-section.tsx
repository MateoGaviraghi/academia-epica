"use client";

import {
  Palette,
  Database,
  Shield,
  Video,
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
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Badge,
} from "@/components/ui";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const services: ServiceItem[] = [
  {
    icon: Palette,
    title: "Diseño Personalizado",
    description:
      "Partimos de una base sólida y la adaptamos visualmente a tu marca. Misma potencia, tu identidad única.",
    features: [
      "Tu logo y colores",
      "Diseño adaptado a tu estilo",
      "Experiencia única para tus alumnos",
    ],
  },
  {
    icon: Database,
    title: "Tu Propiedad, Tus Datos",
    description:
      "Tus datos siempre accesibles. Exportá tu información cuando la necesites.",
    features: [
      "Exportación a Excel",
      "Lista de alumnos y pagos",
      "Sin dependencias ni bloqueos",
    ],
  },
  {
    icon: Video,
    title: "Gestión de Contenido",
    description:
      "Nos encargamos de todo el contenido visual de tu web. Vos te enfocás en enseñar.",
    features: [
      "Videos de presentación",
      "Material publicitario",
      "Actualización de contenidos",
    ],
  },
  {
    icon: Shield,
    title: "Plataforma Segura",
    description:
      "Tu academia y los datos de tus estudiantes protegidos con las mejores prácticas de seguridad.",
    features: ["Conexión segura (SSL)", "Protección de datos", "Pagos seguros"],
  },
];
const platformCapabilities: ServiceItem[] = [
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
    description: "Panel con progreso, métricas y comunicación directa",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Certificados automáticos personalizados con tu marca",
  },
  {
    icon: BarChart3,
    title: "Analytics Avanzados",
    description: "Engagement, completación y comportamiento de alumnos",
  },
  {
    icon: MessageCircle,
    title: "Comunidad Integrada",
    description: "Foros y espacios de interacción entre alumnos",
  },
];

const featureItems = services;
const capabilityItems = platformCapabilities;

export function ServicesSection() {
  return (
    <Section id="servicios" variant="muted">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            Nuestros Servicios
          </Badge>
          <SectionTitle>
            Todo lo que necesitás para{" "}
            <span className="gradient-text">tu academia online</span>
          </SectionTitle>
          <SectionDescription>
            No somos un marketplace más. Somos los arquitectos de tu propia
            plataforma educativa, con la tecnología que las grandes empresas
            usan, adaptada a tu escala.
          </SectionDescription>
        </SectionHeader>

        {/* Servicios principales */}
        <div className="grid gap-6 md:grid-cols-2">
          {featureItems.map((item, index) => (
            <Card
              key={index}
              hover
              className="group h-full border border-border/70 shadow-sm"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardHeader className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <CardDescription className="mt-1 text-base leading-relaxed">
                    {item.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <div className="px-6 pb-6">
                <ul className="space-y-2">
                  {item.features?.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* Capacidades de la plataforma */}
        <div className="mt-12">
          <div className="mb-5">
            <Badge variant="secondary" className="mb-2">
              Incluido en tu web
            </Badge>
            <SectionTitle className="text-xl sm:text-2xl mb-1">
              Capacidades listas desde el día uno
            </SectionTitle>
            <SectionDescription>
              Todo lo que necesita tu plataforma educativa para operar y
              escalar.
            </SectionDescription>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilityItems.map((item, index) => (
              <Card
                key={index}
                className="p-4 h-full border border-border/70 bg-white"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
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
