import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import { PageTransition, RouteTransition } from "@/components/ui";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kursa | Infraestructura Educativa Premium",
  description:
    "Desarrollamos plataformas educativas personalizadas que transforman tu conocimiento en un negocio escalable. Tu marca, tu control, tu éxito.",
  keywords: [
    "plataforma educativa",
    "cursos online",
    "LMS",
    "academia online",
    "white label",
  ],
  authors: [{ name: "Kursa" }],
  openGraph: {
    title: "Kursa | Infraestructura Educativa Premium",
    description:
      "Desarrollamos plataformas educativas personalizadas que transforman tu conocimiento en un negocio escalable.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kursa | Infraestructura Educativa Premium",
    description:
      "Desarrollamos plataformas educativas personalizadas que transforman tu conocimiento en un negocio escalable.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <PageTransition />
        <RouteTransition />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
