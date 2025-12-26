"use client";

import { Star, Quote } from "lucide-react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Container,
  Badge,
  Card,
} from "@/components/ui";

interface ClientReview {
  name: string;
  role: string;
  company: string;
  avatar: string;
  review: string;
  rating: number;
  highlight: string;
}

const clientReviews: ClientReview[] = [
  {
    name: "María González",
    role: "Fundadora",
    company: "Marketing Academy",
    avatar: "MG",
    review:
      "Pasamos de usar una plataforma genérica a tener nuestra propia academia con nuestra marca. La diferencia en la percepción de nuestros alumnos fue inmediata. Ahora somos vistos como una academia profesional y seria.",
    rating: 5,
    highlight: "Aumento del 40% en conversiones",
  },
  {
    name: "Carlos Rodríguez",
    role: "CEO",
    company: "TechBootcamp",
    avatar: "CR",
    review:
      "El equipo de Épica entendió exactamente lo que necesitábamos. Un bootcamp online requiere funcionalidades específicas que no encontrábamos en ningún lado. Ahora tenemos todo: mentoría, code review, proyectos colaborativos.",
    rating: 5,
    highlight: "800+ alumnos formados",
  },
  {
    name: "Laura Martínez",
    role: "Directora",
    company: "Wellness Studio Online",
    avatar: "LM",
    review:
      "Lo que más valoro es el soporte. Siempre hay alguien disponible para ayudarnos. La plataforma nunca ha caído y los pagos funcionan perfectamente. Puedo enfocarme en crear contenido, no en problemas técnicos.",
    rating: 5,
    highlight: "5.000+ miembros activos",
  },
  {
    name: "Diego Fernández",
    role: "Fundador",
    company: "Academia de Fotografía Pro",
    avatar: "DF",
    review:
      "La galería de trabajos de estudiantes fue clave. Nuestros alumnos pueden mostrar su portfolio directamente en la plataforma. Eso nos diferencia de cualquier curso de Udemy o similar.",
    rating: 5,
    highlight: "NPS de 92 puntos",
  },
];

export function ClientReviewsSection() {
  return (
    <Section id="resenas" variant="muted">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            Testimonios
          </Badge>
          <SectionTitle>
            Lo que dicen nuestros{" "}
            <span className="gradient-text">clientes</span>
          </SectionTitle>
          <SectionDescription>
            Empresas y emprendedores que confiaron en nosotros para crear su
            plataforma educativa.
          </SectionDescription>
        </SectionHeader>

        <div className="grid md:grid-cols-2 gap-6">
          {clientReviews.map((review, index) => (
            <Card key={index} className="p-6 relative">
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* Highlight Badge */}
              <div className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary"
                >
                  {review.highlight}
                </Badge>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary to-primary/60 flex items-center justify-center text-white font-semibold">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.role} · {review.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Academias creadas" },
            { value: "15.000+", label: "Alumnos en total" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "4.9/5", label: "Calificación promedio" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
