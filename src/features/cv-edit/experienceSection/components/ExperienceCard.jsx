export default function ExperienceCard({ experienceInfo }) {
  const dates = `${experienceInfo.startDate} - ${experienceInfo.currentlyWorking ? "Present" : experienceInfo.endDate}`;
  return (
    <article className="flex items-start justify-between gap-4 p-4 rounded-lg bg-slate-50 inset-ring-2 inset-ring-slate-100">
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-slate-800 break-words">
          {experienceInfo.role}
        </h3>

        <p className="text-sm font-normal text-slate-600 break-words">
          {experienceInfo.company}
        </p>

        <p className="text-sm font-light text-slate-500 mt-1">{dates}</p>
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label={`Edit ${experienceInfo.role} at ${experienceInfo.company}`}
          className="text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out"
        >
          Edit
        </button>

        <button
          type="button"
          aria-label={`Delete ${experienceInfo.role} at ${experienceInfo.company}`}
          className="text-sm bg-red-50 hover:bg-red-100 cursor-pointer px-3 py-1 rounded-lg font-bold text-red-700 transition-all duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    </article>
  );
}
