export interface Sacrament {
  title: string;
  items: { text: string; subtext?: string }[];
  extraInfo?: string[];
  footerInfo?: { label: string; value: string }[];
  price?: string;
  note?: string;
  image: string;
}
