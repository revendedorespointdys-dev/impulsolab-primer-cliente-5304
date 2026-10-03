const weeks = [
  { days: "Días 1–7", title: "Preparación" },
  { days: "Días 8–14", title: "Posicionamiento" },
  { days: "Días 15–21", title: "Prospección" },
  { days: "Días 22–30", title: "Propuestas y cierre" },
];

export function Roadmap() {
  return (
    <section aria-labelledby="ruta-titulo" className="py-20 md:py-28">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="label text-signal-deep">Hoja de ruta</p>
            <h2 id="ruta-titulo" className="display mt-4 text-4xl md:text-6xl">
              Plan de 30 días
            </h2>
          </div>
        </div>

        <ol className="relative mt-14 grid gap-0 md:mt-20 md:grid-cols-4">
          {/* line */}
          <span aria-hidden="true" className="absolute bottom-0 left-[11px] top-0 w-0.5 bg-ink md:bottom-auto md:left-0 md:right-0 md:top-[11px] md:h-0.5 md:w-auto" />
          {weeks.map((w, i) => (
            <li key={w.days} className="relative pb-10 pl-12 last:pb-0 md:pb-0 md:pl-0 md:pr-6 md:pt-12">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1 size-6 rounded-full border-2 border-ink md:top-0 ${i === 3 ? "bg-signal" : "bg-paper"}`}
              />
              <p className="label text-signal-deep">{w.days}</p>
              <h3 className="display mt-2 text-2xl uppercase md:text-[1.6rem]">{w.title}</h3>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
