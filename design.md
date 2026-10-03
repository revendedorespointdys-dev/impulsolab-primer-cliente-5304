# ImpulsoLab — Design

Single-page sales landing (web only) for the digital product "Tu primer cliente como asistente virtual en 30 días". Direction: practical, editorial, execution-first. Feels like a work plan, not a guru funnel. No hype visuals, no stock photos.

## Brand & Colors
- `--paper` #F4F0E8 — main background (warm off-white)
- `--paper-2` #EAE4D8 — alternate section background
- `--ink` #15171A — text, dark sections
- `--ink-soft` #4A4D52 — secondary text on paper (AA on paper)
- `--signal` #FF5B1F — accent (CTA backgrounds with ink text, highlights). Never white text on signal.
- `--signal-deep` #C2410C — accent text on paper (AA)
- `--line` rgba(21,23,26,.14) — hairlines

## Typography
- Display: Bricolage Grotesque Variable (700–800), tight tracking, large sizes.
- Body: Instrument Sans Variable, 17–18px, line-height 1.6.
- Labels: Instrument Sans, uppercase, 12–13px, letter-spacing .12em.

## Layout
- Max width 1180px, 20px side padding mobile, 32px desktop.
- Sections alternate rhythm: paper / ink / paper-2 / signal. Avoid card grids; prefer numbered lists, rows with hairlines, a timeline, a single offer ticket.
- Buttons: ink-on-signal, uppercase, heavy, 56px tall, 2px ink border + offset shadow.

## Motion
- CSS-only staggered fade-up on hero load. Respect prefers-reduced-motion.

## Rules
- All purchase buttons use the single `CHECKOUT_URL` constant (`src/web/lib/checkout.ts`).
- No forms, no backend usage, no login.
