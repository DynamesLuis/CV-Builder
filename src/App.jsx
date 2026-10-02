import { useState } from "react";
import CvEdit from "./features/cv-edit/CvEdit";

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
      <div className="flex-1">asa</div>
    </div>
  );
}

export default App;
