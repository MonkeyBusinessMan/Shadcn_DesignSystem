import type { ReactNode } from "react";

export interface FoundationPage {
  slug: string;
  name: string;
  description: string;
  render: () => ReactNode;
}
