import { useState } from "react";
import { CheckoutButton } from "./CheckoutButton";

const COVER_SRC = "/ebook-cover.webp";

function EbookCover() {
  const [missing, setMissing] = useState(false);

  if (missing) {
    // Sin portada todavía: marco vacío reservado. Subí /public/ebook-cover.webp para mostrarla.
    return (
      <div
        aria-hidden="true"
        className="mx-auto aspect-[3/4] w-[min(72vw,380px)] rounded-md border-2 border-dashed border-ink/30"
      />
    );
  }

  return (
    <div className="relative mx-auto w-[min(72vw,380px)]">
      <span aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-signal" />
      <img
        src={COVER_SRC}
        alt="Portada del ebook Conseguí tu primer cliente como asistente virtual"
        width={800}
        height={1067}
        fetchPriority="high"
        decoding="async"
        onError={() => setMissing(true)}
        className="relative block h-auto w-full rounded-md border-2 border-ink shadow-[0_30px_60px_-20px_rgba(21,23,26,.45)]"
      />
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="grain relative overflow-hidden border-b border-ink/10">
      <div className="wrap grid items-center gap-14 pb-20 pt-12 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pb-28">
        <div>
          <p className="label rise inline-flex items-center gap-2 rounded-full border border-ink/20 bg-paper px-3 py-1.5 text-[11px] tracking-[0.07em] text-ink-soft sm:text-xs sm:tracking-[0.14em]">
            <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
            Guía práctica + plan de 30 días
          </p>
          <h1 className="display rise d1 mt-6 text-[2.6rem] sm:text-6xl lg:text-[4.6rem]">
            Conseguí tu primer cliente como{" "}
            <span className="relative">
              <span className="relative z-10">asistente virtual</span>
              <span aria-hidden="true" className="absolute inset-x-0 bottom-[0.06em] z-0 h-[0.28em] bg-signal" />
            </span>
          </h1>
          <p className="rise d2 mt-6 max-w-xl text-lg text-ink-soft md:text-xl">
            Un sistema paso a paso para definir qué ofrecer, preparar tu servicio, encontrar potenciales clientes y
            empezar a vender sin perder meses improvisando.
          </p>
          <div className="rise d3 mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CheckoutButton>Quiero empezar ahora</CheckoutButton>
            <p className="flex items-baseline gap-2">
              <span className="text-ink-soft">
                <span className="sr-only">Precio anterior: </span>
                <s>US$ 24,90</s>
              </span>
              <strong className="display text-3xl tracking-tight text-ink">
                <span className="sr-only">Precio actual: </span>US$ 12,90
              </strong>
            </p>
          </div>
          <p className="rise d3 mt-5 text-sm text-ink-soft">Acceso inmediato · Pago seguro · Producto digital</p>
        </div>
        <div className="rise d4 pb-6 lg:pb-0">
          <EbookCover />
        </div>
      </div>
    </section>
  );
}
