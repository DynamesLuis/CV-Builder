import PersonalInfoCv from "./personalInfoCv/PersonalInfoCv";

export default function CvPreview({ cvData }) {
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-2 bg-blue-50">
      <article className="mx-auto max-w-4xl min-h-full bg-white px-12 py-14 text-gray-900 shadow-sm">
        <PersonalInfoCv personaInfoData={cvData.personalInfo} />
      </article>
    </div>
  );
}
