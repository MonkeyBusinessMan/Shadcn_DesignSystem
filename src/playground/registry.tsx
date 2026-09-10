import { useId, useRef, useState, type ComponentProps, type MouseEvent } from "react";
import type { ComponentDemo, ControlValues } from "./types";
import { cn } from "@/lib/utils";
import { BreadcrumbDocumentation } from "./docs/breadcrumb-docs";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertActions, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "@/components/ui/field";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Label } from "@/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MultiSelect, type MultiSelectOption } from "@/components/ui/multi-select";
import { SidePanel } from "@/components/ui/side-panel";
import { InternalLink, ExternalLink, DownloadLink, InlineLink } from "@/components/ui/link";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import type { DateRange } from "react-day-picker";
import { SegmentedControl, type SegmentedControlOption } from "@/components/ui/segmented-control";
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import { Slider } from "@/components/ui/slider";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Bold,
  Home,
  Settings,
  User,
  Plus,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Search,
  Terminal,
  AlertCircle,
  LayoutGrid,
  List,
  ArrowRight,
  ChevronsUpDown,
  MoreHorizontal,
  Pencil,
  Trash2,
  CalendarDays,
  FolderKanban,
  Users,
  ChevronDown,
  Check,
  X,
  LogOut,
  UserCircle,
} from "lucide-react";
import { Bar, BarChart, XAxis } from "recharts";

const bv = (v: ControlValues, key: string) => String(v[key]);
const bb = (v: ControlValues, key: string) => Boolean(v[key]);
const bt = (v: ControlValues, key: string) => String(v[key]);

const FORMAT_HINTS: Record<string, string> = {
  email: "Format attendu : nom@domaine.fr",
  tel: "Format attendu : 06 12 34 56 78",
};
const TYPE_PLACEHOLDERS: Record<string, string> = {
  email: "nom@domaine.fr",
  tel: "06 12 34 56 78",
  text: "Saisissez du texte",
};

function InputFieldDemo({
  label,
  showLabel,
  helpText,
  showHelpText,
  requirement,
  type,
  maxLength,
  showCounter,
  disabled,
}: {
  label: string;
  showLabel: boolean;
  helpText: string;
  showHelpText: boolean;
  requirement: "required" | "optional" | "none";
  type: "text" | "email" | "tel";
  maxLength: number;
  showCounter: boolean;
  disabled: boolean;
}) {
  const [value, setValue] = useState("");
  const id = useId();
  const hasLimit = maxLength > 0;
  const nearLimit = hasLimit && value.length >= maxLength;

  return (
    <FieldGroup className="w-72">
      <Field>
        <FieldLabel htmlFor={id} className={cn(!showLabel && "sr-only")}>
          {label}
          {requirement === "required" && <span className="text-destructive ml-0.5">*</span>}
          {requirement === "optional" && (
            <span className="text-muted-foreground ml-1 text-xs font-normal">(optionnel)</span>
          )}
        </FieldLabel>
        {showHelpText && helpText && <FieldDescription>{helpText}</FieldDescription>}
        <Input
          id={id}
          type={type}
          placeholder={TYPE_PLACEHOLDERS[type]}
          disabled={disabled}
          value={value}
          maxLength={hasLimit ? maxLength : undefined}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="flex items-start justify-between gap-4">
          {FORMAT_HINTS[type] ? <FieldDescription>{FORMAT_HINTS[type]}</FieldDescription> : <span />}
          {showCounter && hasLimit && (
            <span
              className={cn(
                "text-muted-foreground shrink-0 text-xs tabular-nums",
                nearLimit && "text-destructive"
              )}
            >
              {value.length} / {maxLength}
            </span>
          )}
        </div>
      </Field>
    </FieldGroup>
  );
}

// Styles forcés pour représenter statiquement des pseudo-états (hover, focus,
// pressed...) impossibles à déclencher sans interaction utilisateur réelle.
const FORCED_RING = "border-ring ring-[3px] ring-ring/50";

function InputStatePreview({ className, ...props }: ComponentProps<typeof Input>) {
  const id = useId();
  return <Input id={id} className={cn("w-40", className)} {...props} />;
}

const INPUT_STATES: ComponentDemo["states"] = [
  { name: "Enabled", render: () => <InputStatePreview placeholder="Texte" /> },
  { name: "Disabled", render: () => <InputStatePreview placeholder="Texte" disabled /> },
  {
    name: "Hovered",
    render: () => <InputStatePreview placeholder="Texte" className="border-ring/60" />,
  },
  {
    name: "Focused",
    render: () => <InputStatePreview placeholder="Texte" className={FORCED_RING} />,
  },
  {
    name: "Pressed",
    render: () => (
      <InputStatePreview placeholder="Texte" className="border-ring ring-[2px] ring-ring/70" />
    ),
  },
  {
    name: "Active",
    render: () => <InputStatePreview defaultValue="Saisie en cours" className={FORCED_RING} />,
  },
  {
    name: "Read only",
    render: () => <InputStatePreview defaultValue="Valeur figée" readOnly />,
  },
  {
    name: "Error",
    render: () => <InputStatePreview defaultValue="valeur incorrecte" aria-invalid="true" />,
  },
  {
    name: "Valid",
    render: () => <InputStatePreview defaultValue="valeur correcte" data-valid="true" />,
  },
];

const MULTISELECT_OPTIONS: MultiSelectOption[] = [
  { value: "kanban", label: "Kanban" },
  { value: "sprints", label: "Sprints" },
  { value: "calendrier", label: "Calendrier" },
  { value: "projets", label: "Projets" },
  { value: "equipe", label: "Équipe" },
];

function MultiSelectDemo({
  maxCount,
  disabled,
  placeholder,
  initial,
}: {
  maxCount: number;
  disabled: boolean;
  placeholder: string;
  initial: string[];
}) {
  const [value, setValue] = useState<string[]>(initial);
  return (
    <div className="w-72">
      <MultiSelect
        options={MULTISELECT_OPTIONS}
        value={value}
        onValueChange={setValue}
        maxCount={maxCount}
        disabled={disabled}
        placeholder={placeholder}
      />
    </div>
  );
}

const MULTISELECT_STATES: ComponentDemo["states"] = [
  {
    name: "Vide",
    render: () => (
      <div className="w-52">
        <MultiSelect options={MULTISELECT_OPTIONS} value={[]} onValueChange={() => {}} />
      </div>
    ),
  },
  {
    name: "Avec sélection",
    render: () => (
      <div className="w-52">
        <MultiSelect
          options={MULTISELECT_OPTIONS}
          value={["kanban", "sprints"]}
          onValueChange={() => {}}
        />
      </div>
    ),
  },
  {
    name: "Débordement (+N)",
    render: () => (
      <div className="w-52">
        <MultiSelect
          options={MULTISELECT_OPTIONS}
          value={["kanban", "sprints", "calendrier", "projets", "equipe"]}
          maxCount={2}
          onValueChange={() => {}}
        />
      </div>
    ),
  },
  {
    name: "Disabled",
    render: () => (
      <div className="w-52">
        <MultiSelect
          options={MULTISELECT_OPTIONS}
          value={["kanban"]}
          onValueChange={() => {}}
          disabled
        />
      </div>
    ),
  },
];

const SEGMENTED_VIEW_OPTIONS: SegmentedControlOption[] = [
  { value: "grid", label: "Grille", icon: LayoutGrid },
  { value: "list", label: "Liste", icon: List },
];

function SegmentedControlDemo({
  disabled,
  initial,
}: {
  disabled: boolean;
  initial: string;
}) {
  const [value, setValue] = useState(initial);
  return (
    <SegmentedControl
      options={SEGMENTED_VIEW_OPTIONS}
      value={value}
      onValueChange={setValue}
      disabled={disabled}
    />
  );
}

const SEGMENTED_CONTROL_STATES: ComponentDemo["states"] = [
  {
    name: "Grille active",
    render: () => (
      <SegmentedControl options={SEGMENTED_VIEW_OPTIONS} value="grid" onValueChange={() => {}} />
    ),
  },
  {
    name: "Liste active",
    render: () => (
      <SegmentedControl options={SEGMENTED_VIEW_OPTIONS} value="list" onValueChange={() => {}} />
    ),
  },
  {
    name: "Disabled",
    render: () => (
      <SegmentedControl
        options={SEGMENTED_VIEW_OPTIONS}
        value="grid"
        onValueChange={() => {}}
        disabled
      />
    ),
  },
];

const BUTTON_STATES: ComponentDemo["states"] = [
  { name: "Enabled", render: () => <Button>Bouton</Button> },
  {
    name: "Hovered",
    render: () => <Button className="bg-primary/90">Bouton</Button>,
  },
  {
    name: "Focused",
    render: () => <Button className={FORCED_RING}>Bouton</Button>,
  },
  {
    name: "Pressed",
    render: () => <Button className="scale-[0.98] bg-primary/90">Bouton</Button>,
  },
  { name: "Disabled", render: () => <Button disabled>Bouton</Button> },
  { name: "Selected", render: () => <Button selected>Bouton</Button> },
  { name: "Loading", render: () => <Button loading>Bouton</Button> },
];

const FORM_FIELD_POOL: {
  key: string;
  label: string;
  placeholder: string;
  required: boolean;
  type?: string;
}[] = [
  { key: "name", label: "Nom du projet", placeholder: "ex: Le Studio", required: true },
  { key: "email", label: "Email du contact", placeholder: "nom@domaine.fr", required: true, type: "email" },
  { key: "description", label: "Description", placeholder: "Décris le projet en quelques mots", required: false },
  { key: "deadline", label: "Date d'échéance", placeholder: "JJ/MM/AAAA", required: false },
  { key: "priority", label: "Priorité", placeholder: "Moyenne", required: false },
];

function FormDemo({ title, fieldCount }: { title: string; fieldCount: number }) {
  const fields = FORM_FIELD_POOL.slice(0, fieldCount);
  const hasRequired = fields.some((f) => f.required);

  return (
    <div className="flex w-80 flex-col gap-5">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {hasRequired && (
          <p className="text-muted-foreground mt-1 text-xs">
            Les champs avec un astérisque <span className="text-destructive">*</span> sont
            obligatoires.
          </p>
        )}
      </div>
      <FieldGroup>
        {fields.map((f) => (
          <Field key={f.key}>
            <FieldLabel htmlFor={`form-demo-${f.key}`}>
              {f.label}
              {f.required && <span className="text-destructive ml-0.5">*</span>}
            </FieldLabel>
            <Input id={`form-demo-${f.key}`} type={f.type ?? "text"} placeholder={f.placeholder} />
          </Field>
        ))}
      </FieldGroup>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">
          Annuler
        </Button>
        <Button type="submit">Envoyer</Button>
      </div>
    </div>
  );
}

