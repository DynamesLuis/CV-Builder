import { useState } from "react";

const inputClassName =
  "my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100";

function generateId() {
  return crypto.randomUUID();
}

export default function ExperienceForm({ experienceInfo, onChange }) {
  const [aditionalInfos, setAditionalInfos] = useState(
    experienceInfo.additionalInfo.map((info) => {
      return {
        renderId: generateId(),
        description: info,
      };
    }),
  );

  const aditionalInfosList = aditionalInfos.map((info, index) => {
    return (
      <div key={info.renderId} className="text-sm font-normal flex flex-col">
        <label htmlFor={`description-${index}`}>Description {index + 1}</label>

        <textarea
          id={`description-${index}`}
          value={info.description}
          rows={3}
          className={`w-full ${inputClassName}`}
          onChange={(e) =>
            handleChangeAdditionalInfo(info.renderId, e.target.value)
          }
        />

        <button
          type="button"
          onClick={() => handleDeleteAdditionalInfo(info.renderId)}
          className="self-end mt-2 text-sm bg-red-50 hover:bg-red-100 cursor-pointer px-3 py-1 rounded-lg font-bold text-red-700 transition-all duration-300 ease-in-out"
        >
          Delete
        </button>
      </div>
    );
  });

  const handleAddAdditionalInfo = () => {
    setAditionalInfos((prev) => [
      ...prev,
      {
        renderId: generateId(),
        description: "",
      },
    ]);
  };

  const handleDeleteAdditionalInfo = (renderId) => {
    setAditionalInfos((prev) =>
      prev.filter((aditionalInfo) => aditionalInfo.renderId !== renderId),
    );
  };

  const handleChangeAdditionalInfo = (renderId, newValue) => {
    const updatedAdditionalInfos = aditionalInfos.map((info) =>
      info.renderId === renderId ? { ...info, description: newValue } : info,
    );

    setAditionalInfos(updatedAdditionalInfos);

    onChange((prevData) => ({
      ...prevData,
      additionalInfo: updatedAdditionalInfos.map((info) => info.description),
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <label className="text-sm font-normal flex flex-col">
          Company
          <input
            value={experienceInfo.company}
            type="text"
            name="company"
            className={inputClassName}
            onChange={handleChange}
          />
        </label>

        <label className="text-sm font-normal flex flex-col">
          Role
          <input
            value={experienceInfo.role}
            type="text"
            name="role"
            className={inputClassName}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="my-2">
        <label className="text-sm font-normal flex flex-col">
          Location
          <input
            value={experienceInfo.location}
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
            value={experienceInfo.startDate}
            type="text"
            name="startDate"
            className={inputClassName}
            onChange={handleChange}
          />
        </label>

        <label className="text-sm font-normal flex flex-col">
          End Date
          <input
            value={experienceInfo.endDate}
            type="text"
            name="endDate"
            disabled={experienceInfo.currentlyWorking}
            className={`${inputClassName} disabled:opacity-50 disabled:cursor-not-allowed`}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="my-3">
        <label className="inline-flex items-center gap-2 text-sm font-normal cursor-pointer">
          <input
            type="checkbox"
            name="currentlyWorking"
            checked={experienceInfo.currentlyWorking}
            className="accent-blue-600 size-4 cursor-pointer"
            onChange={handleChange}
          />
          Currently working here
        </label>
      </div>

      <div className="my-4">
        <h3 className="text-sm font-normal mb-2">Additional Information</h3>

        <div className="flex flex-col gap-3">{aditionalInfosList}</div>

        <button
          onClick={handleAddAdditionalInfo}
          type="button"
          className="mt-3 text-sm bg-blue-50 hover:bg-blue-100 cursor-pointer px-4 py-1 rounded-lg font-bold text-slate-700 transition-all duration-300 ease-in-out"
        >
          + Add Additional Information
        </button>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          type="button"
          className="text-sm bg-blue-50 hover:bg-blue-100 cursor-pointer px-4 py-px rounded-lg font-bold text-slate-700 transition-all duration-300 ease-in-out"
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
