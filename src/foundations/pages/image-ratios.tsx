import { ImageIcon } from "lucide-react";
import { PageHeader, Section } from "../ui";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const RATIOS: { ratio: number; label: string; usage: string }[] = [
  { ratio: 1 / 1, label: "1:1", usage: "Avatars, vignettes, logos, icônes produit" },
  { ratio: 4 / 3, label: "4:3", usage: "Photo classique, miniatures de contenu" },
  { ratio: 3 / 2, label: "3:2", usage: "Photographie standard (reportage, visuels éditoriaux)" },
  { ratio: 16 / 9, label: "16:9", usage: "Bannières, vidéos, visuels hero" },
  { ratio: 21 / 9, label: "21:9", usage: "Bannières larges, visuels cinématiques" },
  { ratio: 9 / 16, label: "9:16", usage: "Formats verticaux, stories, mobile plein écran" },
];

function RatioPreview({ ratio, label, usage }: { ratio: number; label: string; usage: string }) {
  return (
    <div className="flex flex-col gap-2">
      <AspectRatio ratio={ratio} className="border-border bg-muted overflow-hidden rounded-md border">
        <div className="flex size-full items-center justify-center">
          <ImageIcon className="text-muted-foreground/50 size-8" />
        </div>
      </AspectRatio>
      <div className="flex items-baseline justify-between">
        <code className="text-foreground font-mono text-sm">{label}</code>
      </div>
      <p className="text-muted-foreground text-xs">{usage}</p>
    </div>
  );
}

function ImageRatiosPage() {
  return (
    <div className="flex flex-col gap-10">
      <PageHeader
        title="Ratios d'image"
        description="Formats universels recommandés pour les visuels du design system, démontrés avec le composant AspectRatio (@/components/ui/aspect-ratio)."
      />

      <Section title="Formats de référence" description="Choisir le ratio le plus proche du cas d'usage pour éviter les recadrages imprévus au runtime.">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
          {RATIOS.map((r) => (
            <RatioPreview key={r.label} {...r} />
          ))}
        </div>
      </Section>

      <Section title="Utilisation" description="">
        <pre className="border-border overflow-hidden rounded-lg border p-4 text-sm whitespace-pre-wrap break-words">
          <code>{`import { AspectRatio } from "@/components/ui/aspect-ratio";

<AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md border">
  <img src="..." alt="..." className="size-full object-cover" />
</AspectRatio>`}</code>
        </pre>
      </Section>
    </div>
  );
}

export { ImageRatiosPage };
