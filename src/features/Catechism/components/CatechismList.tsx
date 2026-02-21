import type { CatechismListItem } from "../types/catechism.type";

interface CatechismListProps {
  items: CatechismListItem[];
}

export default function CatechismList({ items }: CatechismListProps) {
  return (
    <ul className="space-y-6 text-stone-700">
      {items.map(({ title, content }) => (
        <li key={title} className="flex items-start gap-3">
          <div className="shrink-0 mt-1.5 w-5 h-5 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#a68b5a]"></div>
          </div>
          <span className="text-base/relaxed">
            <strong className="text-stone-800">
              {title + (!content ? "" : ":")}
            </strong>{" "}
            {content}
          </span>
        </li>
      ))}
    </ul>
  );
}
