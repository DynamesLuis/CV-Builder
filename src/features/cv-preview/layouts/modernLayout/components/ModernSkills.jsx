export default function ModernSkills({ skillsData }) {
  if (!skillsData?.length) return null;

  return (
    <section className="mb-2">
      <h2 className="mb-5 flex items-center gap-3 text-lg font-bold tracking-wide text-slate-900">
        <span className="h-6 w-1 rounded-full bg-sky-500" />
        Skills
      </h2>

      <ul className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <li
            key={`${skill}-${index}`}
            className="rounded-md bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-inset ring-slate-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
