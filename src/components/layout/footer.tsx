import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui";

const footerLinks = {
  producto: [
    { label: "Home", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Nuestros Clientes", href: "/clientes" },
    { label: "Nosotros", href: "/nosotros" },
  ],
  empresa: [
    { label: "Agenda una Reunión", href: "/agenda" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
  legal: [
    { label: "Privacidad", href: "/privacy" },
    { label: "Términos", href: "/terms" },
  ],
};

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/kursa" },
  { label: "LinkedIn", href: "https://linkedin.com/company/kursa" },
  { label: "GitHub", href: "https://github.com/kursa" },
];

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-8 lg:mb-0">
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/logo.png"
                  alt="Kursa"
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
                    href="mailto:hola@kursa.io"
                    className="hover:text-foreground transition-colors"
                  >
                    hola@kursa.io
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Remote First 🌎</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Producto</h4>
              <ul className="space-y-3">
                {footerLinks.producto.map((link) => (
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

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
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
            © {new Date().getFullYear()} Kursa. Todos los derechos reservados.
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
