import { PageHeader, Section, Callout } from "../ui";
import { LayoutGrid } from "lucide-react";

const BREAKPOINTS = [
  { name: "sm", px: "640px", usage: "Petites tablettes / grands mobiles" },
  { name: "md", px: "768px", usage: "Tablettes" },
  { name: "lg", px: "1024px", usage: "Petits écrans desktop" },
  { name: "xl", px: "1280px", usage: "Desktop" },
  { name: "2xl", px: "1536px", usage: "Grands écrans" },
];

const DEVICES = [
  { name: "Mobile", width: 375, note: "< 640px — 1 colonne" },
  { name: "Tablette", width: 768, note: "≥ 640px — 2 colonnes" },
  { name: "Desktop", width: 1280, note: "≥ 1024px — 3 colonnes" },
];

function SampleCard({ i }: { i: number }) {
  return (
    <div className="border-border bg-card flex flex-col gap-2 rounded-md border p-3">
      <div className="bg-muted flex size-8 items-center justify-center rounded-md">
        <LayoutGrid className="text-muted-foreground size-4" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="bg-foreground/80 h-2 w-3/4 rounded-full" />
        <div className="bg-muted-foreground/40 h-2 w-1/2 rounded-full" />
      </div>
      <span className="text-muted-foreground text-[10px]">Carte {i}</span>
    </div>
  );
}

function DeviceFrame({ name, width, note }: { name: string; width: number; note: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-muted-foreground text-xs tabular-nums">{width}px · {note}</span>
      </div>
      <div className="border-border bg-card overflow-x-auto rounded-lg border p-4">
        <div className="@container" style={{ width }}>
          <div className="grid grid-cols-1 gap-3 @min-[640px]:grid-cols-2 @min-[1024px]:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <SampleCard key={i} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MockupsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Mockups"
        description="Cadres de référence pour tester un gabarit sur mobile, tablette et desktop, et seuils de rupture (breakpoints) par défaut de Tailwind v4 utilisés dans ce projet."
      />

      <Section title="Seuils de rupture (breakpoints)" description="Échelle par défaut de Tailwind v4 — aucune surcharge dans ce projet.">
        <div className="border-border divide-border divide-y rounded-lg border">
          {BREAKPOINTS.map((b) => (
            <div key={b.name} className="flex items-center justify-between gap-3 px-5 py-3">
              <code className="text-foreground font-mono text-sm">{b.name}:</code>
              <span className="text-muted-foreground flex-1 px-4 text-xs">{b.usage}</span>
              <span className="text-muted-foreground text-xs tabular-nums">≥ {b.px}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Cadres d'appareils"
        description="Même composant (grille de 3 cartes) rendu à trois largeurs de référence, pour visualiser la réorganisation du layout."
      >
        <div className="flex flex-col gap-6">
          {DEVICES.map((d) => (
            <DeviceFrame key={d.name} name={d.name} width={d.width} note={d.note} />
          ))}
        </div>
        <Callout>
          Les classes <code className="text-foreground font-mono text-xs">sm:</code>/
          <code className="text-foreground font-mono text-xs">lg:</code> de Tailwind réagissent à la
          largeur de la <strong>fenêtre du navigateur</strong>, pas à celle d'un cadre imbriqué dans la
          page. Ces trois cadres utilisent donc des{" "}
          <em>container queries</em> (<code className="text-foreground font-mono text-xs">@container</code>
          {" "}+ <code className="text-foreground font-mono text-xs">@min-[…]:</code>) calées sur les
          mêmes seuils (640px / 1024px), pour reproduire fidèlement le comportement responsive en les
          affichant côte à côte sans avoir à redimensionner la fenêtre.
        </Callout>
      </Section>
    </div>
  );
}

export { MockupsPage };
