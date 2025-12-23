"use client";

import {
  Palette,
  Database,
  Rocket,
  Shield,
  Code2,
  Zap,
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
  features: string[];
}

const services: ServiceItem[] = [
  {
    icon: Palette,
    title: "Personalización Total",
    description:
      "Tu plataforma, tu marca. Cada componente diseñado para reflejar tu identidad única.",
    features: [
      "Branding completo",
      "Diseño a medida",
      "Sin plantillas genéricas",
    ],
  },
  {
    icon: Database,
    title: "Tu Propiedad, Tus Datos",
    description:
      "Base de datos exportable y bajo tu control. Sin dependencias ni bloqueos.",
    features: [
      "Exportación total",
      "Backups automáticos",
      "Migración garantizada",
    ],
  },
  {
    icon: Rocket,
    title: "Escalabilidad Sin Límites",
    description:
      "Infraestructura que crece contigo. De 10 a 10.000 estudiantes sin cambiar de plataforma.",
    features: ["Auto-scaling", "CDN global", "Alta disponibilidad"],
  },
  {
    icon: Shield,
    title: "Seguridad Enterprise",
    description: "Protección de nivel empresarial para ti y tus estudiantes.",
    features: ["SSL incluido", "GDPR compliant", "Pagos seguros"],
  },
  {
    icon: Code2,
    title: "Tecnología Moderna",
    description: "Stack de última generación para un rendimiento excepcional.",
    features: ["Next.js & React", "API extensible", "PWA ready"],
  },
  {
    icon: Zap,
    title: "Performance Óptimo",
    description:
      "Velocidad que convierte. Carga ultrarrápida en cualquier dispositivo.",
    features: ["Core Web Vitals", "Edge computing", "Caché inteligente"],
  },
];

export function ServicesSection() {
  return (
    <Section id="services" variant="muted">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            Academia Épica
          </Badge>
          <SectionTitle>
            Tecnología que impulsa{" "}
            <span className="gradient-text">academias exitosas</span>
          </SectionTitle>
          <SectionDescription>
            No somos un marketplace más. Somos los arquitectos de tu propia
            plataforma educativa, con la tecnología que las grandes empresas
            usan, adaptada a tu escala.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              hover
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="mt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <div className="px-6 pb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
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
      </Container>
    </Section>
  );
}
