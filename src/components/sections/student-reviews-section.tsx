"use client";

import { Star, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Container,
  Badge,
  Button,
} from "@/components/ui";

interface StudentReview {
  name: string;
  course: string;
  platform: string;
  avatar: string;
  review: string;
  rating: number;
  completedDate: string;
}

const studentReviews: StudentReview[] = [
  {
    name: "Alejandra Ruiz",
    course: "Marketing Digital Avanzado",
    platform: "Marketing Academy",
    avatar: "AR",
    review:
      "La plataforma es súper intuitiva. Pude seguir el curso a mi ritmo, los videos cargan rapidísimo y las certificaciones automáticas son geniales para el LinkedIn.",
    rating: 5,
    completedDate: "Diciembre 2024",
  },
  {
    name: "Martín López",
    course: "Bootcamp Full Stack",
    platform: "TechBootcamp",
    avatar: "ML",
    review:
      "Lo mejor es el sistema de code review. Cada proyecto que entregás recibe feedback real de mentores. Conseguí trabajo antes de terminar el bootcamp.",
    rating: 5,
    completedDate: "Noviembre 2024",
  },
  {
    name: "Sofía Pérez",
    course: "Yoga y Meditación",
    platform: "Wellness Studio Online",
    avatar: "SP",
    review:
      "Me encanta poder practicar desde casa. El calendario de clases en vivo es muy práctico y las grabaciones quedan disponibles por si me pierdo alguna.",
    rating: 5,
    completedDate: "Diciembre 2024",
  },
  {
    name: "Fernando Torres",
    course: "Fotografía de Producto",
    platform: "Academia de Fotografía Pro",
    avatar: "FT",
    review:
      "La galería de portfolio me ayudó a conseguir mis primeros clientes freelance. El contenido es excelente y la comunidad de fotógrafos muy activa.",
    rating: 5,
    completedDate: "Octubre 2024",
  },
  {
    name: "Valentina García",
    course: "Copywriting Persuasivo",
    platform: "Marketing Academy",
    avatar: "VG",
    review:
      "Los ejercicios prácticos son increíbles. Cada módulo tiene tareas que realmente te hacen aplicar lo aprendido. Muy diferente a otros cursos online.",
    rating: 5,
    completedDate: "Noviembre 2024",
  },
  {
    name: "Lucas Méndez",
    course: "React desde Cero",
    platform: "TechBootcamp",
    avatar: "LM",
    review:
      "El sistema de proyectos colaborativos es lo mejor. Trabajar con otros estudiantes simulando un entorno real de desarrollo fue invaluable.",
    rating: 5,
    completedDate: "Diciembre 2024",
  },
];

export function StudentReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(studentReviews.length / reviewsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleReviews = studentReviews.slice(
    currentIndex * reviewsPerPage,
    currentIndex * reviewsPerPage + reviewsPerPage
  );

  return (
    <Section id="resenas-alumnos">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            <GraduationCap className="w-4 h-4 mr-2" />
            Voces de Estudiantes
          </Badge>
          <SectionTitle>
            Alumnos que aprenden en{" "}
            <span className="gradient-text">nuestras plataformas</span>
          </SectionTitle>
          <SectionDescription>
            Testimonios reales de estudiantes que utilizan las academias creadas
            por Épica.
          </SectionDescription>
        </SectionHeader>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6">
            {visibleReviews.map((review, index) => (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Platform Badge */}
                <Badge variant="secondary" className="mb-4 text-xs">
                  {review.platform}
                </Badge>

                {/* Rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  &ldquo;{review.review}&rdquo;
                </p>

                {/* Course */}
                <p className="text-xs text-primary font-medium mb-4">
                  📚 {review.course}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white text-sm font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {review.completedDate}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentIndex
                        ? "bg-primary"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