function CheckboxFieldDemo({
  label,
  requirement,
  showLink,
  linkText,
  showDescription,
  description,
  checked,
  disabled,
}: {
  label: string;
  requirement: "required" | "optional" | "none";
  showLink: boolean;
  linkText: string;
  showDescription: boolean;
  description: string;
  checked: boolean;
  disabled: boolean;
}) {
  const id = useId();
  return (
    <div className="flex w-80 items-center gap-2">
      <Checkbox id={id} defaultChecked={checked} disabled={disabled} />
      <div className="grid gap-1 leading-none">
        <Label htmlFor={id}>
          {label}
          {showLink && (
            <>
              {" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-primary underline underline-offset-4"
              >
                {linkText}
              </a>
            </>
          )}
          {requirement === "required" && <span className="text-destructive ml-0.5">*</span>}
          {requirement === "optional" && (
            <span className="text-muted-foreground ml-1 text-xs font-normal">(optionnel)</span>
          )}
        </Label>
        {showDescription && description && (
          <p className="text-muted-foreground text-sm font-normal">{description}</p>
        )}
      </div>
    </div>
  );
}

const CHECKBOX_STATES: ComponentDemo["states"] = [
  { name: "Enabled", render: () => <Checkbox /> },
  { name: "Hovered", render: () => <Checkbox className="border-ring/60" /> },
  { name: "Pressed", render: () => <Checkbox className="scale-95 border-ring/60" /> },
  { name: "Selected", render: () => <Checkbox defaultChecked /> },
  { name: "Disabled", render: () => <Checkbox disabled /> },
  { name: "Read only", render: () => <Checkbox checked readOnly /> },
  { name: "Error", render: () => <Checkbox aria-invalid="true" /> },
];

function SidePanelDemo({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        Ouvrir le panneau
      </Button>
      <SidePanel
        open={open}
        onOpenChange={setOpen}
        title={title}
        description={description}
        actions={[
          { label: secondaryLabel, variant: "secondary", onClick: () => setOpen(false) },
          { label: primaryLabel, variant: "primary", onClick: () => setOpen(false) },
        ]}
      >
        <div className="flex flex-col gap-4 py-4">
          <Field>
            <FieldLabel htmlFor={`${id}-name`}>Nom du projet</FieldLabel>
            <Input id={`${id}-name`} placeholder="ex: Le Studio" />
          </Field>
          <Field>
            <FieldLabel htmlFor={`${id}-desc`}>Description</FieldLabel>
            <Textarea id={`${id}-desc`} placeholder="Décris le projet en quelques mots" />
          </Field>
        </div>
      </SidePanel>
    </>
  );
}

interface TabItem {
  value: string;
  label: string;
  content: string;
}

const INITIAL_TABS: TabItem[] = [
  { value: "kanban", label: "Kanban", content: "Vue Kanban." },
  { value: "sprints", label: "Sprints", content: "Vue Sprints." },
  { value: "calendrier", label: "Calendrier", content: "Vue Calendrier." },
];

function TabsDemo() {
  const [tabs, setTabs] = useState<TabItem[]>(INITIAL_TABS);
  const [active, setActive] = useState(INITIAL_TABS[0].value);
  const nextId = useRef(1);

  function closeTab(event: MouseEvent, value: string) {
    event.stopPropagation();
    event.preventDefault();
    setTabs((prev) => {
      const next = prev.filter((t) => t.value !== value);
      if (active === value && next.length > 0) {
        setActive(next[0].value);
      }
      return next;
    });
  }

  function addTab() {
    const value = `nouvel-onglet-${nextId.current++}`;
    const label = `Nouvel onglet ${nextId.current - 1}`;
    setTabs((prev) => [...prev, { value, label, content: `Contenu de ${label}.` }]);
    setActive(value);
  }

  return (
    <Tabs value={active} onValueChange={setActive} className="w-80">
      <div className="flex items-center gap-1">
        <TabsList variant="line" className="flex-1 justify-start">
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.label}
              <span
                role="button"
                tabIndex={-1}
                className="hover:bg-muted-foreground/20 rounded-xs"
                onClick={(e) => closeTab(e, tab.value)}
              >
                <X className="size-3" />
              </span>
            </TabsTrigger>
          ))}
        </TabsList>
        <Button variant="ghost" size="icon-sm" onClick={addTab} title="Ajouter un onglet">
          <Plus />
        </Button>
      </div>
      {tabs.length === 0 && (
        <p className="text-muted-foreground text-sm">Tous les onglets sont fermés.</p>
      )}
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="text-sm">
          {tab.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}

const TOGGLE_GROUP_ITEM_POOL = [
  { value: "left", label: "Aligner à gauche", icon: AlignLeft, iconName: "AlignLeft" },
  { value: "center", label: "Centrer", icon: AlignCenter, iconName: "AlignCenter" },
  { value: "right", label: "Aligner à droite", icon: AlignRight, iconName: "AlignRight" },
  { value: "justify", label: "Justifier", icon: AlignJustify, iconName: "AlignJustify" },
];

function DateRangePickerDemo({
  placeholder,
  numberOfMonths,
  disabled,
}: {
  placeholder: string;
  numberOfMonths: number;
  disabled: boolean;
}) {
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  return (
    <DateRangePicker
      value={range}
      onValueChange={setRange}
      placeholder={placeholder}
      numberOfMonths={numberOfMonths}
      disabled={disabled}
      className="w-72"
    />
  );
}

