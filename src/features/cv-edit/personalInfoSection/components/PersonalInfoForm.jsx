export default function PersonalInfoForm() {
  return (
    <form>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <label className="text-sm font-normal flex flex-col">
          Full Name
          <input
            type="text"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
        <label className="text-sm font-normal flex flex-col">
          Location
          <input
            type="text"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <label className="text-sm font-normal flex flex-col">
          Email
          <input
            type="email"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
        <label className="text-sm font-normal flex flex-col">
          Phone
          <input
            type="tel"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
      </div>
      <div className="my-2">
        <label className="text-sm font-normal flex flex-col">
          Linkedin
          <input
            type="text"
            className="my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"
          />
        </label>
      </div>
      <div className="my-2">
        <label className="text-sm font-normal flex flex-col">
          Description
          <textarea className="w-full my-1 text-base font-light rounded-lg outline-none pl-3 py-1 bg-slate-50 focus:ring-2 focus:ring-slate-400 inset-ring-2 inset-ring-slate-100"></textarea>
        </label>
      </div>
      <div className="flex justify-end gap-3">
        <button className="text-sm bg-blue-50 hover:bg-blue-100 cursor-pointer px-4 py-px rounded-lg font-bold text-slate-700 transition-all duration-300 ease-in-out">Cancel</button>
        <button className="text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out">Save</button>
      </div>
    </form>
  );
}
