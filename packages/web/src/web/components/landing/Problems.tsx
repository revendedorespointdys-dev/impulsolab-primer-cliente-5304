const problems = [
  "No saber qué servicio ofrecer",
  "No saber cuánto cobrar",
  "No saber dónde encontrar clientes",
  "Preparar demasiado y nunca salir a vender",
  "Consumir información sin ejecutar",
];

export function Problems() {
  return (
    <section aria-labelledby="problemas-titulo" className="bg-ink text-paper">
      <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="label text-signal">El problema</p>
          <h2 id="problemas-titulo" className="display mt-4 text-4xl md:text-5xl">
            No necesitás saberlo todo para empezar. Necesitás saber qué hacer primero.
          </h2>
        </div>
        <ol className="border-t border-paper/15">
          {problems.map((p, i) => (
            <li key={p} className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-paper/15 py-6 md:grid-cols-[4.5rem_1fr] md:py-7">
              <span className="display text-2xl text-signal md:text-3xl" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-lg leading-snug md:text-xl">{p}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
