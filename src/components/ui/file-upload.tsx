import * as React from "react"

import { Input } from "@/components/ui/input"

interface FileUploadProps extends Omit<React.ComponentProps<"input">, "type"> {}

function FileUpload({ ...props }: FileUploadProps) {
  return <Input type="file" data-slot="file-upload" {...props} />
}

export { FileUpload }
export type { FileUploadProps }
