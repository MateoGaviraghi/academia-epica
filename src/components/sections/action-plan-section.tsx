"use client";

import {
  MessageSquare,
  Wrench,
  CheckCircle,
  Rocket,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Container,
  Badge,
} from "@/components/ui";

interface ProcessStep {
  icon: LucideIcon;
  step: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: MessageSquare,
    step: 1,
    title: "Reunión de Descubrimiento",
    description:
      "Conversamos sobre tu visión, tus estudiantes ideales y tus objetivos. Entendemos tu marca y qué hace única a tu academia.",
  },
  {
    icon: Wrench,
    step: 2,
    title: "Diseño y Desarrollo",
    description:
      "Creamos tu plataforma con tu marca, tus colores y cada funcionalidad pensada para tu modelo de negocio.",
  },
  {
    icon: CheckCircle,
    step: 3,
    title: "Testing y Revisión",
    description:
      "Te mostramos la web completa. Revisamos juntos cada detalle para asegurarnos de que todo esté perfecto antes del lanzamiento.",
  },
  {
    icon: Rocket,
    step: 4,
    title: "Lanzamiento",
    description:
      "Desplegamos tu academia online. Te capacitamos en el uso de la plataforma y configuramos todo para el día uno.",
  },
  {
    icon: HeartHandshake,
    step: 5,
    title: "Soporte Continuo",
    description:
      "No te dejamos solo. Acompañamiento técnico, actualizaciones y mejoras constantes para que crezcas sin límites.",
  },
];

export function ActionPlanSection() {
  return (
    <Section id="proceso">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            Nuestro Proceso
          </Badge>
          <SectionTitle>
            De la idea al <span className="gradient-text">lanzamiento</span>
          </SectionTitle>
          <SectionDescription>
            Un proceso claro y transparente. Sabés exactamente qué esperar en
            cada etapa del desarrollo de tu plataforma educativa.
          </SectionDescription>
        </SectionHeader>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central - solo visible en desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Contenido */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div
                    className={`bg-background border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    } lg:max-w-md`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        index % 2 === 0
                          ? "lg:flex-row-reverse lg:justify-start"
                          : ""
                      }`}
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Número central */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg shrink-0">
                  {step.step}
                </div>

                {/* Espacio para el otro lado en desktop */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Listo para comenzar tu proyecto?
          </p>
          <a
            href="#agenda"
            onClick={(e) => {
              e.preventDefault();
              const target = document.querySelector("#agenda");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Agendar Reunión Inicial
          </a>
        </div>
      </Container>
    </Section>
  );
}
