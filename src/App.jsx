import { useState } from "react";
import CvEdit from "./features/cv-edit/CvEdit";
import CvPreview from "./features/cv-preview/CvPreview";
import { useEffect } from "react";
import Header from "./components/Header";

const initialCvData = {
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
};

function App() {
  const [cvData, setCvData] = useState(() => {
    const savedData = localStorage.getItem("cvData");
    return savedData ? JSON.parse(savedData) : initialCvData;
  });
  const [selectedLayout, setSelectedLayout] = useState(() => {
    const savedLayout = localStorage.getItem("layout");
    return savedLayout ? savedLayout : "harvard";
  });
  const [activeSection, setActiveSection] = useState("layout-section");
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

  useEffect(() => {
    localStorage.setItem("cvData", JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem("layout", selectedLayout);
  }, [selectedLayout]);

  const exportCvDataToJson = () => {
    const data = JSON.stringify(cvData, null, 4);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "my-cvData.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      URL.revokeObjectURL(url);
    }, 0);
  };

  return (
    <>
      <Header onExportJSON={exportCvDataToJson} />
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
          setSelectedLayout={setSelectedLayout}
        />
        <CvPreview cvData={previewData} selectedLayout={selectedLayout} />
      </div>
    </>
  );
}

export default App;
