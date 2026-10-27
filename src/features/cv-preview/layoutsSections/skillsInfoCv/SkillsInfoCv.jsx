import SectionTitle from "../../shared/SectionTitle";

export default function SkillsInfoCv({ skillsData }) {
  return (
    <section className="mt-7">
      <SectionTitle title="Skills" />

      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
        {skillsData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
