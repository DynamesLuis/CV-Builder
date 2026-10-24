import { useState } from "react";
import generateId from "../../../../helpers/generateId";

const inputClassName =
  "my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100";

export default function EducationForm({ educationData, onCancel, onChange }) {
  const [additionalInfos, setAdditionalInfo] = useState(
    educationData.additionalInfo.map((info) => {
      return {
        renderId: generateId(),
        description: info,
      };
    }),
  );

  const handleAddNewAdditionalInfo = () => {
    setAdditionalInfo((prev) => [
      ...prev,
      { renderId: generateId(), description: "" },
    ]);
  };

  const handleDeleteAdditionalInfo = (renderId) => {
    const updatedAdditionalInfos = additionalInfos.filter(
      (info) => info.renderId !== renderId,
    );
    setAdditionalInfo(updatedAdditionalInfos);
    onChange((prevData) => ({
      ...prevData,
      additionalInfo: updatedAdditionalInfos.map((info) => info.description),
    }));
  };

  const handleChangeAdditionalInfo = (renderId, newValue) => {
    const updatedAdditionalInfos = additionalInfos.map((info) =>
      info.renderId === renderId ? { ...info, description: newValue } : info,
    );

    setAdditionalInfo(updatedAdditionalInfos);

    onChange((prevData) => ({
      ...prevData,
      additionalInfo: updatedAdditionalInfos.map((info) => info.description),
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onChange((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const additionalInfoList = additionalInfos.map((info, index) => (
    <div key={info.renderId} className="flex flex-col">
      <label
        htmlFor={`education-description-${index}`}
        className="text-sm font-normal"
      >
        Description {index + 1}
      </label>

      <textarea
        id={`education-description-${index}`}
        value={info.description}
        rows={3}
        className={`w-full ${inputClassName}`}
        onChange={(e) =>
          handleChangeAdditionalInfo(info.renderId, e.target.value)
        }
      />

      <button
        type="button"
        className="self-end mt-2 text-sm bg-red-50 hover:bg-red-100 cursor-pointer px-3 py-1 rounded-lg font-bold text-red-700 transition-all duration-300 ease-in-out"
        onClick={() => handleDeleteAdditionalInfo(info.renderId)}
      >
        Delete
      </button>
    </div>
  ));

  return (
    <form className="my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <label className="text-sm font-normal flex flex-col">
          Institution
          <input
            value={educationData.institution}
            type="text"
            name="institution"
            className={inputClassName}
            onChange={handleChange}
          />
        </label>

        <label className="text-sm font-normal flex flex-col">
          Field of Study
          <input
            value={educationData.fieldOfStudy}
            type="text"
            name="fieldOfStudy"
            className={inputClassName}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="my-2">
        <label className="text-sm font-normal flex flex-col">
          Location
          <input
            value={educationData.location}
            type="text"
            name="location"
            className={inputClassName}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <label className="text-sm font-normal flex flex-col">
          Start Date
          <input
            value={educationData.startDate}
            type="text"
            name="startDate"
            className={inputClassName}
            onChange={handleChange}
          />
        </label>

        <label className="text-sm font-normal flex flex-col">
          End Date
          <input
            value={educationData.endDate}
            type="text"
            name="endDate"
            disabled={educationData.currentlyStudying}
            className={`${inputClassName} disabled:opacity-50 disabled:cursor-not-allowed`}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="my-3">
        <label className="inline-flex items-center gap-2 text-sm font-normal cursor-pointer">
          <input
            type="checkbox"
            name="currentlyStudying"
            checked={educationData.currentlyStudying}
            className="accent-blue-600 size-4 cursor-pointer"
            onChange={handleChange}
          />
          Currently studying here
        </label>
      </div>

      <div className="my-4">
        <h3 className="text-sm font-normal mb-2">Additional Information</h3>

        <div className="flex flex-col gap-3">{additionalInfoList}</div>

        <button
          type="button"
          className="mt-3 text-sm bg-blue-50 hover:bg-blue-100 cursor-pointer px-4 py-1 rounded-lg font-bold text-slate-700 transition-all duration-300 ease-in-out"
          onClick={handleAddNewAdditionalInfo}
        >
          + Add Additional Information
        </button>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          className="text-sm bg-blue-50 hover:bg-blue-100 cursor-pointer px-4 py-px rounded-lg font-bold text-slate-700 transition-all duration-300 ease-in-out"
          onClick={onCancel}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out"
        >
          Save
        </button>
      </div>
    </form>
  );
}
