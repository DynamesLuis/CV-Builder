import { useState } from "react";
import EditNav from "./editNav/EditNav";
import LayoutSection from "./layoutSection/LayoutSection";
import PersonalInfoSection from "./personalInfoSection/PersonalInfoSection";
import ExperienceSection from "./experienceSection/ExperienceSection";
import EducationSection from "./educationSection/EducationSection";
import AdditionalSkillsSection from "./additionalSkillsSection/AdditionalSkillsSection";

export default function CvEdit() {
  const [activeSection, setActiveSection] = useState("personal-info-section");

  return (
    <div className="flex-1">
      <EditNav activeSection={activeSection} onChangeSection={setActiveSection}/>
      {activeSection === "layout-section" && <LayoutSection/>}
      {activeSection === "personal-info-section" && <PersonalInfoSection/>}
      {activeSection === "experience-section" && <ExperienceSection/>}
      {activeSection === "education-section" && <EducationSection/>}
      {activeSection === "skills-section" && <AdditionalSkillsSection/>}
    </div>
  )
}
