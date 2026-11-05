import generateId from "../../../helpers/generateId";
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

  const handleAddEducationClick = () => {
    setIsEditing(true);
    setEducationAction("add");
    setEditData({
      id: generateId(),
      institution: "",
      location: "",
      startDate: "",
      endDate: "",
      fieldOfStudy: "",
      currentlyStudying: false,
      additionalInfo: [],
    });
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
      setCvData((prev) => ({
        ...prev,
        education: [...prev.education, editData],
      }));
    }
  };

  const handleDeleteEducationClick = (id) => {
    setCvData((prev) => ({
      ...prev,
      education: prev.education.filter((education) => education.id !== id),
    }));
  };

  return (
    <div className="">
      <h2 className="text-lg font-semibold text-slate-800">Education</h2>
      <div className="flex justify-between">
        <p className="mt-1 text-sm text-slate-500">
          Academic degrees, certifications, and valuable specializations
        </p>
        <button
          onClick={handleAddEducationClick}
          className="self-start flex items-center text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
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
          onDelete={handleDeleteEducationClick}
        />
      )}
    </div>
  );
}
