"use client"

import * as React from "react"
import { FileIcon, Trash2Icon, UploadCloudIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldTitle,
} from "@/components/ui/field"

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} o`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} Ko`
  return `${(bytes / (1024 * 1024)).toFixed(1)} Mo`
}

interface FileUploadProps {
  label?: string
  /** Extensions/types acceptés, ex: ".pdf,.png,.jpg" (transmis tel quel à l'attribut HTML accept). */
  accept?: string
  /** Libellés des formats affichés dans la description, ex: "PDF, PNG, JPG". */
  acceptLabel?: string
  maxSizeMb?: number
  multiple?: boolean
  disabled?: boolean
  value: File[]
  onValueChange: (files: File[]) => void
  className?: string
}

function FileUpload({
  label = "Importer des fichiers",
  accept,
  acceptLabel,
  maxSizeMb = 10,
  multiple = true,
  disabled = false,
  value,
  onValueChange,
  className,
}: FileUploadProps) {
  const inputId = React.useId()
  const [dragOver, setDragOver] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const addFiles = (incoming: FileList | File[]) => {
    const files = Array.from(incoming)
    const tooLarge = files.filter((file) => file.size > maxSizeMb * 1024 * 1024)
    const accepted = files.filter((file) => file.size <= maxSizeMb * 1024 * 1024)

    setError(
      tooLarge.length > 0
        ? `${tooLarge.length} fichier${tooLarge.length > 1 ? "s dépassent" : " dépasse"} la taille maximale de ${maxSizeMb} Mo.`
        : null
    )

    if (accepted.length === 0) return
    onValueChange(multiple ? [...value, ...accepted] : accepted.slice(0, 1))
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      addFiles(event.target.files)
    }
    event.target.value = ""
  }

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    setDragOver(false)
    if (disabled) return
    if (event.dataTransfer.files.length > 0) addFiles(event.dataTransfer.files)
  }

  const removeFile = (index: number) => {
    onValueChange(value.filter((_, i) => i !== index))
  }

  return (
    <Field data-slot="file-upload" className={className}>
      <FieldContent>
        <FieldTitle>
          {label}
          {value.length > 0 && (
            <span className="text-muted-foreground font-normal">
              ({value.length} fichier{value.length > 1 ? "s" : ""} importé
              {value.length > 1 ? "s" : ""})
            </span>
          )}
        </FieldTitle>

        <div
          data-slot="file-upload-dropzone"
          data-drag-over={dragOver}
          onDragOver={(event) => {
            event.preventDefault()
            if (!disabled) setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={cn(
            "border-input flex flex-col items-center justify-center gap-2 rounded-md border border-dashed px-6 py-8 text-center transition-colors",
            "data-[drag-over=true]:border-ring data-[drag-over=true]:bg-accent/50",
            disabled && "pointer-events-none opacity-50"
          )}
        >
          <UploadCloudIcon className="text-muted-foreground size-8" />
          <div className="flex flex-col items-center gap-1">
            <label htmlFor={inputId} className="text-sm">
              <span className="text-primary font-medium underline underline-offset-4">
                Cliquez pour importer
              </span>{" "}
              <span className="text-muted-foreground">ou glissez-déposez</span>
            </label>
            <input
              id={inputId}
              type="file"
              accept={accept}
              multiple={multiple}
              disabled={disabled}
              onChange={handleInputChange}
              className="sr-only"
            />
          </div>
        </div>

        <FieldDescription>
          Formats acceptés : {acceptLabel ?? "tous"}. Poids maximum par fichier :{" "}
          {maxSizeMb} Mo.
        </FieldDescription>

        <FieldError errors={error ? [{ message: error }] : undefined} />

        {value.length > 0 && (
          <ul data-slot="file-upload-list" className="flex flex-col gap-1.5">
            {value.map((file, index) => (
              <li
                key={`${file.name}-${index}`}
                className="border-border bg-card flex items-center gap-2 rounded-md border px-3 py-2 text-sm"
              >
                <FileIcon className="text-muted-foreground size-4 shrink-0" />
                <span className="flex-1 truncate">{file.name}</span>
                <span className="text-muted-foreground shrink-0 text-xs">
                  {formatBytes(file.size)}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-xs"
                  disabled={disabled}
                  onClick={() => removeFile(index)}
                  aria-label={`Retirer ${file.name}`}
                >
                  <Trash2Icon />
                </Button>
              </li>
            ))}
          </ul>
        )}
      </FieldContent>
    </Field>
  )
}

export { FileUpload }
export type { FileUploadProps }
