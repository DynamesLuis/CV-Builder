import { useState } from "react";
import CvEdit from "./features/cv-edit/CvEdit";
import CvPreview from "./features/cv-preview/CvPreview";

function App() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      fullName: "",
      location: "",
      email: "",
      phone: "",
      linkedin: "",
      description: "",
    },
    experience: [],
    education: [],
    skills: [],
  });
  const [selectedLayout, setSelectedLayout] = useState("harvard");
  const [activeSection, setActiveSection] = useState("personal-info-section");
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formAction, setFormAction] = useState("");
  let previewData = structuredClone(cvData);
  if (isEditing) {
    switch (activeSection) {
      case "personal-info-section":
        previewData.personalInfo = { ...editData };
        break;
      case "experience-section":
        if (formAction === "edit") {
          previewData.experience = previewData.experience.map((experience) =>
            experience.id === editData.id ? editData : experience,
          );
        } else if (formAction === "add") {
          previewData.experience = [...previewData.experience, editData];
        }
        break;
      case "education-section":
        if (formAction === "edit") {
          previewData.education = previewData.education.map((education) =>
            education.id === editData.id ? editData : education,
          );
        } else if (formAction === "add") {
          previewData.education = [...previewData.education, editData];
        }
        break;
      case "skills-section":
        previewData.skills = [...editData];
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex w-full p-5">
      <CvEdit
        cvData={cvData}
        setCvData={setCvData}
        editData={editData}
        setEditData={setEditData}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        formAction={formAction}
        setFormAction={setFormAction}
        selectedLayout={selectedLayout}
      />
      <CvPreview cvData={previewData} selectedLayout={selectedLayout} />
    </div>
  );
}

export default App;
