const inputClassName =
  "my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100";

export default function AdditionalSkillsForm({ skills }) {
  return (
    <form className="my-4" >
      <div className="flex flex-col gap-3 my-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col">
            <label htmlFor={`skill-${index}`} className="text-sm font-normal">
              Skill {index + 1}
            </label>

            <div className="flex items-center gap-3">
              <input
                id={`skill-${index}`}
                type="text"
                name={`skill-${index}`}
                value={skill}
                className={`w-full ${inputClassName}`}
              />

              <button
                type="button"
                className="shrink-0 text-sm bg-red-50 hover:bg-red-100 cursor-pointer px-3 py-1 rounded-lg font-bold text-red-700 transition-all duration-300 ease-in-out"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="mt-3 text-sm bg-blue-50 hover:bg-blue-100 cursor-pointer px-4 py-1 rounded-lg font-bold text-slate-700 transition-all duration-300 ease-in-out"
      >
        + Add Skill
      </button>

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
