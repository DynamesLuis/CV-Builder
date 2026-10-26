import AdditionalSkillsCard from "./AdditionalSkillsCard";

export default function AdditionalSkillsDisplay({ additionalSkills }) {
  return (
    <ul className="flex flex-col gap-3 my-4">
      {additionalSkills.map((skill, index) => (
        <AdditionalSkillsCard key={index} skill={skill} />
      ))}
    </ul>
  );
}
