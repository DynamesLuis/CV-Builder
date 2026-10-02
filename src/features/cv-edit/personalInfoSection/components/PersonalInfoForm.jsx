export default function PersonalInfoForm({ personalInfoData, onChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <label className="text-sm font-normal flex flex-col">
          Full Name
          <input
            value={personalInfoData.fullName}
            onChange={handleChange}
            name="fullName"
            type="text"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
        <label className="text-sm font-normal flex flex-col">
          Location
          <input
            value={personalInfoData.location}
            onChange={handleChange}
            type="text"
            name="location"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <label className="text-sm font-normal flex flex-col">
          Email
          <input
            value={personalInfoData.email}
            onChange={handleChange}
            type="email"
            name="email"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
        <label className="text-sm font-normal flex flex-col">
          Phone
          <input
            value={personalInfoData.phone}
            onChange={handleChange}
            type="tel"
            name="phone"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
      </div>
      <div className="my-2">
        <label className="text-sm font-normal flex flex-col">
          Linkedin
          <input
            value={personalInfoData.linkedin}
            onChange={handleChange}
            type="text"
            name="linkedin"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
      </div>
      <div className="my-2">
        <label className="text-sm font-normal flex flex-col">
          Description
          <textarea
            value={personalInfoData.description}
            onChange={handleChange}
            name="description"
            className="w-full my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          ></textarea>
        </label>
      </div>
      <div className="flex justify-end gap-3">
        <button className="text-sm bg-blue-50 hover:bg-blue-100 cursor-pointer px-4 py-px rounded-lg font-bold text-slate-700 transition-all duration-300 ease-in-out">
          Cancel
        </button>
        <button className="text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out">
          Save
        </button>
      </div>
    </form>
  );
}
