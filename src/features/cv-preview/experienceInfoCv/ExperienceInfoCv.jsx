import SectionTitle from "../shared/SectionTitle"

export default function ExperienceInfoCv({experienceData}) {
  return (
    <section className="mt-7">
      <SectionTitle title="Experience" /> 

      <div className="space-y-5">
        {experienceData.map((experience) => (
          <div key={experience.id}>
            <div className="flex justify-between gap-4">
              <div>
                <h3 className="font-bold">{experience.company}</h3>

                <p className="italic">{experience.role}</p>
              </div>

              <div className="text-right text-sm">
                <p>{experience.location}</p>
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {experience.additionalInfo.map((item) => (
                <li key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
