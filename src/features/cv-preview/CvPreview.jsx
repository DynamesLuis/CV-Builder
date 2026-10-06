import PersonalInfoCv from "./personalInfoCv/PersonalInfoCv";
import ExperienceInfoCv from "./experienceInfoCv/ExperienceInfoCv";
import EducationInfoCv from "./educationInfoCv/EducationInfoCv";
import SkillsInfoCv from "./skillsInfoCv/SkillsInfoCv";

export default function CvPreview({ cvData }) {
  const experience = [
    {
      id: "1",
      company: "Empresa A",
      role: "Developer",
      location: "Barcelona, España",
      startData: "Julio, 2014",
      endDate: "Agosto, 2020",
      additionalInfo: [
        {
          id: "1",
          description:
            "Muestra números, ya que llaman mucho la atención de la persona que está leyendo",
        },
        {
          id: "2",
          description:
            "Muestra números, ya que llaman mucho la atención de la persona que está leyendo",
        },
      ],
    },
    {
      id: "2",
      company: "Empresa A",
      role: "Developer",
      location: "Barcelona, España",
      startDate: "Julio, 2014",
      endDate: "Agosto, 2020",
      additionalInfo: [
        {
          id: "1",
          description:
            "Muestra números, ya que llaman mucho la atención de la persona que está leyendo",
        },
        {
          id: "2",
          description:
            "Muestra números, ya que llaman mucho la atención de la persona que está leyendo",
        },
      ],
    },
  ];

  const education = [
    {
      id: "1",
      institution: "UNIVERSITAT OBERTA de CATALUNYA",
      location: "Barcelona, España",
      startDate: "Mayo, 2007",
      endDate: "Junio 2010",
      fieldOfStudy: "Ingeniería en Informática",
      additionalInfo: [
        {
          id: "1",
          description:
            "Honores: Matrícula de Honor en la asignatura de Programación y el PFC",
        },
      ],
    },
  ];

  const skills = [
    {
      id: "1",
      description:
        "Creador de contenido de programación en redes sociales con más de 2 millones de seguidores en tot",
    },
    { id: "2", description: "Nativo en Español y Catalán. Fluido en Inglés" },
  ];

  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-2 bg-blue-50">
      <article className="mx-auto max-w-4xl min-h-full bg-white px-12 py-14 text-gray-900 shadow-sm">
        <PersonalInfoCv personaInfoData={cvData.personalInfo} />
        <ExperienceInfoCv experienceData={experience} />
        <EducationInfoCv educationData={education} />
        <SkillsInfoCv skillsData={skills}/>
      </article>
    </div>
  );
}
