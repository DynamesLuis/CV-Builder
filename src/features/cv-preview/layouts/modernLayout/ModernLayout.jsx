import ModernEducation from "./components/ModernEducation";
import ModernExperience from "./components/ModernExperience";
import ModernPersonalInfo from "./components/ModernPersonalInfo";
import ModernSkills from "./components/ModernSkills";

export default function ModernLayout({ cvData }) {
  return (
    <article className="mx-auto max-w-4xl min-h-full bg-white text-slate-800 shadow-sm">
      <ModernPersonalInfo personalInfoData={cvData.personalInfo} />

      <div className="px-8 py-8 sm:px-12 sm:py-10">
        <ModernExperience experienceData={cvData.experience} />

        <ModernEducation educationData={cvData.education} />

        <ModernSkills skillsData={cvData.skills} />
      </div>
    </article>
  );
}
