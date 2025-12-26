"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";

const footerLinks = {
  navegacion: [
    { label: "Servicios", href: "#servicios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Plataformas", href: "#plataformas" },
  ],
  empresa: [
    { label: "Reseñas", href: "#resenas" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Agenda una Reunión", href: "#agenda" },
  ],
  legal: [
    { label: "Privacidad", href: "/privacy" },
    { label: "Términos", href: "/terms" },
  ],
};

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/academiaepica" },
  { label: "LinkedIn", href: "https://linkedin.com/company/academiaepica" },
  { label: "Instagram", href: "https://instagram.com/academiaepica" },
];

const scrollToSection = (href: string) => {
  if (href.startsWith("#")) {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-border">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-8 lg:mb-0">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/cropped-Academica-Logo-Back-300x100.png"
                  alt="Academia Épica"
                  width={100}
                  height={32}
                  className="h-8 w-auto"
                />
              </Link>
              <p className="text-muted-foreground text-sm max-w-xs mb-6">
                Infraestructura educativa premium. Desarrollamos la plataforma
                que transforma tu conocimiento en un negocio escalable.
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:hola@academiaepica.com"
                    className="hover:text-foreground transition-colors"
                  >
                    hola@academiaepica.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Remote First 🌎</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Navegación</h4>
              <ul className="space-y-3">
                {footerLinks.navegacion.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Academia Épica. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {link.label}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
