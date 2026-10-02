import { useState } from "react";
import CvEdit from "./features/cv-edit/CvEdit";
import CvPreview from "./features/cv-ṕreview/CvPreview";

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
  });

  const [activeSection, setActiveSection] = useState("personal-info-section");
  const [editData, setEditData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const previewData = {}

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
      <CvPreview cvData={previewData}/>
    </div>
  );
}

export default App;
