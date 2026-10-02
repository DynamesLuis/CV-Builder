import PersonalInfoCv from "./personalInfoCv/PersonalInfoCv";

export default function CvPreview({cvData}) {
  return (
    <div className="flex-1">
      <PersonalInfoCv personaInfoData={cvData.personalInfo}/>
    </div>
  );
}
