"use client";

import { Code, Users, Lightbulb, Heart } from "lucide-react";
import { Section, Container, Badge } from "@/components/ui";

const values = [
  {
    icon: Code,
    title: "Excelencia Técnica",
    description: "Código limpio, arquitectura escalable. No tomamos atajos.",
  },
  {
    icon: Users,
    title: "Partnership Real",
    description: "Tu éxito es nuestro éxito. Crecemos juntos.",
  },
  {
    icon: Lightbulb,
    title: "Innovación Continua",
    description: "Siempre al día con las últimas tecnologías.",
  },
  {
    icon: Heart,
    title: "Compromiso Total",
    description: "Cada proyecto recibe nuestra dedicación completa.",
  },
];

export default function NosotrosPage() {
  return (
    <Section className="pt-32">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Narrative */}
          <div>
            <Badge variant="outline" className="mb-6">
              Nuestra Filosofía
            </Badge>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-neutral-900">
              Construimos tecnología que{" "}
              <span className="text-neutral-400">empodera educadores</span>
            </h1>

            <div className="space-y-4 text-neutral-600">
              <p>
                Nacimos de una frustración: ver a educadores brillantes
                limitados por plataformas genéricas que no reflejan su valor ni
                les dan control sobre su negocio.
              </p>
              <p>
                Somos un equipo de desarrolladores y diseñadores especializados
                en crear infraestructura educativa de alto nivel. No somos una
                agencia que hace de todo: somos especialistas en un solo
                objetivo.
              </p>
              <p className="font-medium text-neutral-900">
                Cada línea de código que escribimos tiene un propósito: que tu
                academia sea la mejor versión posible de sí misma.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-neutral-200">
              <div>
                <div className="text-3xl font-bold text-neutral-900">3+</div>
                <div className="text-sm text-neutral-500">
                  Años de experiencia
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900">150+</div>
                <div className="text-sm text-neutral-500">
                  Proyectos entregados
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-neutral-900">98%</div>
                <div className="text-sm text-neutral-500">
                  Clientes satisfechos
                </div>
              </div>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 flex items-center justify-center mb-4 group-hover:bg-neutral-800 transition-colors">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
