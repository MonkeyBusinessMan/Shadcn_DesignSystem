import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-border flex flex-col gap-4 border-b py-6 first:pt-0 last:border-b-0 last:pb-0">
      <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      <div className="text-muted-foreground flex flex-col gap-2 text-sm">{children}</div>
    </div>
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
        <thead className="bg-muted/50">
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
              <td className="px-3 py-2 font-medium">{r.property}</td>
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
        <thead className="bg-muted/50">
          <tr>
            <th className="px-3 py-2 font-medium">Élément</th>
            <th className="px-3 py-2 font-medium">Statut</th>
            <th className="px-3 py-2 font-medium">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-border border-t">
              <td className="px-3 py-2 font-medium">{r.name}</td>
              <td className="px-3 py-2">{r.status}</td>
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
  return (
    <div
      className={
        "flex flex-col gap-3 rounded-lg border p-4 " +
        (variant === "do"
          ? "border-emerald-600/30 bg-emerald-600/5"
          : "border-red-600/30 bg-red-600/5")
      }
    >
      <div className="flex min-h-[60px] items-center justify-center overflow-x-auto">{children}</div>
      <div>
        <span
          className={
            "text-xs font-semibold " + (variant === "do" ? "text-emerald-700" : "text-red-700")
          }
        >
          {variant === "do" ? "Do" : "Don't"}
        </span>
        <p className="text-muted-foreground mt-1 text-xs">{description}</p>
      </div>
    </div>
  );
}

export function BreadcrumbDocumentation() {
  return (
    <div className="flex flex-col">
      <Section title="Cas d'usage">
        <ol className="list-decimal space-y-1 pl-4">
          <li>
            <strong className="text-foreground">Se repérer</strong> — indiquer où l'utilisateur se
            trouve dans une arborescence profonde.
          </li>
          <li>
            <strong className="text-foreground">Revenir en arrière</strong> — remonter directement à
            un niveau parent sans repasser par le menu.
          </li>
          <li>
            <strong className="text-foreground">Comprendre la profondeur</strong> — donner une
            vision immédiate du nombre de niveaux traversés depuis la racine.
          </li>
          <li>
            <strong className="text-foreground">Contextualiser une action</strong> — rappeler le
            contexte exact d'une page pour une action ou un partage de lien.
          </li>
        </ol>
      </Section>

      <Section title="Différencier de composants proches">
        <p>
          <strong className="text-foreground">Breadcrumb</strong> — chemin hiérarchique complet
          depuis la racine, dernier élément toujours en lecture seule.
        </p>
        <p>
          <strong className="text-foreground">Tabs</strong> — bascule entre vues de même niveau au
          sein d'une page, aucune notion d'arborescence.
        </p>
        <p>
          <strong className="text-foreground">Bouton retour</strong> — revient à l'écran précédent
          dans l'historique, sans notion de hiérarchie ni de chemin.
        </p>
        <p>
          <strong className="text-foreground">Menu de navigation</strong> — liste les entrées de
          premier niveau, point de départ (pas un indicateur de position).
        </p>
        <p>
          <strong className="text-foreground">Pagination</strong> — découpe un long contenu en pages
          de même niveau, sans hiérarchie parent/enfant.
        </p>
      </Section>

      <Section title="Anatomie">
        <p>Le composant Breadcrumb peut être composé de 5 sous-éléments :</p>
        <ul className="list-disc space-y-1 pl-4">
          <li>Lien racine</li>
          <li>Séparateur</li>
          <li>Lien intermédiaire</li>
          <li>Overflow</li>
          <li>Élément courant</li>
        </ul>
        <div className="border-border bg-card mt-2 flex min-h-[80px] items-center justify-center overflow-x-auto rounded-lg border p-6">
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

      <Section title="Éléments">
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
              name: "Au-delà de 5 niveaux (overflow)",
              status: "À clarifier",
              description:
                "Représente les niveaux masqués au-delà du seuil de 5. Comportement (statique ou disclosure interactive) — non tranché côté produit à ce jour.",
            },
            {
              name: "Élément courant",
              status: "Obligatoire — non cliquable",
              description:
                'Dernier maillon du chemin, page actuelle. Non cliquable, aria-current="page".',
            },
          ]}
        />
      </Section>

      <Section title="Position dans une page">
        <p>
          Toujours positionné juste sous l'en-tête (header), au-dessus du titre H1 de la page.
          Position constante d'une page à l'autre : l'utilisateur doit pouvoir le retrouver au même
          endroit sans effort. À éviter : l'isoler en bas de page ou le déplacer selon les sections.
        </p>
      </Section>

      <Section title="Afficher tous les niveaux jusqu'à 5">
        <p>
          Au-delà, les niveaux intermédiaires sont tronqués : la racine et les derniers niveaux
          (dont l'élément courant) restent visibles. Ne jamais dépasser 5 éléments affichés
          simultanément.
        </p>
        <div className="border-border bg-card mt-2 flex min-h-[80px] items-center justify-center overflow-x-auto rounded-lg border p-6">
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

      <Section title="Spécification technique">
        <p>
          Propriétés exposées par les 3 composants du système Breadcrumb. La ligne overflow reste
          ouverte en attendant la clarification du comportement attendu (cf. échange produit).
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
              property: "Overflow (state \"+5\")",
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

      <Section title="Do & Don't">
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
                  <BreadcrumbPage>Paramètres avancés de configuration du compte utilisateur</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </DoDontCard>
        </div>
      </Section>

      <Section title="Accessibilité">
        <p>
          Exposer le composant avec <code className="text-foreground">role="navigation"</code> et{" "}
          <code className="text-foreground">aria-label="Fil d'Ariane"</code>. Marquer l'élément
          courant avec <code className="text-foreground">aria-current="page"</code> pour qu'il soit
          annoncé comme la position actuelle — ceci est appliqué automatiquement par le composant,
          jamais posé manuellement sur les liens intermédiaires. Vérifier le rendu avec les
          technologies de lecture courantes (VoiceOver, NVDA, JAWS) auprès du référent
          accessibilité.
        </p>
        <p className="text-amber-700">
          Écart corrigé lors de cette synchronisation : le lien ne portait aucun style{" "}
          <code>focus-visible</code>, laissant la navigation clavier sans indication visuelle.
        </p>
      </Section>
    </div>
  );
}
