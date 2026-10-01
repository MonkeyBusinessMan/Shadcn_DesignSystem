import { PageHeader, Section, Callout } from "../ui";

const TYPE_SCALE = [
  { className: "text-xs", label: "text-xs", px: "12px", lineHeight: "16px" },
  { className: "text-sm", label: "text-sm", px: "14px", lineHeight: "20px" },
  { className: "text-base", label: "text-base", px: "16px", lineHeight: "24px" },
  { className: "text-lg", label: "text-lg", px: "18px", lineHeight: "28px" },
  { className: "text-xl", label: "text-xl", px: "20px", lineHeight: "28px" },
  { className: "text-2xl", label: "text-2xl", px: "24px", lineHeight: "32px" },
  { className: "text-3xl", label: "text-3xl", px: "30px", lineHeight: "36px" },
  { className: "text-4xl", label: "text-4xl", px: "36px", lineHeight: "40px" },
];

const WEIGHTS = [
  { className: "font-normal", label: "font-normal", weight: 400, loaded: true },
  { className: "font-medium", label: "font-medium", weight: 500, loaded: false },
  { className: "font-semibold", label: "font-semibold", weight: 600, loaded: false },
  { className: "font-bold", label: "font-bold", weight: 700, loaded: true },
];

function TypographyPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Typographie"
        description="Police et échelle typographique telles qu'elles existent aujourd'hui dans le code (globals.css, index.html) — pas une cible théorique."
      />

      <Section
        title="Police"
        description="Manrope est chargée via Google Fonts (poids 400 et 700 uniquement) et exposée comme utilitaire font-manrope. Elle n'est pour l'instant appliquée qu'au composant Breadcrumb : le reste de l'application utilise encore la police système par défaut du navigateur."
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="border-border rounded-lg border p-5">
            <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wide">
              Police par défaut (fallback navigateur)
            </p>
            <p className="text-2xl">Composer une interface claire et cohérente</p>
            <p className="text-muted-foreground mt-2 text-xs">Aucune classe de police — utilisée par la quasi-totalité de l'app</p>
          </div>
          <div className="border-border rounded-lg border p-5">
            <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wide">
              font-manrope
            </p>
            <p className="font-manrope text-2xl">Composer une interface claire et cohérente</p>
            <p className="text-muted-foreground mt-2 text-xs">
              className="font-manrope" — utilisée aujourd'hui uniquement par Breadcrumb
            </p>
          </div>
        </div>
        <Callout tone="warning">
          Seuls les poids 400 (Regular) et 700 (Bold) de Manrope sont chargés. Les classes{" "}
          <code className="text-foreground font-mono text-xs">font-medium</code> (500) et{" "}
          <code className="text-foreground font-mono text-xs">font-semibold</code> (600) n'ont pas de
          poids Manrope correspondant : le navigateur affiche alors soit le poids 400 soit un
          faux-gras, selon le navigateur. À garder en tête avant de les utiliser avec
          font-manrope.
        </Callout>
      </Section>

      <Section
        title="Échelle de tailles"
        description="Échelle par défaut de Tailwind v4 (aucune surcharge dans globals.css). Chaque classe de taille embarque sa propre hauteur de ligne."
      >
        <div className="border-border divide-border divide-y rounded-lg border">
          {TYPE_SCALE.map((item) => (
            <div key={item.className} className="flex flex-wrap items-baseline justify-between gap-3 px-5 py-4">
              <span className={item.className}>Aa Bb Cc 123</span>
              <div className="text-muted-foreground flex shrink-0 items-center gap-4 text-xs tabular-nums">
                <code className="text-foreground font-mono">{item.label}</code>
                <span>{item.px}</span>
                <span>lh {item.lineHeight}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Graisses disponibles" description="Rendu réel avec la police actuellement active (fallback navigateur).">
        <div className="border-border divide-border divide-y rounded-lg border">
          {WEIGHTS.map((item) => (
            <div key={item.className} className="flex items-center justify-between gap-3 px-5 py-4">
              <span className={`${item.className} text-lg`}>Aa Bb Cc 123</span>
              <div className="flex items-center gap-3">
                <code className="text-muted-foreground font-mono text-xs">{item.label}</code>
                <span className="text-muted-foreground text-xs tabular-nums">{item.weight}</span>
                {!item.loaded && (
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-700 dark:text-amber-400">
                    Poids Manrope non chargé
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export { TypographyPage };
