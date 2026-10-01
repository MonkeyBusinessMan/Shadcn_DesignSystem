import { PageHeader, Section } from "../ui";

const SPACING_SCALE = [
  { token: "0.5", class: "1", rem: "0.25rem", px: "4px" },
  { token: "1", class: "2", rem: "0.5rem", px: "8px" },
  { token: "1.5", class: "3", rem: "0.75rem", px: "12px" },
  { token: "2", class: "4", rem: "1rem", px: "16px" },
  { token: "2.5", class: "5", rem: "1.25rem", px: "20px" },
  { token: "3", class: "6", rem: "1.5rem", px: "24px" },
  { token: "4", class: "8", rem: "2rem", px: "32px" },
  { token: "5", class: "10", rem: "2.5rem", px: "40px" },
  { token: "6", class: "12", rem: "3rem", px: "48px" },
  { token: "8", class: "16", rem: "4rem", px: "64px" },
  { token: "10", class: "20", rem: "5rem", px: "80px" },
  { token: "12", class: "24", rem: "6rem", px: "96px" },
];

const RADIUS_SCALE = [
  { name: "radius-sm", cssVar: "--radius-sm", formula: "var(--radius) - 4px" },
  { name: "radius-md", cssVar: "--radius-md", formula: "var(--radius) - 2px" },
  { name: "radius-lg", cssVar: "--radius-lg", formula: "var(--radius)" },
  { name: "radius-xl", cssVar: "--radius-xl", formula: "var(--radius) + 4px" },
];

function SpacingPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Espacements"
        description="Échelle d'espacement par défaut de Tailwind v4 (aucune surcharge dans globals.css) : chaque palier vaut un multiple de 0.25rem (4px). Utilisée par padding (p-*), marge (m-*) et gap (gap-*)."
      />

      <Section title="Échelle" description="Un même palier numérique pilote p-*, m-*, gap-*, space-x-*, space-y-*, etc.">
        <div className="border-border divide-border divide-y rounded-lg border">
          {SPACING_SCALE.map((s) => (
            <div key={s.class} className="flex items-center gap-4 px-5 py-3">
              <div className="flex w-36 shrink-0 items-center gap-2 whitespace-nowrap">
                <code className="text-foreground font-mono text-xs">{s.class}</code>
                <span className="text-muted-foreground text-xs">→ p-{s.class}, gap-{s.class}…</span>
              </div>
              <div className="bg-primary h-3 shrink-0 rounded-sm" style={{ width: s.rem }} />
              <div className="text-muted-foreground ml-auto flex shrink-0 gap-3 text-xs tabular-nums">
                <span>{s.rem}</span>
                <span>{s.px}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Rayons de bordure (radius)"
        description="Base --radius: 0.625rem (10px), déclinée en 4 paliers dans globals.css. Utilisée par rounded-sm / rounded-md / rounded-lg / rounded-xl."
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {RADIUS_SCALE.map((r) => (
            <div key={r.cssVar} className="flex flex-col items-center gap-2">
              <div
                className="bg-muted border-border size-16 border"
                style={{ borderRadius: `var(${r.cssVar})` }}
              />
              <div className="flex flex-col items-center text-center">
                <code className="text-foreground font-mono text-xs">{r.name}</code>
                <span className="text-muted-foreground text-xs">{r.formula}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export { SpacingPage };
