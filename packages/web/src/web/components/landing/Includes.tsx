import { Check } from "lucide-react";

const items = [
  "Ebook completo de 32 páginas",
  "Plan de ejecución de 30 días",
  "Definición de servicio y nicho",
  "Preparación de perfil y propuesta",
  "Sistema para buscar potenciales clientes",
  "Guiones y estructura para contactar",
  "Organización de seguimiento",
  "Kit práctico de ejecución",
];

export function Includes() {
  return (
    <section aria-labelledby="incluye-titulo" className="bg-paper-2 py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div>
          <p className="label text-signal-deep">Qué incluye</p>
          <h2 id="incluye-titulo" className="display mt-4 text-4xl md:text-5xl">
            Todo lo necesario para pasar a la acción
          </h2>
        </div>
        <ul className="grid border-t-2 border-ink sm:grid-cols-2 sm:gap-x-10">
          {items.map((item, i) => (
            <li key={item} className="flex items-center gap-4 border-b border-ink/20 py-5">
              <span className="display w-7 shrink-0 text-sm text-signal-deep" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-lg font-semibold leading-snug">{item}</span>
              <Check aria-hidden="true" className="size-5 shrink-0 text-ink" strokeWidth={3} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
