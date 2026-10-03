export function Value() {
  return (
    <section aria-labelledby="valor-titulo" className="bg-ink py-20 text-paper md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <h2 id="valor-titulo" className="display text-[2.4rem] sm:text-5xl lg:text-7xl">
          No comprás solo información. <span className="text-signal">Comprás una hoja de ruta.</span>
        </h2>
        <div className="space-y-4 text-paper/80 lg:pb-3">
          <p>
            El objetivo es simple: reducir la incertidumbre de no saber por dónde empezar y convertir lo que leés en
            acciones concretas durante 30 días.
          </p>
          <p>Lo que pase después depende de que ejecutes. El plan te dice qué hacer y en qué orden.</p>
        </div>
      </div>
    </section>
  );
}
