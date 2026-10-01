import { PageHeader, Section, Callout } from "../ui";
import { cn } from "@/lib/utils";

interface Swatch {
  name: string;
  cssVar: string;
  usage: string;
  border?: boolean;
}

function SwatchGrid({ swatches }: { swatches: Swatch[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {swatches.map((s) => (
        <div key={s.cssVar} className="flex flex-col gap-2">
          <div
            className={cn("h-16 rounded-md", s.border && "border-border border")}
            style={{ background: `var(${s.cssVar})` }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">{s.name}</span>
            <code className="text-muted-foreground font-mono text-xs">{s.cssVar}</code>
            <span className="text-muted-foreground mt-0.5 text-xs">{s.usage}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

const BASE: Swatch[] = [
  { name: "Background", cssVar: "--background", usage: "Fond de page" },
  { name: "Foreground", cssVar: "--foreground", usage: "Texte principal" },
  { name: "Card", cssVar: "--card", usage: "Fond des cartes", border: true },
  { name: "Card foreground", cssVar: "--card-foreground", usage: "Texte sur carte" },
  { name: "Popover", cssVar: "--popover", usage: "Fond des popovers/menus", border: true },
  { name: "Popover foreground", cssVar: "--popover-foreground", usage: "Texte sur popover" },
];

const BRAND: Swatch[] = [
  { name: "Primary", cssVar: "--primary", usage: "Actions principales" },
  { name: "Primary foreground", cssVar: "--primary-foreground", usage: "Texte sur primary" },
  { name: "Secondary", cssVar: "--secondary", usage: "Actions secondaires" },
  { name: "Secondary foreground", cssVar: "--secondary-foreground", usage: "Texte sur secondary" },
  { name: "Accent", cssVar: "--accent", usage: "Survol / sélection" },
  { name: "Accent foreground", cssVar: "--accent-foreground", usage: "Texte sur accent" },
];

const FEEDBACK: Swatch[] = [
  { name: "Muted", cssVar: "--muted", usage: "Fonds discrets" },
  { name: "Muted foreground", cssVar: "--muted-foreground", usage: "Texte secondaire" },
  { name: "Destructive", cssVar: "--destructive", usage: "Erreurs, actions destructives" },
  { name: "Destructive foreground", cssVar: "--destructive-foreground", usage: "Texte sur destructive" },
];

const STRUCTURE: Swatch[] = [
  { name: "Border", cssVar: "--border", usage: "Bordures" },
  { name: "Input", cssVar: "--input", usage: "Bordures de champs" },
  { name: "Ring", cssVar: "--ring", usage: "Anneau de focus" },
];

const CHARTS: Swatch[] = [
  { name: "Chart 1", cssVar: "--chart-1", usage: "Série de données 1" },
  { name: "Chart 2", cssVar: "--chart-2", usage: "Série de données 2" },
  { name: "Chart 3", cssVar: "--chart-3", usage: "Série de données 3" },
  { name: "Chart 4", cssVar: "--chart-4", usage: "Série de données 4" },
  { name: "Chart 5", cssVar: "--chart-5", usage: "Série de données 5" },
];

const SIDEBAR: Swatch[] = [
  { name: "Sidebar", cssVar: "--sidebar", usage: "Fond de la sidebar" },
  { name: "Sidebar foreground", cssVar: "--sidebar-foreground", usage: "Texte de la sidebar" },
  { name: "Sidebar primary", cssVar: "--sidebar-primary", usage: "Item actif" },
  { name: "Sidebar accent", cssVar: "--sidebar-accent", usage: "Item survolé" },
  { name: "Sidebar border", cssVar: "--sidebar-border", usage: "Séparateurs de la sidebar" },
];

const BREADCRUMB_TOKENS: Swatch[] = [
  { name: "Text default", cssVar: "--breadcrumb-text-default", usage: "Texte/Secondaire" },
  { name: "Text hover", cssVar: "--breadcrumb-text-hover", usage: "Texte/Interactif/Survolé" },
  { name: "Text current", cssVar: "--breadcrumb-text-current", usage: "Texte/Interactif/Sélectionné" },
  { name: "Focus ring", cssVar: "--breadcrumb-focus-ring", usage: "Contour/Interactif/Sélectionné" },
  { name: "Icon", cssVar: "--breadcrumb-icon", usage: "Icône/Primaire" },
];

function ColorsPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Couleurs"
        description="Nuancier des tokens CSS réellement définis dans globals.css. Les couleurs sont lues en live via var(--token) : basculez le thème clair/sombre dans la barre latérale pour voir ce nuancier s'adapter."
      />

      <Section title="Base" description="Fonds et textes génériques (OKLCH, échelle de gris shadcn/ui par défaut).">
        <SwatchGrid swatches={BASE} />
      </Section>

      <Section title="Marque & actions" description="Couleurs d'accentuation utilisées par les boutons, liens et éléments sélectionnés.">
        <SwatchGrid swatches={BRAND} />
      </Section>

      <Section title="États & retours" description="Fonds discrets et signalisation d'erreur.">
        <SwatchGrid swatches={FEEDBACK} />
      </Section>

      <Section title="Structure" description="Bordures, champs de saisie et anneau de focus.">
        <SwatchGrid swatches={STRUCTURE} />
      </Section>

      <Section title="Graphiques" description="Palette dédiée aux composants Chart (5 séries).">
        <SwatchGrid swatches={CHARTS} />
      </Section>

      <Section title="Sidebar" description="Jeu de tokens dédié à la navigation latérale.">
        <SwatchGrid swatches={SIDEBAR} />
      </Section>

      <Section
        title="Tokens en migration (Breadcrumb)"
        description="Palette de marque réelle (rose/magenta), introduite localement pour Breadcrumb en attendant la migration des tokens partagés ci-dessus. Ne pas réutiliser ailleurs sans migrer le composant concerné."
      >
        <SwatchGrid swatches={BREADCRUMB_TOKENS} />
        <Callout tone="warning">
          Ces 5 tokens ne font pas (encore) partie du thème global : ils sont déclarés en dur dans{" "}
          <code className="text-foreground font-mono text-xs">globals.css</code> et consommés
          uniquement par <code className="text-foreground font-mono text-xs">breadcrumb.tsx</code>.
          Les couleurs partagées ci-dessus (Base, Marque, États...) restent la palette shadcn/ui
          générique tant que les autres composants n'ont pas migré.
        </Callout>
      </Section>
    </div>
  );
}

export { ColorsPage };
