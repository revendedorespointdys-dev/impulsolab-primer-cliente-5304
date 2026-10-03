import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="wrap flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo light />
          <p className="mt-2 text-sm text-paper/65">Producto digital.</p>
        </div>
        {/* Placeholders: reemplazar por las URLs reales de Términos y Privacidad */}
        <nav aria-label="Legal" className="flex gap-6 text-sm">
          <a href="#terminos" className="text-paper/80 underline-offset-4 hover:text-paper hover:underline">Términos</a>
          <a href="#privacidad" className="text-paper/80 underline-offset-4 hover:text-paper hover:underline">Privacidad</a>
        </nav>
        <p className="text-sm text-paper/65">© {new Date().getFullYear()} ImpulsoLab</p>
      </div>
    </footer>
  );
}
