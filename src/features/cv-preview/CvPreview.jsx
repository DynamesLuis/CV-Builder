import HarvardLayout from "./layouts/HarvardLayout";

export default function CvPreview({ cvData }) {
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-2 bg-blue-50">
      <HarvardLayout cvData={cvData}/>
    </div>
  );
}
