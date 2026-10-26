import EducationCard from "./EducationCard";

export default function EducationDisplay({ educationData, onEdit, onDelete }) {
  return (
    <ul className="flex flex-col gap-3 my-4">
      {educationData.map((educationInfo) => (
        <EducationCard
          key={educationInfo.id}
          educationInfo={educationInfo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
