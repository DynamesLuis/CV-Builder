import HarvardLayout from "./layouts/harvardLayout/HarvardLayout";

export default function CvPreview({ cvData, selectedLayout }) {
  let layout;
  switch (selectedLayout) {
    case "harvard":
      layout = <HarvardLayout cvData={cvData} />;
      break;

    default:
      layout = <HarvardLayout cvData={cvData} />
      break;
  }
  return (
    <div className="flex-1 min-h-screen bg-gray-100 p-2">
      {layout}
    </div>
  );
}
