import { Church, ClipboardClock, ContactRound, House, type AstroComponent } from "@lucide/astro";

export interface NavLink {
  name: string;
  path: string;
  icon: AstroComponent;
};

export const navLinks: NavLink[] = [
  {
    name: "Inicio",
    path: "/",
    icon: House
  },
  {
    name: "Servicios",
    path: "/servicios",
    icon: Church
  },
  {
    name: "Horarios",
    path: "/horarios",
    icon: ClipboardClock
  },
  {
    name: "Contacto",
    path: "/contacto",
    icon: ContactRound
  },
];