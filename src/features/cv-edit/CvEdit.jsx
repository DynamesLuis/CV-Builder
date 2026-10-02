import EditNav from "./editNav/EditNav";
import LayoutSection from "./layoutSection/LayoutSection";
import PersonalInfoSection from "./personalInfoSection/PersonalInfoSection";
import ExperienceSection from "./experienceSection/ExperienceSection";
import EducationSection from "./educationSection/EducationSection";
import AdditionalSkillsSection from "./additionalSkillsSection/AdditionalSkillsSection";

export default function CvEdit({
  cvData,
  setCvData,
  editData,
  setEditData,
  isEditing,
  setIsEditing,
  activeSection,
  setActiveSection,
}) {
  return (
    <div className="flex-1">
      <EditNav
        activeSection={activeSection}
        onChangeSection={setActiveSection}
      />
      {activeSection === "layout-section" && <LayoutSection />}
      {activeSection === "personal-info-section" && (
        <PersonalInfoSection
          cvData={cvData}
          setCvData={setCvData}
          editData={editData}
          setEditData={setEditData}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
      {activeSection === "experience-section" && <ExperienceSection />}
      {activeSection === "education-section" && <EducationSection />}
      {activeSection === "skills-section" && <AdditionalSkillsSection />}
    </div>
  );
}
