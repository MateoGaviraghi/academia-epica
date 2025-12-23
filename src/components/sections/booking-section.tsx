"use client";

import {
  Calendar,
  CheckCircle2,
  Clock,
  Video,
  FileText,
  Target,
  ArrowRight,
} from "lucide-react";
import { Section, Container, Badge, Card, Button } from "@/components/ui";

const benefits = [
  {
    icon: Target,
    text: "Diagnóstico técnico de tu proyecto actual",
  },
  {
    icon: FileText,
    text: "Propuesta personalizada y presupuesto a medida",
  },
  {
    icon: Clock,
    text: "Estimación de tiempos realista",
  },
  {
    icon: Video,
    text: "Demostración en vivo de nuestra tecnología",
  },
];

export function BookingSection() {
  return (
    <Section id="agenda" variant="gradient">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <Badge variant="outline" className="mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Reunión Directa
            </Badge>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Agenda una <span className="gradient-text">reunión</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8">
              30 minutos que pueden transformar tu negocio educativo. Sin
              compromiso, sin ventas agresivas. Solo una conversación técnica
              para entender cómo podemos ayudarte.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <p className="font-medium text-foreground">
                ¿Qué obtendrás en la llamada?
              </p>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 border border-border">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">100% gratuito</strong> — Sin
                compromisos ni letra pequeña
              </span>
            </div>
          </div>

          {/* Right - Calendly Widget Placeholder */}
          <Card className="overflow-hidden">
            <div className="p-6 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Reserva tu horario</h3>
                  <p className="text-sm text-muted-foreground">
                    Sesión de 30 minutos
                  </p>
                </div>
              </div>
            </div>

            {/* Calendly Embed Area */}
            <div className="p-6">
              {/* Replace this div with your actual Calendly embed */}
              <div className="aspect-4/5 rounded-xl bg-muted/50 border-2 border-dashed border-border flex flex-col items-center justify-center text-center p-6">
                <Calendar className="w-12 h-12 text-muted-foreground/50 mb-4" />
                <p className="text-muted-foreground mb-4">Widget de Calendly</p>
                <p className="text-sm text-muted-foreground/70 mb-6">
                  Integra tu calendario con el código embed de Calendly
                </p>

                {/* Fallback CTA */}
                <Button asChild>
                  <a
                    href="https://calendly.com/tu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abrir Calendario
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Integration Note */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                💡 Para integrar Calendly, agrega el script embed en este
                componente
              </p>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
