import HarvardLayout from "./layouts/harvardLayout/HarvardLayout";
import ModernLayout from "./layouts/modernLayout/ModernLayout";

export default function CvPreview({ cvData, selectedLayout }) {
  let layout;
  switch (selectedLayout) {
    case "harvard":
      layout = <HarvardLayout cvData={cvData} />;
      break;
    case "modern":
      layout = <ModernLayout cvData={cvData} />;
      break;

    default:
      layout = <HarvardLayout cvData={cvData} />;
      break;
  }
  return <div className="lg:flex-1 lg:min-h-0 lg:overflow-y-auto">{layout}</div>;
}
