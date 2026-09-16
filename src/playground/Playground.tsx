import { useMemo, useState } from "react";
import type { ComponentDemo, ControlValues } from "./types";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RotateCcw, Copy, Check } from "lucide-react";

function defaultsFor(demo: ComponentDemo): ControlValues {
  const values: ControlValues = {};
  for (const c of demo.controls) values[c.key] = c.default;
  return values;
}

export function Playground({ demo }: { demo: ComponentDemo }) {
  const [values, setValues] = useState<ControlValues>(() => defaultsFor(demo));
  const [copied, setCopied] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const code = useMemo(() => demo.code(values), [demo, values]);

  function set(key: string, value: string | boolean | number) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  function reset() {
    setValues(defaultsFor(demo));
  }

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const demoBody = (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Aperçu</span>
            <div className="flex items-center gap-1">
              <label className="border-input relative flex size-7 cursor-pointer items-center justify-center overflow-hidden rounded-md border">
                <span
                  className="pointer-events-none absolute inset-0"
                  style={{ backgroundColor: bgColor || "var(--card)" }}
                />
                <input
                  type="color"
                  value={bgColor || "#ffffff"}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="absolute inset-0 size-full cursor-pointer opacity-0"
                  title="Couleur de fond de l'aperçu"
                />
              </label>
              <Button
                variant="ghost"
                size="icon-sm"
                onClick={() => setBgColor("")}
                title="Réinitialiser la couleur de fond"
              >
                <RotateCcw />
              </Button>
            </div>
          </div>
          <div
            className="border-border bg-card flex min-h-[280px] min-w-0 items-center justify-center overflow-x-auto rounded-lg border p-10"
            style={bgColor ? { backgroundColor: bgColor } : undefined}
          >
            <div key={JSON.stringify(values)}>{demo.render(values)}</div>
          </div>
        </div>

        <div className="border-border flex flex-col gap-4 rounded-lg border p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Props</span>
            <Button variant="ghost" size="icon-sm" onClick={reset} title="Réinitialiser">
              <RotateCcw />
            </Button>
          </div>
          {demo.controls.length === 0 && (
            <p className="text-muted-foreground text-sm">Aucune prop configurable.</p>
          )}
          {demo.controls.map((control) => (
            <div key={control.key} className="flex flex-col gap-1.5">
              <Label htmlFor={control.key}>{control.label}</Label>
              {control.type === "select" && (
                <Select
                  value={String(values[control.key])}
                  onValueChange={(v) => set(control.key, v)}
                >
                  <SelectTrigger id={control.key} className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {control.options?.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
              {control.type === "boolean" && (
                <Switch
                  id={control.key}
                  checked={Boolean(values[control.key])}
                  onCheckedChange={(v) => set(control.key, v)}
                />
              )}
              {control.type === "text" && (
                <Input
                  id={control.key}
                  value={String(values[control.key])}
                  onChange={(e) => set(control.key, e.target.value)}
                />
              )}
              {control.type === "number" && (
                <Input
                  id={control.key}
                  type="number"
                  min={control.min}
                  max={control.max}
                  value={Number(values[control.key])}
                  onChange={(e) => set(control.key, Number(e.target.value))}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {demo.states && demo.states.length > 0 && (
        <div className="border-border rounded-lg border p-4">
          <span className="text-sm font-medium">États</span>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {demo.states.map((state) => (
              <div
                key={state.name}
                className="border-border bg-card flex flex-col items-center gap-3 rounded-lg border p-4"
              >
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                  {state.name}
                </span>
                <div className="flex w-full items-center justify-center">{state.render()}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {demo.parts && demo.parts.length > 0 && (
        <div className="border-border rounded-lg border p-4">
          <span className="text-sm font-medium">Sous-composants</span>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {demo.parts.map((part) => (
              <div
                key={part.name}
                className="border-border bg-card flex flex-col items-center gap-3 rounded-lg border p-4"
              >
                <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
                  {part.name}
                </span>
                <div className="flex w-full items-center justify-center">{part.render()}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="border-border rounded-lg border">
        <div className="border-border flex items-center justify-between border-b px-4 py-2">
          <span className="text-muted-foreground text-xs font-medium uppercase tracking-wide">
            Code
          </span>
          <Button variant="ghost" size="sm" onClick={copyCode}>
            {copied ? <Check /> : <Copy />}
            {copied ? "Copié" : "Copier"}
          </Button>
        </div>
        <pre className="overflow-hidden p-4 text-sm whitespace-pre-wrap break-words">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{demo.name}</h2>
        <p className="text-muted-foreground mt-1 text-sm">{demo.description}</p>
      </div>

      {demo.documentation ? (
        <Tabs defaultValue="demo">
          <TabsList>
            <TabsTrigger value="demo">Démo</TabsTrigger>
            <TabsTrigger value="documentation">Documentation</TabsTrigger>
          </TabsList>
          <TabsContent value="demo">{demoBody}</TabsContent>
          <TabsContent value="documentation">{demo.documentation()}</TabsContent>
        </Tabs>
      ) : (
        demoBody
      )}
    </div>
  );
}
