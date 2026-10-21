import ExperienceCard from "./ExperienceCard";

export default function ExperienceInfoDisplay({ experienceData, onEdit, onDelete}) {
  return (
    <ul className="flex flex-col gap-3 my-4">
      {experienceData.map((experienceInfo) => (
        <ExperienceCard key={experienceInfo.id} experienceInfo={experienceInfo} onEdit={onEdit} onDelete={onDelete}/>
      ))}
    </ul>
  );
}
