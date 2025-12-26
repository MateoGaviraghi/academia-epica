"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button, Container } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#plataformas", label: "Plataformas" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#nosotros", label: "Nosotros" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm"
            : "bg-white/50 backdrop-blur-sm py-5"
        )}
      >
        <Container>
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src="/cropped-Academica-Logo-Back-300x100.png"
                alt="Academia Épica"
                width={160}
                height={50}
                className="h-12 sm:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector(link.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    activeSection === link.href.replace("#", "")
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild>
                <a
                  href="#agenda"
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#agenda");
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Agendar Reunión
                </a>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile Menu - Fullscreen Overlay (fuera del header) */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 w-screen h-screen bg-white z-100"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
          }}
        >
          <div className="flex flex-col h-full w-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-100">
              <Image
                src="/cropped-Academica-Logo-Back-300x100.png"
                alt="Academia Épica"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Cerrar menú"
                className="p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Links */}
            <div className="flex-1 p-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-2xl font-medium text-neutral-900 hover:text-neutral-500 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const target = document.querySelector(link.href);
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-8 border-t border-neutral-100">
              <Button className="w-full" size="lg" asChild>
                <a
                  href="#agenda"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setTimeout(() => {
                      const target = document.querySelector("#agenda");
                      if (target) {
                        target.scrollIntoView({ behavior: "smooth" });
                      }
                    }, 100);
                  }}
                >
                  Agendar Reunión
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
