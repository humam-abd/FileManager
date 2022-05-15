export interface FolderDetail {
  id: number;
  name: string;
  parentNodeId?: number;
}

export interface Breadcrumb {
  id: number;
  name: string;
}

export type ColorProps =
  | "inherit"
  | "action"
  | "disabled"
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";
