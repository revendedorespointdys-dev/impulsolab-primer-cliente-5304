import { ArrowRight } from "lucide-react";
import { CHECKOUT_URL } from "../../lib/checkout";

type Props = { children: React.ReactNode; onDark?: boolean; className?: string };

export function CheckoutButton({ children, onDark = false, className = "" }: Props) {
  return (
    <a href={CHECKOUT_URL} className={`btn ${onDark ? "btn-on-dark" : ""} ${className}`}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="size-5 shrink-0" strokeWidth={2.5} />
    </a>
  );
}
