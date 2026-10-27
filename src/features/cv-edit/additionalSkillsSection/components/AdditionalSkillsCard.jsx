export default function AdditionalSkillsCard({ skill }) {
  return (
    <article className="flex items-center justify-between gap-4 p-4 rounded-lg bg-slate-50 inset-ring-2 inset-ring-slate-100">
      <p className="min-w-0 flex-1 text-sm font-normal text-slate-700 break-words">
        {skill}
      </p>
    </article>
  );
}
