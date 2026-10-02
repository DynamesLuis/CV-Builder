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

  const [activeSection, setActiveSection] = useState("personal-info-section");
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  let previewData = structuredClone(cvData);
  if (isEditing) {
    switch (activeSection) {
      case "personal-info-section":
        previewData.personalInfo = { ...editData };
        break;
      case "experience-section":
        break;
      case "education-section":
        break;
      case "skills-section":
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
      />
      <CvPreview cvData={previewData} />
    </div>
  );
}

export default App;
