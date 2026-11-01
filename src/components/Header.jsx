import { useRef } from "react";
import ExportJsonButton from "../features/json-management/exportJson/components/ExportJsonButton";
import ImportJsonButton from "../features/json-management/importJson/components/ImportJsonButton";

export default function Header({ onExportJSON }) {
  const fileInputRef = useRef(null);

  const handleImportClick = () => {
    fileInputRef.current.click();
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
          />
          <ExportJsonButton onExportJSON={onExportJSON} />
          <ImportJsonButton onClick={handleImportClick} />
        </div>
      </div>
    </header>
  );
}
