import SectionTitle from "../shared/SectionTitle"

export default function EducationInfoCv({educationData}) {
  return (
    <section className="mt-7">
      <SectionTitle title="Education" />

      <div className="space-y-5">
        {educationData.map((education) => (
          <div key={education.id}>
            <div className="flex justify-between gap-4">
              <div>
                <h3 className="font-bold">{education.institution}</h3>

                <p className="italic">{education.fieldOfStudy}</p>
              </div>

              <div className="text-right text-sm">
                <p>{education.location}</p>
                <p>
                  {education.startDate} - {education.endDate}
                </p>
              </div>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              {education.additionalInfo.map((item) => (
                <li key={item.id}>{item.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
