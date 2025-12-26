"use client";

import { useState, useEffect } from "react";
import { X, Zap, Clock, Gift, Copy, Check, Sparkles } from "lucide-react";
import { Button, Badge } from "@/components/ui";
import { cn } from "@/lib/utils";

// ============================================
// 🎯 CONFIGURACIÓN DE OFERTAS
// Cambiar a TRUE para activar el modal de ofertas
// ============================================
const OFFERS_ENABLED = false;
// ============================================

interface Offer {
  code: string;
  discount: string;
  description: string;
  validUntil: string;
  type: "percentage" | "fixed" | "bonus";
}

const offers: Offer[] = [
  {
    code: "EPICA30",
    discount: "30% OFF",
    description: "En tu primera plataforma educativa",
    validUntil: "2025-01-15",
    type: "percentage",
  },
  {
    code: "LANZAMIENTO",
    discount: "$500 USD",
    description: "De descuento en el plan Premium",
    validUntil: "2025-01-10",
    type: "fixed",
  },
  {
    code: "BONUS2025",
    discount: "3 meses gratis",
    description: "De soporte técnico premium incluido",
    validUntil: "2025-01-31",
    type: "bonus",
  },
];

export function OffersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState<string>("");

  // Calcular tiempo restante hasta fin de mes
  useEffect(() => {
    if (!OFFERS_ENABLED) return;

    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59
      );
      const diff = endOfMonth.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(interval);
  }, []);

  // Detectar si el usuario está por irse (exit intent)
  useEffect(() => {
    if (!OFFERS_ENABLED) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("offerShown")) {
        setIsVisible(true);
        sessionStorage.setItem("offerShown", "true");
      }
    };

    // También mostrar después de 30 segundos en la página
    const timeout = setTimeout(() => {
      if (!sessionStorage.getItem("offerShown")) {
        setIsVisible(true);
        sessionStorage.setItem("offerShown", "true");
      }
    }, 30000);

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeout);
    };
  }, []);

  // Si las ofertas no están habilitadas, no renderizar nada
  if (!OFFERS_ENABLED) return null;

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Error copying to clipboard:", err);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-background rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header con gradiente */}
        <div className="bg-linear-to-r from-primary to-primary/80 p-6 text-primary-foreground">
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-white/20 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5" />
            <Badge
              variant="secondary"
              className="bg-white/20 text-white border-0"
            >
              Oferta Exclusiva
            </Badge>
          </div>

          <h2 className="text-2xl font-bold mb-2">🎉 ¡Ofertas Relámpago!</h2>
          <p className="text-primary-foreground/80 text-sm">
            Aprovechá estos descuentos exclusivos antes de que expiren
          </p>

          {/* Countdown */}
          <div className="flex items-center gap-2 mt-4 text-sm">
            <Clock className="w-4 h-4" />
            <span>
              Tiempo restante: <strong>{timeLeft}</strong>
            </span>
          </div>
        </div>

        {/* Ofertas */}
        <div className="p-6 space-y-4">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={cn(
                "p-4 rounded-xl border-2 transition-all hover:shadow-md",
                offer.type === "percentage" &&
                  "border-emerald-200 bg-emerald-50/50",
                offer.type === "fixed" && "border-blue-200 bg-blue-50/50",
                offer.type === "bonus" && "border-purple-200 bg-purple-50/50"
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Gift
                      className={cn(
                        "w-4 h-4",
                        offer.type === "percentage" && "text-emerald-600",
                        offer.type === "fixed" && "text-blue-600",
                        offer.type === "bonus" && "text-purple-600"
                      )}
                    />
                    <span
                      className={cn(
                        "font-bold text-lg",
                        offer.type === "percentage" && "text-emerald-600",
                        offer.type === "fixed" && "text-blue-600",
                        offer.type === "bonus" && "text-purple-600"
                      )}
                    >
                      {offer.discount}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {offer.description}
                  </p>
                </div>

                {/* Código + Copiar */}
                <div className="flex flex-col items-end gap-2">
                  <code className="px-3 py-1 bg-muted rounded-lg font-mono text-sm font-semibold">
                    {offer.code}
                  </code>
                  <button
                    onClick={() => copyToClipboard(offer.code)}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {copiedCode === offer.code ? (
                      <>
                        <Check className="w-3 h-3 text-green-500" />
                        <span className="text-green-500">¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 pt-0 space-y-3">
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              setIsVisible(false);
              const target = document.querySelector("#agenda");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Agendar y Usar mi Descuento
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            * Los códigos se aplican en la reunión de consultoría
          </p>
        </div>
      </div>
    </div>
  );
}
