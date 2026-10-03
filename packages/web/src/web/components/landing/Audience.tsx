import { Check, X } from "lucide-react";

const forYou = [
  "querés empezar como asistente virtual",
  "todavía no conseguiste tu primer cliente",
  "necesitás una hoja de ruta concreta",
  "querés empezar sin grandes inversiones",
  "preferís ejecutar en lugar de consumir teoría interminable",
];

export function Audience() {
  return (
    <section aria-labelledby="audiencia-titulo" className="border-t border-ink/10 bg-paper-2 py-20 md:py-28">
      <div className="wrap">
        <p className="label text-signal-deep">Para quién es</p>
        <h2 id="audiencia-titulo" className="display mt-4 max-w-3xl text-4xl md:text-6xl">
          Es para vos si…
        </h2>
        <ul className="mt-10 grid gap-x-12 md:mt-14 md:grid-cols-2">
          {forYou.map((t) => (
            <li key={t} className="flex items-start gap-4 border-b border-ink/15 py-5">
              <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-ink text-signal">
                <Check aria-hidden="true" className="size-4" strokeWidth={3} />
              </span>
              <span className="text-lg md:text-xl">{t.charAt(0).toUpperCase() + t.slice(1)}.</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border-2 border-dashed border-ink/40 p-6 sm:flex-row sm:items-center md:mt-16 md:p-8">
          <span className="grid size-10 shrink-0 place-items-center rounded-full border-2 border-ink">
            <X aria-hidden="true" className="size-5" strokeWidth={2.75} />
          </span>
          <p className="display text-xl md:text-2xl">
            No es para vos si buscás dinero fácil, resultados automáticos o evitar salir a ofrecer tu servicio.
          </p>
        </div>
      </div>
    </section>
  );
}
