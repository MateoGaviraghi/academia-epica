"use client";

import {
  Palette,
  Database,
  Shield,
  Video,
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

        <div className="grid md:grid-cols-2 gap-6">
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
