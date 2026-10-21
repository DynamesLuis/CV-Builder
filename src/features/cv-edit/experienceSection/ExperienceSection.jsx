import ExperienceForm from "./components/ExperienceForm";
import ExperienceInfoDisplay from "./components/ExperienceInfoDisplay";

export default function ExperienceSection({
  cvData,
  setCvData,
  editData,
  setEditData,
  isEditing,
  setIsEditing,
}) {
  const handleEditClick = (experience) => {
    setEditData(experience);
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = () => {
    setCvData((prev) => ({
      ...prev,
      experience: prev.experience.map((experience) =>
        experience.id === editData.id ? editData : experience,
      ),
    }));
  };

  const handleAddExperienceClick = () => {
    setIsEditing(true);
    setEditData({
      id: "",
      company: "",
      role: "",
      location: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      additionalInfo: [],
    });
  };

  return (
    <div className="my-4">
      <h2 className="font-bold text-lg">Work experience</h2>
      <div className="flex justify-between">
        <p className="text-xs text-slate-600 font-normal">
          Describe your impactful roles and quantifiable achievements in
          chronological order.
        </p>
        <button
          onClick={handleAddExperienceClick}
          className="flex items-center text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
          </svg>
          Add experience
        </button>
      </div>
      {isEditing ? (
        <ExperienceForm
          experienceInfo={editData}
          onChange={setEditData}
          onCancel={handleCancelClick}
          onSave={handleSaveClick}
        />
      ) : (
        <ExperienceInfoDisplay
          experienceData={cvData.experience}
          onEdit={handleEditClick}
        />
      )}
    </div>
  );
}
