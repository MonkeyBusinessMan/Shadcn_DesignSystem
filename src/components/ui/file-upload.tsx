"use client"

import * as React from "react"
import { FileIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

interface FileUploadProps extends Omit<React.ComponentProps<"input">, "type"> {}

function FileUpload({ className, onChange, ...props }: FileUploadProps) {
  const [files, setFiles] = React.useState<File[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files ? Array.from(event.target.files) : [])
    onChange?.(event)
  }

  return (
    <div data-slot="file-upload" className={cn("flex flex-col gap-2", className)}>
      <Input type="file" onChange={handleChange} {...props} />
      {files.length > 0 && (
        <ul data-slot="file-upload-list" className="flex flex-col gap-1">
          {files.map((file, index) => (
            <li
              key={`${file.name}-${index}`}
              className="text-muted-foreground flex items-center gap-1.5 text-sm"
            >
              <FileIcon className="size-3.5 shrink-0" />
              <span className="truncate">{file.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export { FileUpload }
export type { FileUploadProps }
