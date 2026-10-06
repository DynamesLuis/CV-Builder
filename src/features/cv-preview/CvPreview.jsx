import PersonalInfoCv from "./personalInfoCv/PersonalInfoCv";
import ExperienceInfoCv from "./experienceInfoCv/ExperienceInfoCv";
import EducationInfoCv from "./educationInfoCv/EducationInfoCv";
import SkillsInfoCv from "./skillsInfoCv/SkillsInfoCv";

export default function CvPreview({ cvData }) {
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-2 bg-blue-50">
      <article className="mx-auto max-w-4xl min-h-full bg-white px-12 py-14 text-gray-900 shadow-sm">
        <PersonalInfoCv personaInfoData={cvData.personalInfo} />
        <ExperienceInfoCv experienceData={cvData.experience} />
        <EducationInfoCv educationData={cvData.education} />
        <SkillsInfoCv skillsData={cvData.skills}/>
      </article>
    </div>
  );
}
