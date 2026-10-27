import EducationInfoCv from "../layoutsSections/educationInfoCv/EducationInfoCv";
import ExperienceInfoCv from "../layoutsSections/experienceInfoCv/ExperienceInfoCv";
import PersonalInfoCv from "../layoutsSections/personalInfoCv/PersonalInfoCv";
import SkillsInfoCv from "../layoutsSections/skillsInfoCv/SkillsInfoCv";

export default function HarvardLayout({cvData}) {
  return (
    <article className="mx-auto max-w-4xl min-h-full bg-white px-12 py-14 text-gray-900 shadow-sm">
      <PersonalInfoCv personaInfoData={cvData.personalInfo} />
      <ExperienceInfoCv experienceData={cvData.experience} />
      <EducationInfoCv educationData={cvData.education} />
      <SkillsInfoCv skillsData={cvData.skills} />
    </article>
  );
}
