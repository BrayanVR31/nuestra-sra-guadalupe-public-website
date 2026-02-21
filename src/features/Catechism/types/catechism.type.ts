import type { JSX } from "react";

export interface Catechism {
  title: string;
  showContent: () => JSX.Element;
}

export interface CatechismListItem {
  title: string;
  content: string;
}