export const demos: ComponentDemo[] = [
  // ---------- Inputs & Forms ----------
  {
    slug: "button",
    name: "Button",
    category: "Inputs & Forms",
    description: "Déclenche une action ou un événement.",
    controls: [
      { key: "variant", label: "variant", type: "select", options: ["default", "destructive", "outline", "secondary", "ghost", "link"], default: "default" },
      { key: "size", label: "size", type: "select", options: ["default", "xs", "sm", "lg", "icon"], default: "default" },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
      { key: "text", label: "label", type: "text", default: "Bouton" },
      { key: "iconLeft", label: "icône à gauche", type: "boolean", default: false },
      { key: "iconRight", label: "icône à droite", type: "boolean", default: false },
    ],
    render: (v) => (
      <Button variant={bv(v, "variant") as any} size={bv(v, "size") as any} disabled={bb(v, "disabled")}>
        {bb(v, "iconLeft") && <Plus />}
        {bt(v, "text")}
        {bb(v, "iconRight") && <ArrowRight />}
      </Button>
    ),
    code: (v) => {
      const left = bb(v, "iconLeft") ? `\n    <Plus />` : "";
      const right = bb(v, "iconRight") ? `\n    <ArrowRight />` : "";
      return `<Button variant="${bv(v, "variant")}" size="${bv(v, "size")}"${bb(v, "disabled") ? " disabled" : ""}>${left}\n    ${bt(v, "text")}${right}\n</Button>`;
    },
    states: BUTTON_STATES,
  },
  {
    slug: "badge",
    name: "Badge",
    category: "Inputs & Forms",
    description: "Affiche un petit statut ou compteur, avec une icône optionnelle à gauche (data-icon=\"inline-start\") ou à droite (data-icon=\"inline-end\") du label.",
    controls: [
      { key: "variant", label: "variant", type: "select", options: ["default", "secondary", "destructive", "outline", "ghost", "link"], default: "default" },
      { key: "text", label: "label", type: "text", default: "Vérifié" },
      { key: "icon", label: "icône", type: "select", options: ["none", "inline-start", "inline-end"], default: "inline-start" },
    ],
    render: (v) => {
      const icon = bv(v, "icon");
      return (
        <Badge
          variant={bv(v, "variant") as any}
          icon={icon !== "none" ? <Check /> : undefined}
          iconPosition={icon !== "none" ? (icon as "inline-start" | "inline-end") : undefined}
        >
          {bt(v, "text")}
        </Badge>
      );
    },
    code: (v) => {
      const icon = bv(v, "icon");
      const iconProps = icon !== "none" ? ` icon={<Check />} iconPosition="${icon}"` : "";
      return `<Badge variant="${bv(v, "variant")}"${iconProps}>${bt(v, "text")}</Badge>`;
    },
  },
  {
    slug: "input",
    name: "Input",
    category: "Inputs & Forms",
    description: "Champ de saisie texte, avec label, texte d'aide, indicateur requis/optionnel, compteur de caractères et indice de format.",
    controls: [
      { key: "label", label: "label", type: "text", default: "Adresse email" },
      { key: "showLabel", label: "afficher le label", type: "boolean", default: true },
      { key: "showHelpText", label: "afficher le texte d'aide", type: "boolean", default: true },
      { key: "helpText", label: "texte d'aide", type: "text", default: "Utilisée uniquement pour la connexion et les notifications." },
      { key: "requirement", label: "requirement", type: "select", options: ["required", "optional", "none"], default: "required" },
      { key: "type", label: "type", type: "select", options: ["text", "email", "tel"], default: "email" },
      { key: "maxLength", label: "limite de caractères", type: "number", default: 40, min: 0, max: 200 },
      { key: "showCounter", label: "afficher le compteur", type: "boolean", default: true },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
    ],
    render: (v) => (
      <InputFieldDemo
        label={bt(v, "label")}
        showLabel={bb(v, "showLabel")}
        helpText={bt(v, "helpText")}
        showHelpText={bb(v, "showHelpText")}
        requirement={bv(v, "requirement") as "required" | "optional" | "none"}
        type={bv(v, "type") as "text" | "email" | "tel"}
        maxLength={Number(v.maxLength)}
        showCounter={bb(v, "showCounter")}
        disabled={bb(v, "disabled")}
      />
    ),
    code: (v) => {
      const requirement = bv(v, "requirement");
      const type = bv(v, "type");
      const maxLength = Number(v.maxLength);
      const requiredMark = requirement === "required" ? `<span className="text-destructive ml-0.5">*</span>` : requirement === "optional" ? `<span className="text-muted-foreground ml-1 text-xs font-normal">(optionnel)</span>` : "";
      const labelClass = bb(v, "showLabel") ? "" : " className=\"sr-only\"";
      const helpLine = bb(v, "showHelpText") ? `\n  <FieldDescription>${bt(v, "helpText")}</FieldDescription>` : "";
      return `<Field>\n  <FieldLabel htmlFor="email"${labelClass}>\n    ${bt(v, "label")}${requiredMark ? `\n    ${requiredMark}` : ""}\n  </FieldLabel>${helpLine}\n  <Input\n    id="email"\n    type="${type}"\n    maxLength={${maxLength}}\n    value={value}\n    onChange={(e) => setValue(e.target.value)}\n  />\n  <div className="flex items-start justify-between gap-4">\n    <FieldDescription>${FORMAT_HINTS[type] ?? ""}</FieldDescription>\n    ${bb(v, "showCounter") ? `<span className="text-muted-foreground text-xs tabular-nums">{value.length} / ${maxLength}</span>` : ""}\n  </div>\n</Field>`;
    },
    states: INPUT_STATES,
  },
  {
    slug: "textarea",
    name: "Textarea",
    category: "Inputs & Forms",
    description: "Champ de saisie multi-lignes.",
    controls: [
      { key: "placeholder", label: "placeholder", type: "text", default: "Écris ton message..." },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
    ],
    render: (v) => <Textarea placeholder={bt(v, "placeholder")} disabled={bb(v, "disabled")} className="w-72" />,
    code: (v) => `<Textarea placeholder="${bt(v, "placeholder")}"${bb(v, "disabled") ? " disabled" : ""} />`,
  },
  {
    slug: "label",
    name: "Label",
    category: "Inputs & Forms",
    description: "Étiquette accessible pour un champ de formulaire.",
    controls: [{ key: "text", label: "label", type: "text", default: "Nom du projet" }],
    render: (v) => (
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="demo-label-input">{bt(v, "text")}</Label>
        <Input id="demo-label-input" className="w-64" />
      </div>
    ),
    code: (v) => `<Label htmlFor="name">${bt(v, "text")}</Label>\n<Input id="name" />`,
  },
  {
    slug: "checkbox",
    name: "Checkbox",
    category: "Inputs & Forms",
    description: "Case à cocher, avec mention obligatoire/optionnelle, lien dans le label et description sous le label.",
    controls: [
      { key: "text", label: "label", type: "text", default: "J'accepte les" },
      { key: "requirement", label: "requirement", type: "select", options: ["required", "optional", "none"], default: "none" },
      { key: "showLink", label: "lien dans le label", type: "boolean", default: true },
      { key: "linkText", label: "texte du lien", type: "text", default: "conditions d'utilisation" },
      { key: "showDescription", label: "afficher la description", type: "boolean", default: true },
      { key: "description", label: "description", type: "text", default: "Tu recevras un email de confirmation." },
      { key: "checked", label: "checked (défaut)", type: "boolean", default: true },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
    ],
    render: (v) => (
      <CheckboxFieldDemo
        label={bt(v, "text")}
        requirement={bv(v, "requirement") as "required" | "optional" | "none"}
        showLink={bb(v, "showLink")}
        linkText={bt(v, "linkText")}
        showDescription={bb(v, "showDescription")}
        description={bt(v, "description")}
        checked={bb(v, "checked")}
        disabled={bb(v, "disabled")}
      />
    ),
    code: (v) => {
      const requirement = bv(v, "requirement");
      const requiredMark = requirement === "required" ? `<span className="text-destructive ml-0.5">*</span>` : requirement === "optional" ? `<span className="text-muted-foreground ml-1 text-xs font-normal">(optionnel)</span>` : "";
      const link = bb(v, "showLink") ? ` <a href="#" className="text-primary underline underline-offset-4">${bt(v, "linkText")}</a>` : "";
      const description = bb(v, "showDescription") ? `\n    <p className="text-muted-foreground text-sm font-normal">${bt(v, "description")}</p>` : "";
      return `<div className="flex items-center gap-2">\n  <Checkbox id="terms"${bb(v, "checked") ? " defaultChecked" : ""}${bb(v, "disabled") ? " disabled" : ""} />\n  <div className="grid gap-1 leading-none">\n    <Label htmlFor="terms">\n      ${bt(v, "text")}${link}${requiredMark ? ` ${requiredMark}` : ""}\n    </Label>${description}\n  </div>\n</div>`;
    },
    states: CHECKBOX_STATES,
  },
  {
    slug: "switch",
    name: "Switch",
    category: "Inputs & Forms",
    description: "Interrupteur on/off.",
    controls: [
      { key: "checked", label: "checked (défaut)", type: "boolean", default: false },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
      { key: "text", label: "label", type: "text", default: "Notifications" },
    ],
    render: (v) => (
      <div className="flex items-center gap-2">
        <Switch id="demo-switch" defaultChecked={bb(v, "checked")} disabled={bb(v, "disabled")} />
        <Label htmlFor="demo-switch">{bt(v, "text")}</Label>
      </div>
    ),
    code: (v) => `<Switch id="notif"${bb(v, "checked") ? " defaultChecked" : ""}${bb(v, "disabled") ? " disabled" : ""} />\n<Label htmlFor="notif">${bt(v, "text")}</Label>`,
  },
  {
    slug: "radio-group",
    name: "Radio Group",
    category: "Inputs & Forms",
    description: "Groupe de choix exclusifs.",
    controls: [{ key: "disabled", label: "disabled", type: "boolean", default: false }],
    render: (v) => (
      <RadioGroup defaultValue="comfortable" disabled={bb(v, "disabled")} className="gap-3">
        {["default", "comfortable", "compact"].map((val) => (
          <div key={val} className="flex items-center gap-2">
            <RadioGroupItem value={val} id={`r-${val}`} />
            <Label htmlFor={`r-${val}`}>{val}</Label>
          </div>
        ))}
      </RadioGroup>
    ),
    code: () => `<RadioGroup defaultValue="comfortable">\n  <RadioGroupItem value="default" id="r1" />\n  <Label htmlFor="r1">default</Label>\n  ...\n</RadioGroup>`,
  },
  {
    slug: "select",
    name: "Select",
    category: "Inputs & Forms",
    description: "Menu déroulant pour choisir une valeur.",
    controls: [{ key: "disabled", label: "disabled", type: "boolean", default: false }],
    render: (v) => (
      <Select disabled={bb(v, "disabled")} defaultValue="kanban">
        <SelectTrigger className="w-48">
          <SelectValue placeholder="Choisir une vue" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="kanban">Kanban</SelectItem>
          <SelectItem value="sprints">Sprints</SelectItem>
          <SelectItem value="calendrier">Calendrier</SelectItem>
        </SelectContent>
      </Select>
    ),
    code: (v) => `<Select${bb(v, "disabled") ? " disabled" : ""} defaultValue="kanban">\n  <SelectTrigger className="w-48">\n    <SelectValue placeholder="Choisir une vue" />\n  </SelectTrigger>\n  <SelectContent>\n    <SelectItem value="kanban">Kanban</SelectItem>\n    <SelectItem value="sprints">Sprints</SelectItem>\n  </SelectContent>\n</Select>`,
  },
  {
    slug: "segmented-control",
    name: "Segmented Control",
    category: "Inputs & Forms",
    description: "Toggle à options exclusives, présentées comme deux (ou plus) boutons collés dans une même pilule — l'option active se distingue par un fond. Composant maison (non fourni par shadcn/ui).",
    controls: [{ key: "disabled", label: "disabled", type: "boolean", default: false }],
    render: (v) => <SegmentedControlDemo disabled={bb(v, "disabled")} initial="grid" />,
    code: (v) => `const [value, setValue] = useState("grid");\n\n<SegmentedControl\n  options={[\n    { value: "grid", label: "Grille", icon: LayoutGrid },\n    { value: "list", label: "Liste", icon: List },\n  ]}\n  value={value}\n  onValueChange={setValue}${bb(v, "disabled") ? "\n  disabled" : ""}\n/>`,
    states: SEGMENTED_CONTROL_STATES,
  },
  {
    slug: "native-select",
    name: "Native Select",
    category: "Inputs & Forms",
    description: "Select HTML natif stylé (utile en contexte mobile/formulaire).",
    controls: [{ key: "disabled", label: "disabled", type: "boolean", default: false }],
    render: (v) => (
      <NativeSelect disabled={bb(v, "disabled")} className="w-48" defaultValue="fr">
        <NativeSelectOption value="fr">Français</NativeSelectOption>
        <NativeSelectOption value="en">English</NativeSelectOption>
      </NativeSelect>
    ),
    code: (v) => `<NativeSelect${bb(v, "disabled") ? " disabled" : ""} defaultValue="fr">\n  <NativeSelectOption value="fr">Français</NativeSelectOption>\n  <NativeSelectOption value="en">English</NativeSelectOption>\n</NativeSelect>`,
  },
  {
    slug: "multi-select",
    name: "Multi Select",
    category: "Inputs & Forms",
    description: "Sélection multiple avec recherche, badges retirables et repli au-delà d'une limite. Composant maison (non fourni par shadcn/ui), construit sur Popover + Command + Badge.",
    controls: [
      { key: "placeholder", label: "placeholder", type: "text", default: "Sélectionner des vues..." },
      { key: "maxCount", label: "maxCount (badges avant +N)", type: "number", default: 3, min: 1, max: 5 },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
    ],
    render: (v) => (
      <MultiSelectDemo
        placeholder={bt(v, "placeholder")}
        maxCount={Number(v.maxCount)}
        disabled={bb(v, "disabled")}
        initial={["kanban", "sprints"]}
      />
    ),
    code: (v) => `const [value, setValue] = useState<string[]>(["kanban", "sprints"]);\n\n<MultiSelect\n  options={options}\n  value={value}\n  onValueChange={setValue}\n  placeholder="${bt(v, "placeholder")}"\n  maxCount={${v.maxCount}}${bb(v, "disabled") ? "\n  disabled" : ""}\n/>`,
    states: MULTISELECT_STATES,
  },
  {
    slug: "date-range-picker",
    name: "Range Date Picker",
    category: "Inputs & Forms",
    description: "Champ de saisie pour choisir une période (date de début et date de fin). Composant maison (non fourni par shadcn/ui), construit sur Popover + Calendar mode=\"range\".",
    controls: [
      { key: "placeholder", label: "placeholder", type: "text", default: "Sélectionner une période" },
      { key: "numberOfMonths", label: "nombre de mois affichés", type: "number", default: 2, min: 1, max: 2 },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
    ],
    render: (v) => (
      <DateRangePickerDemo
        placeholder={bt(v, "placeholder")}
        numberOfMonths={Number(v.numberOfMonths)}
        disabled={bb(v, "disabled")}
      />
    ),
    code: (v) => `const [range, setRange] = useState<DateRange | undefined>();\n\n<DateRangePicker\n  value={range}\n  onValueChange={setRange}\n  placeholder="${bt(v, "placeholder")}"\n  numberOfMonths={${v.numberOfMonths}}${bb(v, "disabled") ? "\n  disabled" : ""}\n/>`,
  },
  {
    slug: "slider",
    name: "Slider",
    category: "Inputs & Forms",
    description: "Sélection d'une valeur numérique sur une plage.",
    controls: [
      { key: "min", label: "min", type: "number", default: 0 },
      { key: "max", label: "max", type: "number", default: 100 },
      { key: "step", label: "step", type: "number", default: 1 },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
    ],
    render: (v) => (
      <Slider
        defaultValue={[50]}
        min={Number(v.min)}
        max={Number(v.max)}
        step={Number(v.step)}
        disabled={bb(v, "disabled")}
        className="w-64"
      />
    ),
    code: (v) => `<Slider defaultValue={[50]} min={${v.min}} max={${v.max}} step={${v.step}}${bb(v, "disabled") ? " disabled" : ""} />`,
  },
  {
    slug: "toggle",
    name: "Toggle",
    category: "Inputs & Forms",
    description: "Bouton à deux états (pressé / non pressé). Variant d'affichage \"withText\" pour afficher l'icône avec son libellé.",
    controls: [
      { key: "variant", label: "variant", type: "select", options: ["default", "outline"], default: "default" },
      { key: "size", label: "size", type: "select", options: ["default", "sm", "lg"], default: "default" },
      { key: "display", label: "affichage", type: "select", options: ["icon", "withText"], default: "icon" },
      { key: "disabled", label: "disabled", type: "boolean", default: false },
    ],
    render: (v) => {
      const withText = bv(v, "display") === "withText";
      return (
        <Toggle
          variant={bv(v, "variant") as any}
          size={bv(v, "size") as any}
          disabled={bb(v, "disabled")}
          aria-label="Gras"
        >
          <Bold />
          {withText && "Gras"}
        </Toggle>
      );
    },
    code: (v) => {
      const withText = bv(v, "display") === "withText";
      return `<Toggle variant="${bv(v, "variant")}" size="${bv(v, "size")}"${bb(v, "disabled") ? " disabled" : ""} aria-label="Gras">\n  <Bold />\n${withText ? "  Gras\n" : ""}</Toggle>`;
    },
  },
  {
    slug: "toggle-group",
    name: "Toggle Group",
    category: "Inputs & Forms",
    description: "Groupe de toggles, sélection simple ou multiple. Variant d'affichage \"withText\" et nombre d'items configurable.",
    controls: [
      { key: "type", label: "type", type: "select", options: ["single", "multiple"], default: "single" },
      { key: "variant", label: "variant", type: "select", options: ["default", "outline"], default: "default" },
      { key: "display", label: "affichage", type: "select", options: ["icon", "withText"], default: "icon" },
      { key: "itemCount", label: "nombre d'items", type: "number", default: 3, min: 2, max: TOGGLE_GROUP_ITEM_POOL.length },
    ],
    render: (v) => {
      const withText = bv(v, "display") === "withText";
      const count = Math.min(Math.max(Number(v.itemCount), 2), TOGGLE_GROUP_ITEM_POOL.length);
      const items = TOGGLE_GROUP_ITEM_POOL.slice(0, count);
      const type = bv(v, "type");
      return (
        <ToggleGroup
          type={type as any}
          variant={bv(v, "variant") as any}
          defaultValue={(type === "single" ? items[0].value : [items[0].value]) as any}
        >
          {items.map((item) => (
            <ToggleGroupItem key={item.value} value={item.value} aria-label={item.label}>
              <item.icon />
              {withText && item.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      );
    },
    code: (v) => {
      const withText = bv(v, "display") === "withText";
      const count = Math.min(Math.max(Number(v.itemCount), 2), TOGGLE_GROUP_ITEM_POOL.length);
      const items = TOGGLE_GROUP_ITEM_POOL.slice(0, count);
      const itemsCode = items
        .map(
          (item) =>
            `\n  <ToggleGroupItem value="${item.value}"><${item.iconName} />${withText ? ` ${item.label}` : ""}</ToggleGroupItem>`
        )
        .join("");
      return `<ToggleGroup type="${bv(v, "type")}" variant="${bv(v, "variant")}">${itemsCode}\n</ToggleGroup>`;
    },
  },
  {
    slug: "input-otp",
    name: "Input OTP",
    category: "Inputs & Forms",
    description: "Saisie de code à usage unique.",
    controls: [{ key: "length", label: "nombre de cases", type: "number", default: 6, min: 4, max: 8 }],
    render: (v) => {
      const len = Number(v.length);
      return (
        <InputOTP maxLength={len}>
          <InputOTPGroup>
            {Array.from({ length: len }).map((_, i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      );
    },
    code: (v) => `<InputOTP maxLength={${v.length}}>\n  <InputOTPGroup>\n    {/* ${v.length} <InputOTPSlot index={i} /> */}\n  </InputOTPGroup>\n</InputOTP>`,
  },
  {
    slug: "input-group",
    name: "Input Group",
    category: "Inputs & Forms",
    description: "Input avec icônes ou boutons accolés.",
    controls: [{ key: "placeholder", label: "placeholder", type: "text", default: "Rechercher..." }],
    render: (v) => (
      <InputGroup className="w-72">
        <InputGroupAddon><Search /></InputGroupAddon>
        <InputGroupInput placeholder={bt(v, "placeholder")} />
        <InputGroupAddon align="inline-end">
          <InputGroupButton size="icon-xs">⏎</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    ),
    code: (v) => `<InputGroup>\n  <InputGroupAddon><Search /></InputGroupAddon>\n  <InputGroupInput placeholder="${bt(v, "placeholder")}" />\n</InputGroup>`,
  },
  {
    slug: "field",
    name: "Field",
    category: "Inputs & Forms",
    description: "Bloc de champ de formulaire (label, description, control).",
    controls: [
      { key: "label", label: "label", type: "text", default: "Nom du projet" },
      { key: "description", label: "description", type: "text", default: "Visible par toute l'équipe." },
    ],
    render: (v) => (
      <FieldGroup className="w-72">
        <Field>
          <FieldLabel htmlFor="field-demo">{bt(v, "label")}</FieldLabel>
          <Input id="field-demo" />
          <FieldDescription>{bt(v, "description")}</FieldDescription>
        </Field>
      </FieldGroup>
    ),
    code: (v) => `<Field>\n  <FieldLabel htmlFor="name">${bt(v, "label")}</FieldLabel>\n  <Input id="name" />\n  <FieldDescription>${bt(v, "description")}</FieldDescription>\n</Field>`,
  },
  {
    slug: "form",
    name: "Form",
    category: "Inputs & Forms",
    description: "Formulaire complet : titre, mention des champs obligatoires, nombre de champs configurable et actions Annuler/Envoyer. Intégration react-hook-form + zod (voir le code).",
    controls: [
      { key: "title", label: "titre", type: "text", default: "Créer un projet" },
      { key: "fieldCount", label: "nombre de champs", type: "number", default: 2, min: 2, max: FORM_FIELD_POOL.length },
    ],
    render: (v) => (
      <FormDemo
        title={bt(v, "title")}
        fieldCount={Math.min(Math.max(Number(v.fieldCount), 2), FORM_FIELD_POOL.length)}
      />
    ),
    code: (v) => {
      const fieldCount = Math.min(Math.max(Number(v.fieldCount), 2), FORM_FIELD_POOL.length);
      const fields = FORM_FIELD_POOL.slice(0, fieldCount);
      const hasRequired = fields.some((f) => f.required);
      const mention = hasRequired
        ? `\n    <p className="text-muted-foreground mt-1 text-xs">\n      Les champs avec un astérisque * sont obligatoires.\n    </p>`
        : "";
      const fieldsCode = fields
        .map(
          (f) =>
            `\n    <FormField name="${f.key}" render={({ field }) => (\n      <FormItem>\n        <FormLabel>${f.label}${f.required ? " *" : ""}</FormLabel>\n        <FormControl><Input {...field} /></FormControl>\n        <FormMessage />\n      </FormItem>\n    )} />`
        )
        .join("");
      return `const form = useForm({ resolver: zodResolver(schema) })\n\n<Form {...form}>\n  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">\n    <h3 className="text-lg font-semibold">${bt(v, "title")}</h3>${mention}${fieldsCode}\n    <div className="flex justify-end gap-2">\n      <Button type="button" variant="outline" onClick={onCancel}>Annuler</Button>\n      <Button type="submit">Envoyer</Button>\n    </div>\n  </form>\n</Form>`;
    },
  },

  // ---------- Layout & Display ----------
  {
    slug: "card",
    name: "Card",
    category: "Layout & Display",
    description: "Conteneur pour regrouper du contenu associé.",
    controls: [
      { key: "title", label: "titre", type: "text", default: "Sprint 12" },
      { key: "description", label: "description", type: "text", default: "12 tâches, échéance vendredi." },
    ],
    render: (v) => (
      <Card className="w-72">
        <CardHeader>
          <CardTitle>{bt(v, "title")}</CardTitle>
          <CardDescription>{bt(v, "description")}</CardDescription>
        </CardHeader>
        <CardContent><p className="text-sm">Contenu de la carte.</p></CardContent>
        <CardFooter><Button size="sm">Voir</Button></CardFooter>
      </Card>
    ),
    code: (v) => `<Card>\n  <CardHeader>\n    <CardTitle>${bt(v, "title")}</CardTitle>\n    <CardDescription>${bt(v, "description")}</CardDescription>\n  </CardHeader>\n  <CardContent>...</CardContent>\n  <CardFooter><Button size="sm">Voir</Button></CardFooter>\n</Card>`,
  },
  {
    slug: "separator",
    name: "Separator",
    category: "Layout & Display",
    description: "Ligne de séparation horizontale ou verticale.",
    controls: [{ key: "orientation", label: "orientation", type: "select", options: ["horizontal", "vertical"], default: "horizontal" }],
    render: (v) => (
      <div className={bv(v, "orientation") === "vertical" ? "flex h-16 items-center gap-4" : "w-64"}>
        <span className="text-sm">Kanban</span>
        <Separator orientation={bv(v, "orientation") as any} className={bv(v, "orientation") === "horizontal" ? "my-3" : ""} />
        <span className="text-sm">Sprints</span>
      </div>
    ),
    code: (v) => `<Separator orientation="${bv(v, "orientation")}" />`,
  },
  {
    slug: "aspect-ratio",
    name: "Aspect Ratio",
    category: "Layout & Display",
    description: "Contraint un élément à un ratio largeur/hauteur fixe.",
    controls: [{ key: "ratio", label: "ratio", type: "select", options: ["16 / 9", "1 / 1", "4 / 3"], default: "16 / 9" }],
    render: (v) => {
      const ratio = bv(v, "ratio").split(" / ").map(Number);
      return (
        <AspectRatio ratio={ratio[0] / ratio[1]} className="bg-muted flex w-72 items-center justify-center rounded-md">
          <span className="text-muted-foreground text-sm">{bv(v, "ratio")}</span>
        </AspectRatio>
      );
    },
    code: (v) => `<AspectRatio ratio={${v.ratio}}>\n  <img src="..." className="rounded-md object-cover" />\n</AspectRatio>`,
  },
  {
    slug: "avatar",
    name: "Avatar",
    category: "Layout & Display",
    description: "Représentation visuelle d'un utilisateur.",
    controls: [
      { key: "src", label: "image src", type: "text", default: "" },
      { key: "fallback", label: "fallback", type: "text", default: "QF" },
    ],
    render: (v) => (
      <Avatar>
        <AvatarImage src={bt(v, "src") || undefined} alt="avatar" />
        <AvatarFallback>{bt(v, "fallback")}</AvatarFallback>
      </Avatar>
    ),
    code: (v) => `<Avatar>\n  <AvatarImage src="${bt(v, "src")}" />\n  <AvatarFallback>${bt(v, "fallback")}</AvatarFallback>\n</Avatar>`,
  },
  {
    slug: "skeleton",
    name: "Skeleton",
    category: "Layout & Display",
    description: "Placeholder de chargement.",
    controls: [
      { key: "width", label: "largeur (px)", type: "number", default: 200 },
      { key: "height", label: "hauteur (px)", type: "number", default: 20 },
    ],
    render: (v) => <Skeleton style={{ width: Number(v.width), height: Number(v.height) }} />,
    code: (v) => `<Skeleton style={{ width: ${v.width}, height: ${v.height} }} />`,
  },
  {
    slug: "spinner",
    name: "Spinner",
    category: "Layout & Display",
    description: "Indicateur de chargement animé.",
    controls: [],
    render: () => <Spinner />,
    code: () => `<Spinner />`,
  },
  {
    slug: "progress",
    name: "Progress",
    category: "Layout & Display",
    description: "Barre de progression déterminée.",
    controls: [{ key: "value", label: "value", type: "number", default: 60, min: 0, max: 100 }],
    render: (v) => <Progress value={Number(v.value)} className="w-64" />,
    code: (v) => `<Progress value={${v.value}} />`,
  },
  {
    slug: "table",
    name: "Table",
    category: "Layout & Display",
    description: "Tableau de données simple.",
    controls: [],
    render: () => (
      <Table>
        <TableCaption>Liste des tâches du sprint.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Tâche</TableHead>
            <TableHead>Statut</TableHead>
            <TableHead className="text-right">Priorité</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[["Wireframes", "En cours", "Haute"], ["Design final", "À faire", "Moyenne"]].map((row) => (
            <TableRow key={row[0]}>
              <TableCell>{row[0]}</TableCell>
              <TableCell>{row[1]}</TableCell>
              <TableCell className="text-right">{row[2]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    ),
    code: () => `<Table>\n  <TableHeader>\n    <TableRow><TableHead>Tâche</TableHead><TableHead>Statut</TableHead></TableRow>\n  </TableHeader>\n  <TableBody>\n    <TableRow><TableCell>Wireframes</TableCell><TableCell>En cours</TableCell></TableRow>\n  </TableBody>\n</Table>`,
  },
  {
    slug: "kbd",
    name: "Kbd",
    category: "Layout & Display",
    description: "Affiche une combinaison de touches clavier.",
    controls: [],
    render: () => (
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    ),
    code: () => `<KbdGroup>\n  <Kbd>Ctrl</Kbd>\n  <Kbd>K</Kbd>\n</KbdGroup>`,
  },
  {
    slug: "item",
    name: "Item",
    category: "Layout & Display",
    description: "Ligne composite (avatar/icône + titre + description + actions).",
    controls: [{ key: "variant", label: "variant", type: "select", options: ["default", "outline", "muted"], default: "outline" }],
    render: (v) => (
      <Item variant={bv(v, "variant") as any} className="w-80">
        <ItemMedia><User className="size-5" /></ItemMedia>
        <ItemContent>
          <ItemTitle>Quentin Feret</ItemTitle>
          <ItemDescription>Product Designer</ItemDescription>
        </ItemContent>
      </Item>
    ),
    code: (v) => `<Item variant="${bv(v, "variant")}">\n  <ItemMedia><User /></ItemMedia>\n  <ItemContent>\n    <ItemTitle>Quentin Feret</ItemTitle>\n    <ItemDescription>Product Designer</ItemDescription>\n  </ItemContent>\n</Item>`,
  },
  {
    slug: "empty",
    name: "Empty",
    category: "Layout & Display",
    description: "État vide (aucune donnée à afficher).",
    controls: [
      { key: "title", label: "titre", type: "text", default: "Aucune tâche" },
      { key: "description", label: "description", type: "text", default: "Crée ta première tâche pour commencer." },
    ],
    render: (v) => (
      <Empty className="w-80">
        <EmptyHeader>
          <EmptyMedia variant="icon"><AlertCircle /></EmptyMedia>
          <EmptyTitle>{bt(v, "title")}</EmptyTitle>
          <EmptyDescription>{bt(v, "description")}</EmptyDescription>
        </EmptyHeader>
        <EmptyContent><Button size="sm"><Plus /> Nouvelle tâche</Button></EmptyContent>
      </Empty>
    ),
    code: (v) => `<Empty>\n  <EmptyHeader>\n    <EmptyMedia variant="icon"><AlertCircle /></EmptyMedia>\n    <EmptyTitle>${bt(v, "title")}</EmptyTitle>\n    <EmptyDescription>${bt(v, "description")}</EmptyDescription>\n  </EmptyHeader>\n</Empty>`,
  },
  {
    slug: "button-group",
    name: "Button Group",
    category: "Layout & Display",
    description: "Regroupe plusieurs boutons ou un mélange de boutons et de champs de saisie.",
    controls: [
      {
        key: "variant",
        label: "variant",
        type: "select",
        options: ["buttons", "input+button", "button+input", "button+input+button"],
        default: "buttons",
      },
    ],
    render: (v) => {
      const variant = bv(v, "variant");
      if (variant === "input+button") {
        return (
          <ButtonGroup>
            <Input type="search" placeholder="Rechercher..." />
            <Button variant="outline" size="icon" aria-label="Rechercher">
              <Search />
            </Button>
          </ButtonGroup>
        );
      }
      if (variant === "button+input") {
        return (
          <ButtonGroup>
            <Button variant="outline">+33</Button>
            <Input type="tel" placeholder="6 12 34 56 78" />
          </ButtonGroup>
        );
      }
      if (variant === "button+input+button") {
        return (
          <ButtonGroup>
            <Button variant="outline">€</Button>
            <Input type="number" placeholder="0,00" />
            <Button>Envoyer</Button>
          </ButtonGroup>
        );
      }
      return (
        <ButtonGroup>
          <Button variant="outline">Jour</Button>
          <Button variant="outline">Semaine</Button>
          <Button variant="outline">Mois</Button>
        </ButtonGroup>
      );
    },
    code: (v) => {
      const variant = bv(v, "variant");
      if (variant === "input+button") {
        return `<ButtonGroup>\n  <Input type="search" placeholder="Rechercher..." />\n  <Button variant="outline" size="icon" aria-label="Rechercher">\n    <Search />\n  </Button>\n</ButtonGroup>`;
      }
      if (variant === "button+input") {
        return `<ButtonGroup>\n  <Button variant="outline">+33</Button>\n  <Input type="tel" placeholder="6 12 34 56 78" />\n</ButtonGroup>`;
      }
      if (variant === "button+input+button") {
        return `<ButtonGroup>\n  <Button variant="outline">€</Button>\n  <Input type="number" placeholder="0,00" />\n  <Button>Envoyer</Button>\n</ButtonGroup>`;
      }
      return `<ButtonGroup>\n  <Button variant="outline">Jour</Button>\n  <Button variant="outline">Semaine</Button>\n  <Button variant="outline">Mois</Button>\n</ButtonGroup>`;
    },
  },
  {
    slug: "scroll-area",
    name: "Scroll Area",
    category: "Layout & Display",
    description: "Zone défilable avec scrollbar stylée.",
    controls: [],
    render: () => (
      <ScrollArea className="border-border h-32 w-56 rounded-md border p-3">
        {Array.from({ length: 15 }).map((_, i) => (
          <p key={i} className="text-sm">Élément {i + 1}</p>
        ))}
      </ScrollArea>
    ),
    code: () => `<ScrollArea className="h-32 w-56 rounded-md border">\n  {items.map((item) => <p key={item.id}>{item.label}</p>)}\n</ScrollArea>`,
  },
  {
    slug: "resizable",
    name: "Resizable",
    category: "Layout & Display",
    description: "Panneaux redimensionnables par glissement.",
    controls: [],
    render: () => (
      <ResizablePanelGroup orientation="horizontal" className="border-border h-32 w-72 rounded-md border">
        <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center text-sm">Panneau 1</div></ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center text-sm">Panneau 2</div></ResizablePanel>
      </ResizablePanelGroup>
    ),
    code: () => `<ResizablePanelGroup orientation="horizontal">\n  <ResizablePanel defaultSize={50}>Panneau 1</ResizablePanel>\n  <ResizableHandle withHandle />\n  <ResizablePanel defaultSize={50}>Panneau 2</ResizablePanel>\n</ResizablePanelGroup>`,
  },
  {
    slug: "carousel",
    name: "Carousel",
    category: "Layout & Display",
    description: "Défilement horizontal d'éléments (embla-carousel).",
    controls: [],
    render: () => (
      <Carousel className="w-64">
        <CarouselContent>
          {[1, 2, 3].map((i) => (
            <CarouselItem key={i}>
              <div className="bg-muted flex h-32 items-center justify-center rounded-md text-2xl font-semibold">{i}</div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    ),
    code: () => `<Carousel>\n  <CarouselContent>\n    <CarouselItem>...</CarouselItem>\n  </CarouselContent>\n  <CarouselPrevious />\n  <CarouselNext />\n</Carousel>`,
  },
  {
    slug: "calendar",
    name: "Calendar",
    category: "Layout & Display",
    description: "Sélecteur de date (react-day-picker).",
    controls: [],
    render: () => <Calendar mode="single" className="rounded-md border" />,
    code: () => `<Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />`,
  },
  {
    slug: "chart",
    name: "Chart",
    category: "Layout & Display",
    description: "Wrapper recharts thémé pour les graphiques.",
    controls: [],
    render: () => {
      const data = [
        { name: "Lun", tasks: 4 },
        { name: "Mar", tasks: 7 },
        { name: "Mer", tasks: 5 },
        { name: "Jeu", tasks: 9 },
      ];
      return (
        <ChartContainer config={{ tasks: { label: "Tâches", color: "var(--chart-1)" } }} className="h-40 w-72">
          <BarChart data={data}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <Bar dataKey="tasks" fill="var(--color-tasks)" radius={4} />
            <ChartTooltip content={<ChartTooltipContent />} />
          </BarChart>
        </ChartContainer>
      );
    },
    code: () => `<ChartContainer config={chartConfig}>\n  <BarChart data={data}>\n    <XAxis dataKey="name" />\n    <Bar dataKey="tasks" fill="var(--color-tasks)" />\n    <ChartTooltip content={<ChartTooltipContent />} />\n  </BarChart>\n</ChartContainer>`,
  },

  // ---------- Navigation ----------
  {
    slug: "tabs",
    name: "Tabs",
    category: "Navigation",
    description: "Bascule entre plusieurs vues de contenu. Variant \"line\" (soulignement) avec une icône de fermeture à droite de chaque libellé.",
    controls: [],
    render: () => <TabsDemo />,
    code: () => `<Tabs value={active} onValueChange={setActive}>\n  <div className="flex items-center gap-1">\n    <TabsList variant="line" className="flex-1 justify-start">\n      {tabs.map((tab) => (\n        <TabsTrigger key={tab.value} value={tab.value}>\n          {tab.label}\n          <span onClick={(e) => closeTab(e, tab.value)}>\n            <X className="size-3" />\n          </span>\n        </TabsTrigger>\n      ))}\n    </TabsList>\n    <Button variant="ghost" size="icon-sm" onClick={addTab}>\n      <Plus />\n    </Button>\n  </div>\n  {tabs.map((tab) => (\n    <TabsContent key={tab.value} value={tab.value}>{tab.content}</TabsContent>\n  ))}\n</Tabs>`,
  },
  {
    slug: "internal-link",
    name: "Lien interne",
    category: "Navigation",
    description: "Texte qui navigue vers un autre emplacement du site. Basé sur Button variant=\"link\".",
    controls: [
      { key: "text", label: "label", type: "text", default: "Voir tous les projets" },
    ],
    render: (v) => (
      <InternalLink href="#" onClick={(e) => e.preventDefault()}>
        {bt(v, "text")}
      </InternalLink>
    ),
    code: (v) => `<InternalLink href="/projets">${bt(v, "text")}</InternalLink>`,
  },
  {
    slug: "external-link",
    name: "Lien externe",
    category: "Navigation",
    description: "Pointe vers un autre site et s'ouvre dans un nouvel onglet. Icône obligatoire à droite du label, et tooltip obligatoire au survol (\"Label - nouvelle fenêtre\").",
    controls: [
      { key: "text", label: "label", type: "text", default: "Documentation shadcn/ui" },
    ],
    render: (v) => (
      <ExternalLink href="#" label={bt(v, "text")} onClick={(e) => e.preventDefault()}>
        {bt(v, "text")}
      </ExternalLink>
    ),
    code: (v) => `<ExternalLink href="https://ui.shadcn.com" label="${bt(v, "text")}">\n  ${bt(v, "text")}\n</ExternalLink>`,
  },
  {
    slug: "download-link",
    name: "Lien de téléchargement",
    category: "Navigation",
    description: "Label \"Télécharger <fichier>\", description (format, volume, langue) et icône de téléchargement obligatoire à droite.",
    controls: [
      { key: "fileName", label: "nom du fichier", type: "text", default: "le rapport annuel" },
      { key: "format", label: "format", type: "text", default: "PDF" },
      { key: "size", label: "volume", type: "text", default: "2,4 Mo" },
      { key: "lang", label: "langue", type: "text", default: "Français" },
    ],
    render: (v) => (
      <DownloadLink
        href="#"
        fileName={bt(v, "fileName")}
        format={bt(v, "format")}
        size={bt(v, "size")}
        lang={bt(v, "lang")}
        onClick={(e) => e.preventDefault()}
      />
    ),
    code: (v) => `<DownloadLink\n  href="/fichiers/rapport.pdf"\n  fileName="${bt(v, "fileName")}"\n  format="${bt(v, "format")}"\n  size="${bt(v, "size")}"\n  lang="${bt(v, "lang")}"\n/>`,
  },
  {
    slug: "inline-link",
    name: "Lien au fil du paragraphe",
    category: "Navigation",
    description: "Lien souligné intégré à un paragraphe de texte. S'il est externe, ajoute l'icône et le tooltip obligatoires (\"Label - nouvelle fenêtre\").",
    controls: [
      { key: "external", label: "externe", type: "boolean", default: true },
    ],
    render: (v) => {
      const external = bb(v, "external");
      return (
        <p className="max-w-sm text-sm leading-relaxed">
          Consulte notre{" "}
          <InlineLink href="#" external={external} label="guide de contribution" onClick={(e) => e.preventDefault()}>
            guide de contribution
          </InlineLink>{" "}
          avant de proposer un nouveau composant.
        </p>
      );
    },
    code: (v) => {
      const external = bb(v, "external");
      return `<p>\n  Consulte notre <InlineLink href="/guide"${external ? " external label=\"guide de contribution\"" : ""}>guide de contribution</InlineLink> avant de proposer un nouveau composant.\n</p>`;
    },
  },
  {
    slug: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    description: "Fil d'ariane pour la hiérarchie de navigation.",
    controls: [],
    render: () => (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="#">Projets</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="#">Le Studio</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbPage>Sprint 12</BreadcrumbPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    ),
    code: () => `<Breadcrumb>\n  <BreadcrumbList>\n    <BreadcrumbItem><BreadcrumbLink href="/projets">Projets</BreadcrumbLink></BreadcrumbItem>\n    <BreadcrumbSeparator />\n    <BreadcrumbItem><BreadcrumbPage>Sprint 12</BreadcrumbPage></BreadcrumbItem>\n  </BreadcrumbList>\n</Breadcrumb>`,
    documentation: () => <BreadcrumbDocumentation />,
  },
  {
    slug: "pagination",
    name: "Pagination",
    category: "Navigation",
    description: "Navigue entre plusieurs pages de résultats.",
    controls: [],
    render: () => (
      <Pagination>
        <PaginationContent>
          <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
          <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
          <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
          <PaginationItem><PaginationEllipsis /></PaginationItem>
          <PaginationItem><PaginationNext href="#" /></PaginationItem>
        </PaginationContent>
      </Pagination>
    ),
    code: () => `<Pagination>\n  <PaginationContent>\n    <PaginationItem><PaginationPrevious href="#" /></PaginationItem>\n    <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>\n    <PaginationItem><PaginationNext href="#" /></PaginationItem>\n  </PaginationContent>\n</Pagination>`,
  },
  {
    slug: "navigation-menu",
    name: "Navigation Menu",
    category: "Navigation",
    description: "Menu de navigation principal avec sous-menus.",
    controls: [],
    render: () => (
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projets</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="#" className="block w-40 p-2 text-sm">Le Studio</NavigationMenuLink>
              <NavigationMenuLink href="#" className="block w-40 p-2 text-sm">Archives</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    ),
    code: () => `<NavigationMenu>\n  <NavigationMenuList>\n    <NavigationMenuItem>\n      <NavigationMenuTrigger>Projets</NavigationMenuTrigger>\n      <NavigationMenuContent>\n        <NavigationMenuLink href="#">Le Studio</NavigationMenuLink>\n      </NavigationMenuContent>\n    </NavigationMenuItem>\n  </NavigationMenuList>\n</NavigationMenu>`,
  },
  {
    slug: "sidebar",
    name: "Sidebar",
    category: "Navigation",
    description: "Barre latérale de navigation complète et composable : repli/dépli via le trigger, menus déroulants, en-tête produit et pied avec l'utilisateur connecté.",
    controls: [],
    render: () => (
      <SidebarProvider className="relative border-border !min-h-0 h-[36rem] w-full max-w-md overflow-hidden rounded-md border">
        <Sidebar collapsible="icon" className="!absolute !inset-y-0 !h-full">
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-1.5">
              <div className="bg-primary text-primary-foreground flex size-8 shrink-0 items-center justify-center rounded-md">
                <LayoutGrid className="size-4" />
              </div>
              <div className="grid flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate text-sm font-semibold">Le Studio</span>
                <span className="text-muted-foreground truncate text-xs">Design system Kanban</span>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Vues</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton isActive tooltip="Kanban">
                          <Home /> <span>Kanban</span>
                          <ChevronDown className="ml-auto transition-transform group-data-[state=closed]/collapsible:-rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="#" isActive>
                              Vue tableau
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="#">Vue liste</SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton href="#">Archivées</SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Sprints">
                      <Terminal /> <span>Sprints</span>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction showOnHover>
                          <MoreHorizontal />
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>
                          <Pencil /> Renommer
                        </DropdownMenuItem>
                        <DropdownMenuItem variant="destructive">
                          <Trash2 /> Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Calendrier">
                      <CalendarDays /> <span>Calendrier</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarSeparator />
            <SidebarGroup>
              <SidebarGroupLabel>Gestion</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Projets">
                      <FolderKanban /> <span>Projets</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton tooltip="Équipe">
                      <Users /> <span>Équipe</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuButton size="lg">
                      <Avatar className="size-8 rounded-md">
                        <AvatarFallback className="rounded-md">QF</AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
                        <span className="truncate text-sm font-medium">Quentin Feret</span>
                        <span className="text-muted-foreground truncate text-xs">
                          quentin.feret@lestudio.fr
                        </span>
                      </div>
                      <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                    </SidebarMenuButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="start" className="w-56">
                    <DropdownMenuLabel className="font-normal">
                      <div className="grid text-left leading-tight">
                        <span className="text-sm font-medium">Quentin Feret</span>
                        <span className="text-muted-foreground text-xs">
                          quentin.feret@lestudio.fr
                        </span>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <UserCircle /> Profil
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings /> Paramètres
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem variant="destructive">
                      <LogOut /> Se déconnecter
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        <SidebarInset>
          <div className="flex h-12 shrink-0 items-center gap-2 border-b px-3">
            <SidebarTrigger />
            <span className="text-sm font-medium">Kanban</span>
          </div>
          <div className="text-muted-foreground flex flex-1 items-center justify-center p-4 text-sm">
            Contenu de la page
          </div>
        </SidebarInset>
      </SidebarProvider>
    ),
    code: () => `<SidebarProvider>\n  <Sidebar collapsible="icon">\n    <SidebarHeader>\n      <div className="flex items-center gap-2 px-2 py-1.5">\n        <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">\n          <LayoutGrid className="size-4" />\n        </div>\n        <div className="grid flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">\n          <span className="text-sm font-semibold">Le Studio</span>\n          <span className="text-muted-foreground text-xs">Design system Kanban</span>\n        </div>\n      </div>\n    </SidebarHeader>\n    <SidebarContent>\n      <SidebarGroup>\n        <SidebarGroupLabel>Vues</SidebarGroupLabel>\n        <SidebarGroupContent>\n          <SidebarMenu>\n            <Collapsible defaultOpen className="group/collapsible">\n              <SidebarMenuItem>\n                <CollapsibleTrigger asChild>\n                  <SidebarMenuButton isActive tooltip="Kanban">\n                    <Home /> Kanban\n                    <ChevronDown className="ml-auto transition-transform group-data-[state=closed]/collapsible:-rotate-90" />\n                  </SidebarMenuButton>\n                </CollapsibleTrigger>\n                <CollapsibleContent>\n                  <SidebarMenuSub>\n                    <SidebarMenuSubItem>\n                      <SidebarMenuSubButton href="#" isActive>Vue tableau</SidebarMenuSubButton>\n                    </SidebarMenuSubItem>\n                    <SidebarMenuSubItem>\n                      <SidebarMenuSubButton href="#">Vue liste</SidebarMenuSubButton>\n                    </SidebarMenuSubItem>\n                    <SidebarMenuSubItem>\n                      <SidebarMenuSubButton href="#">Archivées</SidebarMenuSubButton>\n                    </SidebarMenuSubItem>\n                  </SidebarMenuSub>\n                </CollapsibleContent>\n              </SidebarMenuItem>\n            </Collapsible>\n            <SidebarMenuItem>\n              <SidebarMenuButton tooltip="Sprints"><Terminal /> Sprints</SidebarMenuButton>\n              <DropdownMenu>\n                <DropdownMenuTrigger asChild>\n                  <SidebarMenuAction showOnHover><MoreHorizontal /></SidebarMenuAction>\n                </DropdownMenuTrigger>\n                <DropdownMenuContent side="right" align="start">\n                  <DropdownMenuItem><Pencil /> Renommer</DropdownMenuItem>\n                  <DropdownMenuItem variant="destructive"><Trash2 /> Supprimer</DropdownMenuItem>\n                </DropdownMenuContent>\n              </DropdownMenu>\n            </SidebarMenuItem>\n            <SidebarMenuItem>\n              <SidebarMenuButton tooltip="Calendrier"><CalendarDays /> Calendrier</SidebarMenuButton>\n            </SidebarMenuItem>\n          </SidebarMenu>\n        </SidebarGroupContent>\n      </SidebarGroup>\n      <SidebarSeparator />\n      <SidebarGroup>\n        <SidebarGroupLabel>Gestion</SidebarGroupLabel>\n        <SidebarGroupContent>\n          <SidebarMenu>\n            <SidebarMenuItem>\n              <SidebarMenuButton tooltip="Projets"><FolderKanban /> Projets</SidebarMenuButton>\n            </SidebarMenuItem>\n            <SidebarMenuItem>\n              <SidebarMenuButton tooltip="Équipe"><Users /> Équipe</SidebarMenuButton>\n            </SidebarMenuItem>\n          </SidebarMenu>\n        </SidebarGroupContent>\n      </SidebarGroup>\n    </SidebarContent>\n    <SidebarFooter>\n      <SidebarMenu>\n        <SidebarMenuItem>\n          <DropdownMenu>\n            <DropdownMenuTrigger asChild>\n              <SidebarMenuButton size="lg">\n                <Avatar className="size-8 rounded-md"><AvatarFallback>QF</AvatarFallback></Avatar>\n                <div className="grid flex-1 text-left leading-tight">\n                  <span className="text-sm font-medium">Quentin Feret</span>\n                  <span className="text-muted-foreground text-xs">quentin.feret@lestudio.fr</span>\n                </div>\n                <ChevronsUpDown className="ml-auto size-4" />\n              </SidebarMenuButton>\n            </DropdownMenuTrigger>\n            <DropdownMenuContent side="top" align="start">\n              <DropdownMenuItem><UserCircle /> Profil</DropdownMenuItem>\n              <DropdownMenuItem><Settings /> Paramètres</DropdownMenuItem>\n              <DropdownMenuSeparator />\n              <DropdownMenuItem variant="destructive"><LogOut /> Se déconnecter</DropdownMenuItem>\n            </DropdownMenuContent>\n          </DropdownMenu>\n        </SidebarMenuItem>\n      </SidebarMenu>\n    </SidebarFooter>\n  </Sidebar>\n  <SidebarInset>\n    <div className="flex h-12 items-center gap-2 border-b px-3">\n      <SidebarTrigger />\n      <span className="text-sm font-medium">Kanban</span>\n    </div>\n  </SidebarInset>\n</SidebarProvider>`,
  },
  {
    slug: "menubar",
    name: "Menubar",
    category: "Navigation",
    description: "Barre de menus façon application desktop.",
    controls: [],
    render: () => (
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Fichier</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Nouveau <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Exporter</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    ),
    code: () => `<Menubar>\n  <MenubarMenu>\n    <MenubarTrigger>Fichier</MenubarTrigger>\n    <MenubarContent>\n      <MenubarItem>Nouveau <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>\n    </MenubarContent>\n  </MenubarMenu>\n</Menubar>`,
  },

  // ---------- Overlays & Popups ----------
  {
    slug: "dialog",
    name: "Dialog",
    category: "Overlays & Popups",
    description: "Boîte de dialogue modale.",
    controls: [{ key: "title", label: "titre", type: "text", default: "Modifier la tâche" }],
    render: (v) => (
      <Dialog>
        <DialogTrigger asChild><Button variant="outline">Ouvrir</Button></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{bt(v, "title")}</DialogTitle>
            <DialogDescription>Modifie les informations puis enregistre.</DialogDescription>
          </DialogHeader>
          <DialogFooter><Button type="submit">Enregistrer</Button></DialogFooter>
        </DialogContent>
      </Dialog>
    ),
    code: (v) => `<Dialog>\n  <DialogTrigger asChild><Button variant="outline">Ouvrir</Button></DialogTrigger>\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>${bt(v, "title")}</DialogTitle>\n      <DialogDescription>...</DialogDescription>\n    </DialogHeader>\n    <DialogFooter><Button type="submit">Enregistrer</Button></DialogFooter>\n  </DialogContent>\n</Dialog>`,
  },
  {
    slug: "alert-dialog",
    name: "Alert Dialog",
    category: "Overlays & Popups",
    description: "Dialogue de confirmation bloquant pour actions sensibles.",
    controls: [{ key: "title", label: "titre", type: "text", default: "Supprimer la tâche ?" }],
    render: (v) => (
      <AlertDialog>
        <AlertDialogTrigger asChild><Button variant="destructive">Supprimer</Button></AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{bt(v, "title")}</AlertDialogTitle>
            <AlertDialogDescription>Cette action est irréversible.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction>Confirmer</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    ),
    code: (v) => `<AlertDialog>\n  <AlertDialogTrigger asChild><Button variant="destructive">Supprimer</Button></AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>${bt(v, "title")}</AlertDialogTitle>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Annuler</AlertDialogCancel>\n      <AlertDialogAction>Confirmer</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>`,
  },
  {
    slug: "sheet",
    name: "Sheet",
    category: "Overlays & Popups",
    description: "Panneau latéral glissant.",
    controls: [{ key: "side", label: "side", type: "select", options: ["right", "left", "top", "bottom"], default: "right" }],
    render: (v) => (
      <Sheet>
        <SheetTrigger asChild><Button variant="outline">Ouvrir</Button></SheetTrigger>
        <SheetContent side={bv(v, "side") as any}>
          <SheetHeader>
            <SheetTitle>Détail de la tâche</SheetTitle>
            <SheetDescription>Informations complètes et sous-tâches.</SheetDescription>
          </SheetHeader>
          <SheetFooter><Button>Fermer</Button></SheetFooter>
        </SheetContent>
      </Sheet>
    ),
    code: (v) => `<Sheet>\n  <SheetTrigger asChild><Button variant="outline">Ouvrir</Button></SheetTrigger>\n  <SheetContent side="${bv(v, "side")}">\n    <SheetHeader>\n      <SheetTitle>Détail de la tâche</SheetTitle>\n    </SheetHeader>\n  </SheetContent>\n</Sheet>`,
  },
  {
    slug: "side-panel",
    name: "Side Panel",
    category: "Overlays & Popups",
    description: "Panneau latéral collé à droite de l'écran, avec en-tête (titre, description, contenu personnalisable, bouton de fermeture), pied avec actions primaire/secondaires, overlay obligatoire et fermeture au clic extérieur. Composant maison (non fourni par shadcn/ui), construit sur Sheet.",
    controls: [
      { key: "title", label: "titre", type: "text", default: "Modifier le projet" },
      { key: "description", label: "description", type: "text", default: "Mets à jour les informations puis enregistre." },
      { key: "primaryLabel", label: "action primaire", type: "text", default: "Enregistrer" },
      { key: "secondaryLabel", label: "action secondaire", type: "text", default: "Annuler" },
    ],
    render: (v) => (
      <SidePanelDemo
        title={bt(v, "title")}
        description={bt(v, "description")}
        primaryLabel={bt(v, "primaryLabel")}
        secondaryLabel={bt(v, "secondaryLabel")}
      />
    ),
    code: (v) => `const [open, setOpen] = useState(false);\n\n<Button variant="outline" onClick={() => setOpen(true)}>Ouvrir le panneau</Button>\n<SidePanel\n  open={open}\n  onOpenChange={setOpen}\n  title="${bt(v, "title")}"\n  description="${bt(v, "description")}"\n  actions={[\n    { label: "${bt(v, "secondaryLabel")}", variant: "secondary", onClick: () => setOpen(false) },\n    { label: "${bt(v, "primaryLabel")}", variant: "primary", onClick: () => setOpen(false) },\n  ]}\n>\n  {/* contenu personnalisable */}\n</SidePanel>`,
  },
  {
    slug: "drawer",
    name: "Drawer",
    category: "Overlays & Popups",
    description: "Tiroir glissant (vaul), adapté au mobile.",
    controls: [],
    render: () => (
      <Drawer>
        <DrawerTrigger asChild><Button variant="outline">Ouvrir</Button></DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Filtrer les tâches</DrawerTitle>
            <DrawerDescription>Choisis un designer et un projet.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter><DrawerClose asChild><Button variant="outline">Fermer</Button></DrawerClose></DrawerFooter>
        </DrawerContent>
      </Drawer>
    ),
    code: () => `<Drawer>\n  <DrawerTrigger asChild><Button variant="outline">Ouvrir</Button></DrawerTrigger>\n  <DrawerContent>\n    <DrawerHeader><DrawerTitle>Filtrer les tâches</DrawerTitle></DrawerHeader>\n  </DrawerContent>\n</Drawer>`,
  },
  {
    slug: "popover",
    name: "Popover",
    category: "Overlays & Popups",
    description: "Contenu flottant déclenché par un clic.",
    controls: [],
    render: () => (
      <Popover>
        <PopoverTrigger asChild><Button variant="outline">Ouvrir</Button></PopoverTrigger>
        <PopoverContent className="w-64 text-sm">Contenu du popover, positionné automatiquement.</PopoverContent>
      </Popover>
    ),
    code: () => `<Popover>\n  <PopoverTrigger asChild><Button variant="outline">Ouvrir</Button></PopoverTrigger>\n  <PopoverContent>Contenu...</PopoverContent>\n</Popover>`,
  },
  {
    slug: "hover-card",
    name: "Hover Card",
    category: "Overlays & Popups",
    description: "Prévisualisation au survol.",
    controls: [],
    render: () => (
      <HoverCard>
        <HoverCardTrigger asChild><Button variant="link">@quentinferet</Button></HoverCardTrigger>
        <HoverCardContent className="w-64 text-sm">Quentin Feret — Product Designer, Le Studio.</HoverCardContent>
      </HoverCard>
    ),
    code: () => `<HoverCard>\n  <HoverCardTrigger asChild><Button variant="link">@quentinferet</Button></HoverCardTrigger>\n  <HoverCardContent>...</HoverCardContent>\n</HoverCard>`,
  },
  {
    slug: "tooltip",
    name: "Tooltip",
    category: "Overlays & Popups",
    description: "Info-bulle au survol/focus.",
    controls: [{ key: "text", label: "texte", type: "text", default: "Ajouter une tâche" }],
    render: (v) => (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild><Button variant="outline" size="icon"><Plus /></Button></TooltipTrigger>
          <TooltipContent>{bt(v, "text")}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
    code: (v) => `<Tooltip>\n  <TooltipTrigger asChild><Button variant="outline" size="icon"><Plus /></Button></TooltipTrigger>\n  <TooltipContent>${bt(v, "text")}</TooltipContent>\n</Tooltip>`,
  },
  {
    slug: "dropdown-menu",
    name: "Dropdown Menu",
    category: "Overlays & Popups",
    description: "Menu contextuel déclenché par un clic.",
    controls: [],
    render: () => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild><Button variant="outline">Actions</Button></DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Tâche</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem><Settings /> Modifier</DropdownMenuItem>
          <DropdownMenuItem variant="destructive">Supprimer</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    code: () => `<DropdownMenu>\n  <DropdownMenuTrigger asChild><Button variant="outline">Actions</Button></DropdownMenuTrigger>\n  <DropdownMenuContent>\n    <DropdownMenuItem>Modifier</DropdownMenuItem>\n    <DropdownMenuItem variant="destructive">Supprimer</DropdownMenuItem>\n  </DropdownMenuContent>\n</DropdownMenu>`,
  },
  {
    slug: "context-menu",
    name: "Context Menu",
    category: "Overlays & Popups",
    description: "Menu déclenché par un clic droit.",
    controls: [],
    render: () => (
      <ContextMenu>
        <ContextMenuTrigger className="border-border flex h-24 w-56 items-center justify-center rounded-md border border-dashed text-sm">
          Clic droit ici
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Modifier</ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Supprimer</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    ),
    code: () => `<ContextMenu>\n  <ContextMenuTrigger>Clic droit ici</ContextMenuTrigger>\n  <ContextMenuContent>\n    <ContextMenuItem>Modifier</ContextMenuItem>\n  </ContextMenuContent>\n</ContextMenu>`,
  },
  {
    slug: "command",
    name: "Command",
    category: "Overlays & Popups",
    description: "Palette de commandes avec recherche (cmdk).",
    controls: [],
    render: () => (
      <Command className="border-border w-72 rounded-md border">
        <CommandInput placeholder="Rechercher une commande..." />
        <CommandList>
          <CommandEmpty>Aucun résultat.</CommandEmpty>
          <CommandGroup heading="Vues">
            <CommandItem><Home /> Kanban</CommandItem>
            <CommandItem><Terminal /> Sprints</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Compte">
            <CommandItem><User /> Profil</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    ),
    code: () => `<Command>\n  <CommandInput placeholder="Rechercher..." />\n  <CommandList>\n    <CommandEmpty>Aucun résultat.</CommandEmpty>\n    <CommandGroup heading="Vues">\n      <CommandItem>Kanban</CommandItem>\n    </CommandGroup>\n  </CommandList>\n</Command>`,
  },
  {
    slug: "collapsible",
    name: "Collapsible",
    category: "Overlays & Popups",
    description: "Section repliable/dépliable.",
    controls: [],
    render: () => (
      <Collapsible className="w-64">
        <CollapsibleTrigger asChild><Button variant="outline" size="sm">Sous-tâches (3)</Button></CollapsibleTrigger>
        <CollapsibleContent className="mt-2 flex flex-col gap-1 text-sm">
          <p>Wireframes</p>
          <p>Maquette finale</p>
          <p>Tests utilisateurs</p>
        </CollapsibleContent>
      </Collapsible>
    ),
    code: () => `<Collapsible>\n  <CollapsibleTrigger asChild><Button variant="outline">Sous-tâches</Button></CollapsibleTrigger>\n  <CollapsibleContent>...</CollapsibleContent>\n</Collapsible>`,
  },
  {
    slug: "accordion",
    name: "Accordion",
    category: "Overlays & Popups",
    description: "Liste de sections repliables, une ou plusieurs ouvertes.",
    controls: [{ key: "type", label: "type", type: "select", options: ["single", "multiple"], default: "single" }],
    render: (v) => (
      <Accordion type={bv(v, "type") as any} collapsible={bv(v, "type") === "single" ? true : undefined} className="w-72">
        <AccordionItem value="item-1">
          <AccordionTrigger>Qu'est-ce qu'un sprint ?</AccordionTrigger>
          <AccordionContent>Une période fixe de travail, généralement 2 semaines.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Comment assigner une tâche ?</AccordionTrigger>
          <AccordionContent>Ouvre la tâche puis choisis un designer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: (v) => `<Accordion type="${bv(v, "type")}"${bv(v, "type") === "single" ? " collapsible" : ""}>\n  <AccordionItem value="item-1">\n    <AccordionTrigger>Qu'est-ce qu'un sprint ?</AccordionTrigger>\n    <AccordionContent>...</AccordionContent>\n  </AccordionItem>\n</Accordion>`,
  },

  // ---------- Feedback ----------
  {
    slug: "alert",
    name: "Alert",
    category: "Feedback",
    description: "Message contextuel court (info, erreur, etc.), avec un à deux boutons d'actions optionnels.",
    controls: [
      { key: "variant", label: "variant", type: "select", options: ["default", "destructive"], default: "default" },
      { key: "title", label: "titre", type: "text", default: "Attention" },
      { key: "description", label: "description", type: "text", default: "Vérifie les dates avant de publier le sprint." },
      { key: "showActions", label: "afficher les actions", type: "boolean", default: true },
      { key: "primaryLabel", label: "action primaire", type: "text", default: "Publier" },
      { key: "secondaryLabel", label: "action secondaire (optionnelle)", type: "text", default: "Annuler" },
    ],
    render: (v) => {
      const showActions = bb(v, "showActions");
      const secondaryLabel = bt(v, "secondaryLabel");
      return (
        <Alert variant={bv(v, "variant") as any} className="w-80">
          <AlertCircle className="size-4" />
          <AlertTitle>{bt(v, "title")}</AlertTitle>
          <AlertDescription>{bt(v, "description")}</AlertDescription>
          {showActions && (
            <AlertActions>
              <Button size="sm" variant={bv(v, "variant") === "destructive" ? "destructive" : "default"}>
                {bt(v, "primaryLabel")}
              </Button>
              {secondaryLabel && (
                <Button size="sm" variant="outline">
                  {secondaryLabel}
                </Button>
              )}
            </AlertActions>
          )}
        </Alert>
      );
    },
    code: (v) => {
      const showActions = bb(v, "showActions");
      const secondaryLabel = bt(v, "secondaryLabel");
      const actionsCode = showActions
        ? `\n  <AlertActions>\n    <Button size="sm">${bt(v, "primaryLabel")}</Button>${secondaryLabel ? `\n    <Button size="sm" variant="outline">${secondaryLabel}</Button>` : ""}\n  </AlertActions>`
        : "";
      return `<Alert variant="${bv(v, "variant")}">\n  <AlertCircle className="size-4" />\n  <AlertTitle>${bt(v, "title")}</AlertTitle>\n  <AlertDescription>${bt(v, "description")}</AlertDescription>${actionsCode}\n</Alert>`;
    },
  },
  {
    slug: "sonner",
    name: "Sonner (Toast)",
    category: "Feedback",
    description: "Notifications toast empilées.",
    controls: [
      { key: "type", label: "type", type: "select", options: ["default", "success", "error", "info"], default: "success" },
      { key: "message", label: "message", type: "text", default: "Tâche enregistrée" },
    ],
    render: (v) => (
      <>
        <Button
          variant="outline"
          onClick={() => {
            const type = bv(v, "type");
            const msg = bt(v, "message");
            if (type === "success") toast.success(msg);
            else if (type === "error") toast.error(msg);
            else if (type === "info") toast.info(msg);
            else toast(msg);
          }}
        >
          Afficher le toast
        </Button>
        <Toaster />
      </>
    ),
    code: (v) => `toast${bv(v, "type") !== "default" ? `.${bv(v, "type")}` : ""}("${bt(v, "message")}")`,
  },
];

export const categories = Array.from(new Set(demos.map((d) => d.category)));
