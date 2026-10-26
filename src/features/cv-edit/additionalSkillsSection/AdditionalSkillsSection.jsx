import AdditionalSkillsDisplay from "./components/AdditionalSkillsDisplay";
import AdditionalSkillsForm from "./components/AdditionalSkillsForm";

export default function AdditionalSkillsSection({
  cvData,
  setIsEditing,
  isEditing,
  editData,
  setEditData,
}) {
  const handleEditClick = () => {
    setIsEditing(true);
    setEditData(cvData.skills);
  };

  return (
    <div className="my-4">
      <h2 className="font-bold text-lg">Additional Skills</h2>
      <div className="flex justify-between">
        <p className="text-xs text-slate-600 font-normal">
          Highlight your key skills, strengths, and areas of expertise.
        </p>
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={handleEditClick}
            type="button"
            className="text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out"
          >
            Edit
          </button>
        </div>
      </div>
      {isEditing ? (
        <AdditionalSkillsForm skills={editData} />
      ) : (
        <AdditionalSkillsDisplay additionalSkills={cvData.skills} />
      )}
    </div>
  );
}
