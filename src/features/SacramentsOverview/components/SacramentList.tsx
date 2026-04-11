import SacramentCard from "./sacrament-card";
import { sacraments } from "../data/sacraments";

export default function SacramentList() {
  return (
    <div className="grid gap-16">
      {sacraments.map((sacrament) => (
        <SacramentCard {...sacrament} key={sacrament.id} />
      ))}
    </div>
  );
}