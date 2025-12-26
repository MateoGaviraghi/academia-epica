"use client";

import { useEffect, useRef, useState } from "react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  Container,
  Badge,
  Button,
  Card,
} from "@/components/ui";
import { Star, MessageSquare, Mail } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  role: string;
  rating: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  role: "",
  rating: "5",
  message: "",
};

export function SubmitReviewSection() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "error" | "sent">("idle");
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const openIfHash = () => {
      if (window.location.hash === "#dejar-resena") {
        setIsOpen(true);
      }
    };

    openIfHash();
    window.addEventListener("hashchange", openIfHash);
    return () => window.removeEventListener("hashchange", openIfHash);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }

    const subject = `Resena de ${form.name}`;
    const bodyLines = [
      `Nombre: ${form.name}`,
      form.email ? `Email: ${form.email}` : null,
      form.role ? `Rol/Academia: ${form.role}` : null,
      `Calificacion: ${form.rating}/5`,
      "",
      "Comentario:",
      form.message,
    ].filter(Boolean);

    const mailto = `mailto:hola@academiaepica.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
    setStatus("sent");
    setForm(initialForm);
  };

  return (
    <Section id="dejar-resena">
      <Container>
        <SectionHeader>
          <Badge variant="outline" className="mb-4">
            Queremos escuchar tu experiencia
          </Badge>
          <div className="flex flex-col gap-3">
            <SectionTitle>
              Deja tu <span className="gradient-text">reseña</span>
            </SectionTitle>
            <SectionDescription>
              Comparte tu opinión sobre la plataforma. Esto nos ayuda a seguir
              mejorando y a otros a decidir.
            </SectionDescription>
          </div>
        </SectionHeader>

        {isOpen ? (
          <div ref={formRef} className="grid lg:grid-cols-2 gap-8">
            <Card className="p-6">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
                    Nombre*
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="Tu nombre"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
                    Email (opcional)
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="para contactarte"
                    />
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
                  Rol / Academia (opcional)
                  <input
                    type="text"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Ej: Fundador, Coordinador, Profesor"
                  />
                </label>

                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-foreground/90">
                    Calificacion
                  </span>
                  <div className="flex gap-2">
                    {["1", "2", "3", "4", "5"].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setForm({ ...form, rating: value })}
                        className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm border transition-colors ${
                          form.rating === value
                            ? "bg-primary text-primary-foreground border-primary"
                            : "border-border text-muted-foreground hover:border-primary/60"
                        }`}
                      >
                        <Star className="w-4 h-4" />
                        {value}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="flex flex-col gap-2 text-sm font-medium text-foreground/90">
                  Comentario*
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    rows={4}
                    className="w-full rounded-lg border border-border bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                    placeholder="Contanos tu experiencia"
                  />
                </label>

                {status === "error" && (
                  <p className="text-sm text-destructive">
                    Nombre y comentario son obligatorios.
                  </p>
                )}
                {status === "sent" && (
                  <p className="text-sm text-emerald-600">
                    Gracias por tu reseña. Se abrirá tu correo para enviarla.
                  </p>
                )}

                <Button type="submit" className="w-full md:w-auto">
                  Enviar reseña
                </Button>
              </form>
            </Card>

            <Card className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Otras formas de compartir</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Si preferís, podés enviarnos tu reseña directamente por correo o
                WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hola@academiaepica.com?subject=Quiero%20dejar%20una%20resena"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/60 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Enviar por email
                </a>
                <a
                  href="https://wa.me/5491111111111?text=Quiero%20dejar%20una%20rese%C3%B1a%20sobre%20mi%20experiencia"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:border-primary/60 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
              <div className="rounded-lg bg-muted p-4 text-sm text-muted-foreground">
                Las reseñas ayudan a otros creadores a confiar en el proceso.
                Gracias por tu tiempo.
              </div>
            </Card>
          </div>
        ) : (
          <div
            ref={formRef}
            className="rounded-xl border border-dashed border-border/70 bg-muted/40 p-6 text-center"
          >
            <h3 className="font-semibold mb-2">¿Querés dejarnos tu reseña?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Mostramos el formulario solo cuando lo necesitás para no llenar la
              página de campos.
            </p>
            <Button
              onClick={() => {
                setIsOpen(true);
                requestAnimationFrame(() => {
                  formRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                });
              }}
            >
              Deja tu reseña
            </Button>
          </div>
        )}
      </Container>
    </Section>
  );
}
