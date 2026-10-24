import EducationDisplay from "./components/EducationDisplay";
import EducationForm from "./components/EducationForm";

export default function EducationSection({
  cvData,
  setCvData,
  editData,
  setEditData,
  isEditing,
  setIsEditing,
  educationAction,
  setEducationAction,
}) {
  const handleEditClick = (education) => {
    setEditData(education);
    setEducationAction("edit");
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEducationAction("");
  };

  const handleSaveClick = () => {
    if (educationAction === "edit") {
      setCvData((prev) => ({
        ...prev,
        education: prev.education.map((educationInfo) =>
          educationInfo.id === editData.id ? editData : educationInfo,
        ),
      }));
    } else if (educationAction === "add") {
      setCvData(prev => ({
        ...prev,
        education: [...prev.education, editData]
      }))
    }
  };

  return (
    <div className="my-4">
      <h2 className="font-bold text-lg">Education</h2>
      <div className="flex justify-between">
        <p className="text-xs text-slate-600 font-normal">
          Academic degrees, certifications, and valuable specializations
        </p>
        <button className="flex items-center text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out">
          Add education
        </button>
      </div>
      {isEditing ? (
        <EducationForm
          educationData={editData}
          onCancel={handleCancelClick}
          onChange={setEditData}
          onSave={handleSaveClick}
        />
      ) : (
        <EducationDisplay
          educationData={cvData.education}
          onEdit={handleEditClick}
        />
      )}
    </div>
  );
}
