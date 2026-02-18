import type { Verse } from "../types/gospel.type";

export default function GospelDetails({
  verses,
  reference,
}: {
  verses: Verse[];
  reference: string;
}) {
  return (
    <article className="flex flex-col h-full max-w-2xl mx-auto bg-cream-200 rounded-lg overflow-hidden">
      {reference && (
        <header className="px-6 py-4 border-b border-stone-200 bg-cream-100/50">
          <h2 className="text-lg font-bold text-gold-800 tracking-wide text-center">
            <cite className="not-italic">{reference}</cite>
          </h2>
        </header>
      )}

      <blockquote
        className="relative flex-1 overflow-hidden"
        cite="https://www.bible.com/"
      >
        <div
          className="max-h-[60vh] overflow-y-auto px-6 py-8 scrollbar-thin scrollbar-thumb-stone-300"
          role="region"
          aria-label="Contenido del texto bíblico"
          tabIndex={0}
        >
          <div className="space-y-6 text-stone-800">
            {verses.map((verse) => (
              <section
                key={verse.nVerse}
                className="flex items-start gap-4"
                aria-label={`Versículo ${verse.nVerse}`}
              >
                <span
                  className="shrink-0 w-8 text-right text-xs font-sans font-bold text-red-700 mt-1.5 select-none"
                  aria-hidden="true"
                >
                  {verse.nVerse}
                </span>

                <p className="text-lg md:text-xl font-serif leading-relaxed antialiased">
                  {verse.content}
                </p>
              </section>
            ))}
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-cream-300 to-transparent pointer-events-none opacity-60"
          aria-hidden="true"
        ></div>
      </blockquote>

      <footer className="p-4 border-t border-cream-300 bg-cream-200 flex justify-center">
        <div
          className="w-12 h-1 bg-cream-500 rounded-full"
          aria-hidden="true"
        ></div>
      </footer>
    </article>
  );
}
