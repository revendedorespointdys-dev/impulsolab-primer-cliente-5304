import { Check, Lock } from "lucide-react";
import { CheckoutButton } from "./CheckoutButton";

const includes = ["Ebook completo", "Kit de ejecución", "Plan de 30 días", "Acceso digital"];

export function Offer() {
  return (
    <section id="oferta" aria-labelledby="oferta-titulo" className="relative overflow-hidden bg-signal py-20 md:py-28">
      <div aria-hidden="true" className="grain pointer-events-none absolute inset-0 opacity-60" />
      <div className="wrap relative">
        <div className="mx-auto max-w-2xl rounded-[28px] border-2 border-ink bg-paper shadow-[10px_10px_0_var(--color-ink)]">
          <div className="px-5 py-8 text-center sm:p-8 md:p-12">
            <p className="label text-ink-soft">Oferta de lanzamiento</p>
            <h2 id="oferta-titulo" className="display mt-4 text-[2.1rem] sm:text-5xl">
              Empezá hoy por <span className="whitespace-nowrap">US$ 12,90</span>
            </h2>
            <div className="mt-8 flex items-end justify-center gap-4">
              <p className="whitespace-nowrap pb-2 text-lg text-ink-soft sm:text-xl">
                <span className="sr-only">Precio anterior: </span>
                <s>US$ 24,90</s>
              </p>
              <p className="display whitespace-nowrap text-[3.4rem] leading-none text-ink sm:text-7xl md:text-8xl">
                <span className="sr-only">Precio actual: </span>
                <span className="align-top text-2xl tracking-normal sm:text-3xl">US$</span>12,90
              </p>
            </div>
          </div>

          <div className="relative border-t-2 border-dashed border-ink/40 px-5 py-8 sm:px-8 md:px-12">
            <span aria-hidden="true" className="absolute -left-[15px] -top-[15px] size-7 rounded-full border-2 border-ink bg-signal [clip-path:inset(0_0_0_50%)]" />
            <span aria-hidden="true" className="absolute -right-[15px] -top-[15px] size-7 rounded-full border-2 border-ink bg-signal [clip-path:inset(0_50%_0_0)]" />
            <ul className="mx-auto grid max-w-md gap-3 sm:grid-cols-2">
              {includes.map((i) => (
                <li key={i} className="flex items-center gap-3 font-semibold">
                  <Check aria-hidden="true" className="size-5 shrink-0 text-signal-deep" strokeWidth={3} />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-col items-stretch">
              <CheckoutButton className="w-full">Comprar y acceder ahora</CheckoutButton>
            </div>
            <p className="mt-5 flex items-start justify-center gap-2 text-center text-sm text-ink-soft">
              <Lock aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              Pago seguro. Recibís el acceso al producto después de completar la compra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
