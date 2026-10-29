import HarvardPreview from "./components/HarvardPreview";
import ModernPreview from "./components/ModernPreview";

export default function LayoutSection({ selectedLayout }) {
  const layouts = [
    {
      id: "harvard",
      name: "Harvard",
      description: "Classic, clean, and professional",
    },
    {
      id: "modern",
      name: "Modern Professional",
      description: "Modern typography and blue accents",
    },
  ];

  return (
    <section className="my-4">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-800">
          Choose a Layout
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Select a design that best represents your professional profile.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {layouts.map((layout) => {
          const isSelected = selectedLayout === layout.id;
          return (
            <article
              key={layout.id}
              className={`rounded-xl border p-4 transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "border-blue-500 bg-blue-50/50 ring-2 ring-blue-500/20"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-md"
              }`}
            >
              <div className="mb-4 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-lg bg-slate-100 p-5">
                <div className="h-full w-3/4 overflow-hidden rounded-sm bg-white shadow-sm">
                  {layout.id === "harvard" ? (
                    <HarvardPreview />
                  ) : (
                    /* Modern Preview */
                    <ModernPreview />
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-base font-semibold text-slate-800 transition-colors group-hover:text-blue-700">
                  {layout.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {layout.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
