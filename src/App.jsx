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

  const [editData, setEditData] = useState({});

  return (
    <div className="flex w-full p-5">
      <CvEdit cvData={cvData} setCvData={setCvData} editData={editData} setEditData={setEditData}/>
      <CvPreview/>
    </div>
  );
}

export default App;
