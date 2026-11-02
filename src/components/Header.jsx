import { useRef, useState } from "react";
import ExportJsonButton from "../features/json-management/exportJson/components/ExportJsonButton";
import ImportJsonButton from "../features/json-management/importJson/components/ImportJsonButton";
import validateJsonData from "../utils/validateJsonData";
import Notification from "../features/notification/Notification";

export default function Header({ onExportJSON, setCvData }) {
  const fileInputRef = useRef(null);
  const [notification, setNotification] = useState(null);

  const handleImportClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    e.target.value = "";
    const isJsonFile = file.name.toLowerCase().endsWith(".json");
    if (!isJsonFile) {
      setNotification({
        type: "error",
        message: "Please select a JSON file",
      });
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => {
      setNotification({
        type: "error",
        message: "Error reading file: " + reader.error,
      });
    };
    reader.onload = (e) => {
      try {
        const fileContent = e.target.result;
        const jsonData = JSON.parse(fileContent);
        const validation = validateJsonData(jsonData);

        if (!validation.valid) {
          setNotification({
            type: "error",
            message: "Invalid CV structure " + validation.errors,
          });
          return;
        }
        setCvData(jsonData);
        setNotification({
          type: "success",
          message: "Your CV was imported successfully.",
        });
      } catch (error) {
        setNotification({
          type: "error",
          message: "Invalid JSON file: " + error,
        });
      }
    };
    reader.readAsText(file);
  };

  return (
    <header className="w-full border-b border-slate-200 bg-gray-100 px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <h1 className="shrink-0 text-xl font-bold tracking-tight text-slate-800">
          CV Builder
        </h1>
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={handleFileChange}
          />
          <ExportJsonButton onExportJSON={onExportJSON} />
          <ImportJsonButton onClick={handleImportClick} />
        </div>
      </div>
      <Notification type={notification?.type} message={notification?.message} />
    </header>
  );
}
