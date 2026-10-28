export default function ModernExperience({ experienceData }) {
  if (!experienceData?.length) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-6 flex items-center gap-3 text-lg font-bold tracking-wide text-slate-900">
        <span className="h-6 w-1 rounded-full bg-sky-500" />
        Professional Experience
      </h2>

      <div className="ml-1 space-y-7 border-l-2 border-slate-200 pl-5">
        {experienceData.map((experience) => {
          const {
            id,
            company,
            role,
            location,
            startDate,
            endDate,
            currentlyWorking,
            additionalInfo,
          } = experience;

          return (
            <article key={id} className="relative">
              <span className="absolute -left-[27px] top-1.5 size-3 rounded-full border-2 border-sky-500 bg-white" />

              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h3 className="font-semibold text-slate-800">{role}</h3>

                  <p className="text-sm font-medium text-sky-700">{company}</p>

                  {location && (
                    <p className="mt-1 text-sm text-slate-500">{location}</p>
                  )}
                </div>

                {startDate && (
                  <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {startDate} - {currentlyWorking ? "Present" : endDate}
                  </p>
                )}
              </div>

              {additionalInfo?.length > 0 && (
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-slate-600">
                  {additionalInfo.map((info, index) => (
                    <li key={`${id}-info-${index}`} className="flex gap-2">
                      <span className="text-sky-500">•</span>
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
