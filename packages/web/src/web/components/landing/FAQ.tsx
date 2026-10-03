import { Plus } from "lucide-react";

const faqs = [
  {
    q: "¿Necesito experiencia previa?",
    a: "No. El contenido está pensado para ayudarte a ordenar desde cero qué ofrecer, cómo presentarlo y cómo empezar a buscar clientes.",
  },
  {
    q: "¿Es solo para mujeres?",
    a: "No. El sistema es aplicable a cualquier persona que quiera comenzar a ofrecer servicios como asistente virtual.",
  },
  {
    q: "¿Cuánto tiempo necesito por día?",
    a: "Depende de tu disponibilidad. El plan está diseñado para avanzar con tareas concretas y adaptarlo a tu ritmo.",
  },
  {
    q: "¿Recibo el ebook inmediatamente?",
    a: "Sí. Después de completar el pago recibís el acceso al producto digital.",
  },
  {
    q: "¿Puedo hacerlo desde cualquier país?",
    a: "Sí. El contenido es digital y puede aplicarse desde cualquier país. Los medios de pago disponibles pueden variar según la ubicación.",
  },
];

export function FAQ() {
  return (
    <section aria-labelledby="faq-titulo" className="py-20 md:py-28">
      <div className="wrap grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <p className="label text-signal-deep">FAQ</p>
          <h2 id="faq-titulo" className="display mt-4 text-4xl md:text-5xl">
            Preguntas frecuentes
          </h2>
        </div>
        <div className="border-t-2 border-ink">
          {faqs.map(({ q, a }) => (
            <details key={q} className="group border-b border-ink/20">
              <summary className="flex min-h-16 items-center justify-between gap-6 py-5 text-lg font-semibold md:text-xl">
                {q}
                <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-ink transition-colors group-open:bg-signal">
                  <Plus aria-hidden="true" className="faq-icon size-4 transition-transform" strokeWidth={3} />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 pr-12 text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
