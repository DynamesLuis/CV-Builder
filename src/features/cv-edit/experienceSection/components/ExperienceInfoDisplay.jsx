import ExperienceCard from "./ExperienceCard";

export default function ExperienceInfoDisplay({ experienceData, onEdit}) {
  return (
    <ul className="flex flex-col gap-3 my-4">
      {experienceData.map((experienceInfo) => (
        <ExperienceCard key={experienceInfo.id} experienceInfo={experienceInfo} onEdit={onEdit}/>
      ))}
    </ul>
  );
}
