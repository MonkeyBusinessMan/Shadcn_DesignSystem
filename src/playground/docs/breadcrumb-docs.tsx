import { Check, X } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SECTIONS = [
  { id: "cas-usage", label: "Cas d'usage" },
  { id: "differencier", label: "Composants proches" },
  { id: "anatomie", label: "Anatomie" },
  { id: "elements", label: "Éléments" },
  { id: "position", label: "Position dans une page" },
  { id: "niveaux", label: "Niveaux & troncature" },
  { id: "specification", label: "Spécification technique" },
  { id: "do-dont", label: "Do & Don't" },
  { id: "accessibilite", label: "Accessibilité" },
];

function StatusDot({ ok }: { ok: boolean }) {
  return (
    <span
      className={"size-1.5 shrink-0 rounded-full " + (ok ? "bg-emerald-500" : "bg-red-500/70")}
      aria-hidden="true"
    />
  );
}

function StatusBadge({ label, ok }: { label: string; ok: boolean }) {
  return (
    <span className="border-border inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs">
      <StatusDot ok={ok} />
      {label}
    </span>
  );
}

function DocHero() {
  return (
    <div
      className="rounded-lg border p-5"
      style={{
        borderColor: "color-mix(in oklch, var(--breadcrumb-text-current) 25%, var(--border))",
        background:
          "linear-gradient(135deg, color-mix(in oklch, var(--breadcrumb-text-current) 6%, transparent), transparent 60%)",
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-semibold tracking-tight">Breadcrumbs</h3>
          <p className="text-muted-foreground max-w-[60ch] text-sm">
            Affiche le chemin hiérarchique de la page courante depuis la racine du site ou de
            l'application. Permet de se repérer dans une arborescence et de remonter rapidement à
            un niveau parent, sans passer par le menu principal.
          </p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <StatusBadge label="Figma" ok />
          <StatusBadge label="Web" ok={false} />
          <StatusBadge label="Mobile" ok={false} />
        </div>
      </div>
      <dl className="text-muted-foreground mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t pt-3 text-xs">
        <div className="flex gap-1.5">
          <dt>Statut</dt>
          <dd className="text-foreground">En construction</dd>
        </div>
        <div className="flex gap-1.5">
          <dt>Contributeurs</dt>
          <dd className="text-foreground">Matthieu, Marc</dd>
        </div>
        <div className="flex gap-1.5">
          <dt>Mise à jour</dt>
          <dd className="text-foreground">2026-08-18</dd>
        </div>
        <div className="flex gap-1.5">
          <dt>Version</dt>
          <dd className="text-foreground">1.0</dd>
        </div>
      </dl>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 border-b py-7 first:pt-0 last:border-b-0 last:pb-0">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[180px_1fr] lg:gap-8">
        <h3 className="text-sm font-medium" style={{ color: "var(--breadcrumb-text-current)" }}>
          {title}
        </h3>
        <div className="text-muted-foreground flex flex-col gap-3 text-sm leading-relaxed">
          {children}
        </div>
      </div>
    </section>
  );
}

function ApiTable({
  rows,
}: {
  rows: { property: string; type: string; values: string; default: string }[];
}) {
  return (
    <div className="border-border overflow-hidden rounded-lg border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/40">
          <tr>
            <th className="px-3 py-2 font-medium">Composant · Propriété</th>
            <th className="px-3 py-2 font-medium">Type</th>
            <th className="px-3 py-2 font-medium">Valeurs</th>
            <th className="px-3 py-2 font-medium">Défaut</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.property} className="border-border border-t">
              <td className="text-foreground px-3 py-2 font-medium">{r.property}</td>
              <td className="px-3 py-2">{r.type}</td>
              <td className="px-3 py-2">{r.values}</td>
              <td className="px-3 py-2">{r.default}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ElementsTable({
  rows,
}: {
  rows: { name: string; status: string; description: string }[];
}) {
  return (
    <div className="border-border overflow-hidden rounded-lg border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/40">
          <tr>
            <th className="px-3 py-2 font-medium">Élément</th>
            <th className="px-3 py-2 font-medium">Statut</th>
            <th className="px-3 py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-border border-t align-top">
              <td className="text-foreground px-3 py-2 font-medium whitespace-nowrap">
                {r.name}
              </td>
              <td className="px-3 py-2 whitespace-nowrap">{r.status}</td>
              <td className="px-3 py-2">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DoDontCard({
  variant,
  description,
  children,
}: {
  variant: "do" | "dont";
  description: string;
  children: React.ReactNode;
}) {
  const isDo = variant === "do";
  return (
    <div className="border-border overflow-hidden rounded-lg border">
      <div className="bg-card flex min-h-[64px] items-center justify-center overflow-x-auto p-4">
        {children}
      </div>
      <div className="border-border flex items-start gap-2 border-t px-3 py-2.5">
        <span
          className={
            "mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full " +
            (isDo ? "bg-emerald-500/15 text-emerald-600" : "bg-red-500/15 text-red-600")
          }
        >
          {isDo ? <Check className="size-2.5" /> : <X className="size-2.5" />}
        </span>
        <p className="text-muted-foreground text-xs">{description}</p>
      </div>
    </div>
  );
}

export function BreadcrumbDocumentation() {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[160px_1fr]">
      <nav className="hidden lg:block">
        <ul className="sticky top-4 flex flex-col gap-1 text-sm">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-muted-foreground hover:text-foreground block rounded-md px-2 py-1 transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex flex-col gap-6 overflow-hidden">
        <DocHero />

        <div className="flex flex-col">
          <Section id="cas-usage" title="Cas d'usage">
            <ul className="flex flex-col gap-2">
              <li>
                <strong className="text-foreground">Se repérer</strong> — indiquer où
                l'utilisateur se trouve dans une arborescence profonde.
              </li>
              <li>
                <strong className="text-foreground">Revenir en arrière</strong> — remonter
                directement à un niveau parent sans repasser par le menu.
              </li>
              <li>
                <strong className="text-foreground">Comprendre la profondeur</strong> — donner une
                vision immédiate du nombre de niveaux traversés depuis la racine.
              </li>
              <li>
                <strong className="text-foreground">Contextualiser une action</strong> — rappeler
                le contexte exact d'une page pour une action ou un partage de lien.
              </li>
            </ul>
          </Section>

          <Section id="differencier" title="Composants proches">
            <ul className="flex flex-col gap-2">
              <li>
                <strong className="text-foreground">Breadcrumb</strong> — chemin hiérarchique
                complet depuis la racine, dernier élément toujours en lecture seule.
              </li>
              <li>
                <strong className="text-foreground">Tabs</strong> — bascule entre vues de même
                niveau au sein d'une page, aucune notion d'arborescence.
              </li>
              <li>
                <strong className="text-foreground">Bouton retour</strong> — revient à l'écran
                précédent dans l'historique, sans notion de hiérarchie ni de chemin.
              </li>
              <li>
                <strong className="text-foreground">Menu de navigation</strong> — liste les
                entrées de premier niveau, point de départ (pas un indicateur de position).
              </li>
              <li>
                <strong className="text-foreground">Pagination</strong> — découpe un long contenu
                en pages de même niveau, sans hiérarchie parent/enfant.
              </li>
            </ul>
          </Section>

          <Section id="anatomie" title="Anatomie">
            <p>Le composant peut être composé de 5 sous-éléments :</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>Lien racine</li>
              <li>Séparateur</li>
              <li>Lien intermédiaire</li>
              <li>Overflow</li>
              <li>Élément courant</li>
            </ul>
            <div className="border-border bg-card flex min-h-[72px] items-center justify-center overflow-x-auto rounded-lg border p-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Accueil</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Documentation</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Paramètres de configuration</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Langue</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </Section>

          <Section id="elements" title="Éléments">
            <ElementsTable
              rows={[
                {
                  name: "Lien racine",
                  status: "Obligatoire",
                  description:
                    "Premier maillon du chemin, pointe toujours vers la racine du site ou de l'application.",
                },
                {
                  name: "Séparateur",
                  status: "Obligatoire",
                  description: "Sépare chaque élément du chemin, purement décoratif.",
                },
                {
                  name: "Lien intermédiaire",
                  status: "Répétable",
                  description:
                    "Niveau intermédiaire du chemin, cliquable, répétable autant de fois que nécessaire.",
                },
                {
                  name: "Overflow (+5)",
                  status: "À clarifier",
                  description:
                    "Représente les niveaux masqués au-delà du seuil de 5. Comportement (statique ou disclosure interactive) — non tranché côté produit à ce jour.",
                },
                {
                  name: "Élément courant",
                  status: "Non cliquable",
                  description:
                    'Dernier maillon du chemin, page actuelle. Non cliquable, aria-current="page".',
                },
              ]}
            />
          </Section>

          <Section id="position" title="Position dans une page">
            <p>
              Toujours positionné juste sous l'en-tête (header), au-dessus du titre H1 de la
              page. Position constante d'une page à l'autre : l'utilisateur doit pouvoir le
              retrouver au même endroit sans effort. À éviter : l'isoler en bas de page ou le
              déplacer selon les sections.
            </p>
          </Section>

          <Section id="niveaux" title="Niveaux & troncature">
            <p>
              Au-delà de 5 niveaux, les niveaux intermédiaires sont tronqués : la racine et les
              derniers niveaux (dont l'élément courant) restent visibles. Ne jamais dépasser 5
              éléments affichés simultanément.
            </p>
            <div className="border-border bg-card flex min-h-[72px] items-center justify-center overflow-x-auto rounded-lg border p-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Accueil</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Paramètres de configuration</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Langue</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </Section>

          <Section id="specification" title="Spécification technique">
            <p>
              Propriétés exposées par les 3 composants du système Breadcrumb. La ligne overflow
              reste ouverte en attendant la clarification du comportement attendu (cf. échange
              produit).
            </p>
            <ApiTable
              rows={[
                {
                  property: "Breadcrumbs · Niveaux",
                  type: "Variant",
                  values: "2 · 3 · 4 · 5 · +5",
                  default: "2",
                },
                {
                  property: "BreadcrumbItem · State",
                  type: "Variant",
                  values: "Default · Hovered · Focused · More than five · Current",
                  default: "Default",
                },
                { property: "BreadcrumbSeparator", type: "—", values: "Aucune", default: "—" },
                {
                  property: 'Overflow (state "+5")',
                  type: "À définir",
                  values: "Statique ou disclosure interactive",
                  default: "—",
                },
                {
                  property: "aria-current (HTML)",
                  type: "Attribut",
                  values: '"page"',
                  default: "Appliqué automatiquement sur l'élément courant",
                },
              ]}
            />
          </Section>

          <Section id="do-dont" title="Do & Don't">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <DoDontCard variant="do" description="Libellé court et lisible en un coup d'œil.">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Documentation</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </DoDontCard>
              <DoDontCard
                variant="dont"
                description="Libellé trop long : casse la lecture du chemin et déborde sur plusieurs lignes."
              >
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="#">Accueil</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        Paramètres avancés de configuration du compte utilisateur
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </DoDontCard>
            </div>
          </Section>

          <Section id="accessibilite" title="Accessibilité">
            <p>
              Exposer le composant avec <code className="text-foreground">role="navigation"</code>{" "}
              et <code className="text-foreground">aria-label="Fil d'Ariane"</code>. Marquer
              l'élément courant avec <code className="text-foreground">aria-current="page"</code>{" "}
              pour qu'il soit annoncé comme la position actuelle — ceci est appliqué
              automatiquement par le composant, jamais posé manuellement sur les liens
              intermédiaires. Vérifier le rendu avec les technologies de lecture courantes
              (VoiceOver, NVDA, JAWS) auprès du référent accessibilité.
            </p>
            <p className="border-border bg-muted/30 rounded-md border px-3 py-2 text-xs">
              Écart corrigé lors de cette synchronisation : le lien ne portait aucun style{" "}
              <code>focus-visible</code>, laissant la navigation clavier sans indication visuelle.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
