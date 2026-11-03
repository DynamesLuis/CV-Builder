import PersonalInfoForm from "./components/PersonalInfoForm";
import PersonalInfoDisplay from "./components/PersonalInfoDisplay";

export default function PersonalInfoSection({
  cvData,
  setCvData,
  editData,
  setEditData,
  isEditing,
  setIsEditing,
}) {
  const handleEditClick = () => {
    setEditData({ ...cvData.personalInfo });
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setCvData((prevData) => ({
      ...prevData,
      personalInfo: {
        ...editData,
      },
    }));
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold text-slate-800">General Information and Contact</h2>
      <p className="mt-1 text-sm text-slate-500">
        Key details that will appear at the top of your résumé.
      </p>
      {isEditing ? (
        <PersonalInfoForm
          personalInfoData={editData}
          onChange={setEditData}
          onCancel={handleCancelClick}
          onSave={handleSaveClick}
        />
      ) : (
        <PersonalInfoDisplay cvData={cvData.personalInfo} onClick={handleEditClick} />
      )}
    </div>
  );
}
