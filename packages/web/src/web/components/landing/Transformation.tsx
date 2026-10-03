const steps = ["Definí", "Prepará", "Contactá", "Proponé", "Cerrá"];

export function Transformation() {
  return (
    <section aria-labelledby="transformacion-titulo" className="py-20 md:py-28">
      <div className="wrap">
        <div className="max-w-4xl">
          <p className="label text-signal-deep">La transformación</p>
          <h2 id="transformacion-titulo" className="display mt-4 text-4xl md:text-6xl">
            De “no sé por dónde empezar” a tener un sistema para buscar tu primer cliente.
          </h2>
        </div>

        <ol className="mt-12 grid gap-3 md:mt-16 md:grid-cols-5 md:gap-0">
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li
                key={step}
                className={`relative flex items-center gap-4 rounded-full border-2 border-ink px-5 py-4 md:flex-col md:items-start md:gap-6 md:rounded-none md:border-y-2 md:border-l-2 md:border-r-0 md:px-6 md:py-8 ${
                  last ? "bg-ink text-paper md:border-r-2" : ""
                }`}
              >
                <span className={`display text-lg md:text-xl ${last ? "text-signal" : "text-signal-deep"}`} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="display text-2xl md:text-3xl lg:text-4xl">{step}</span>
                {!last && (
                  <span
                    aria-hidden="true"
                    className="display ml-auto text-2xl text-signal-deep md:absolute md:right-4 md:top-7 md:ml-0"
                  >
                    →
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 hidden h-1.5 bg-signal md:block"
                  style={{ width: `${((i + 1) / steps.length) * 100}%` }}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
