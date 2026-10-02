import PersonalInfoForm from "./components/PersonalInfoForm";
import PersonalInfoDisplay from "./components/PersonalInfoDisplay";

export default function PersonalInfoSection({
  cvData,
  editData,
  setEditData,
  isEditing,
  setIsEditing,
}) {
  const handleEditClick = () => {
    setEditData({ ...cvData.personalInfo });
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="my-4">
      <h2 className="font-bold text-lg">General Information and Contact</h2>
      <p className="text-xs text-slate-600 font-normal">
        Key details that will appear at the top of your résumé.
      </p>
      {isEditing ? (
        <PersonalInfoForm
          personalInfoData={editData}
          onChange={setEditData}
          onCancel={handleSaveClick}
        />
      ) : (
        <PersonalInfoDisplay cvData={cvData} onClick={handleEditClick} />
      )}
    </div>
  );
}
