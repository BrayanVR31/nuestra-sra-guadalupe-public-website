import type { PropsWithChildren } from "react";

export default function CatechismGrid({ children }: PropsWithChildren) {
  return (
    <div className="grid grid-rows-2 border overflow-hidden rounded-sm border-stone-300 shadow-stone-200 shadow-sm max-w-4xl mx-auto">
      {children}
    </div>
  );
}
