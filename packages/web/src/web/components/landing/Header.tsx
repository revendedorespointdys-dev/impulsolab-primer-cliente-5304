import { ArrowUpRight } from "lucide-react";
import { CHECKOUT_URL } from "../../lib/checkout";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`display inline-flex items-center gap-2 text-[1.35rem] ${light ? "text-paper" : "text-ink"}`}>
      <span aria-hidden="true" className="grid size-7 place-items-center rounded-full bg-signal text-ink">
        <ArrowUpRight className="size-4" strokeWidth={3} />
      </span>
      ImpulsoLab
    </span>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <a href="#inicio" aria-label="ImpulsoLab, ir al inicio">
          <Logo />
        </a>
        <a
          href={CHECKOUT_URL}
          className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap rounded-full border-2 border-ink px-4 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Comprar ahora
        </a>
      </div>
    </header>
  );
}
