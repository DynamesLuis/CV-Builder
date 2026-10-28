export default function ModernEducation({ educationData }) {
  if (!educationData?.length) return null;

  return (
    <section className="mb-10">
      <h2 className="mb-6 flex items-center gap-3 text-lg font-bold tracking-wide text-slate-900">
        <span className="h-6 w-1 rounded-full bg-sky-500" />
        Education
      </h2>

      <div className="space-y-6">
        {educationData.map((education) => {
          const {
            id,
            institution,
            location,
            startDate,
            endDate,
            fieldOfStudy,
            currentlyStudying,
            additionalInfo,
          } = education;

          return (
            <article
              key={id}
              className="border-b border-slate-100 pb-5 last:border-b-0 last:pb-0"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <h3 className="font-semibold text-slate-800">
                    {institution}
                  </h3>

                  {fieldOfStudy && (
                    <p className="mt-1 text-sm text-sky-700">{fieldOfStudy}</p>
                  )}

                  {location && (
                    <p className="mt-1 text-sm text-slate-500">{location}</p>
                  )}
                </div>

                {startDate && (
                  <p className="shrink-0 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {startDate} - {currentlyStudying ? "Present" : endDate}
                  </p>
                )}
              </div>

              {additionalInfo?.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm leading-6 text-slate-600">
                  {additionalInfo.map((info, index) => {
                    const description =
                      typeof info === "string" ? info : info.description;

                    return (
                      <li key={`${id}-info-${index}`} className="flex gap-2">
                        <span className="text-sky-500">•</span>
                        <span>{description}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
