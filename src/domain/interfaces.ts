export interface AssetDetail {
  id: number;
  name: string;
  parentNodeId?: number;
  isFile?: boolean;
}

export interface Breadcrumb {
  id: number;
  name: string | JSX.Element;
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
