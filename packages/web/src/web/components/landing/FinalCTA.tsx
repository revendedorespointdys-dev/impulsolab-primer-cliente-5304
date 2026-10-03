import { CheckoutButton } from "./CheckoutButton";

export function FinalCTA() {
  return (
    <section aria-labelledby="final-titulo" className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
      <span
        aria-hidden="true"
        className="display pointer-events-none absolute -bottom-[0.18em] right-[-0.04em] select-none text-[38vw] leading-none text-paper/[0.04] md:text-[22rem]"
      >
        30
      </span>
      <div className="wrap relative">
        <h2 id="final-titulo" className="display max-w-4xl text-[2.3rem] sm:text-5xl lg:text-[4.2rem]">
          Tu primer cliente no aparece por seguir preparándote.{" "}
          <span className="text-signal">Aparece cuando empezás a ejecutar.</span>
        </h2>
        <p className="mt-6 max-w-xl text-lg text-paper/75">
          Tenés 30 días de acciones concretas por delante. El primer paso es empezar.
        </p>
        <div className="mt-10">
          <CheckoutButton onDark>Quiero empezar ahora</CheckoutButton>
        </div>
      </div>
    </section>
  );
}
