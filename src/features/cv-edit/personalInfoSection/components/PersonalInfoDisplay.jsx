export default function PersonalInfoDisplay({ cvData, onClick }) {
  return (
    <div className="my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <div className="text-sm font-normal flex flex-col">
          <span>Full Name</span>
          <p className="my-1 text-base font-light rounded-lg pl-3 py-1 bg-slate-50 inset-ring-2 inset-ring-slate-100">
            {cvData.fullName}
          </p>
        </div>

        <div className="text-sm font-normal flex flex-col">
          <span>Location</span>
          <p className="my-1 text-base font-light rounded-lg pl-3 py-1 bg-slate-50 inset-ring-2 inset-ring-slate-100">
            {cvData.location}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-2">
        <div className="text-sm font-normal flex flex-col">
          <span>Email</span>
          <p className="my-1 text-base font-light rounded-lg pl-3 py-1 bg-slate-50 inset-ring-2 inset-ring-slate-100">
            {cvData.email}
          </p>
        </div>

        <div className="text-sm font-normal flex flex-col">
          <span>Phone</span>
          <p className="my-1 text-base font-light rounded-lg pl-3 py-1 bg-slate-50 inset-ring-2 inset-ring-slate-100">
            {cvData.phone}
          </p>
        </div>
      </div>

      <div className="my-2">
        <div className="text-sm font-normal flex flex-col">
          <span>Linkedin</span>
          <p className="my-1 text-base font-light rounded-lg pl-3 py-1 bg-slate-50 inset-ring-2 inset-ring-slate-100">
            {cvData.linkedin}
          </p>
        </div>
      </div>

      <div className="my-2">
        <div className="text-sm font-normal flex flex-col">
          <span>Description</span>
          <p className="w-full my-1 text-base font-light rounded-lg pl-3 py-2 bg-slate-50 inset-ring-2 inset-ring-slate-100 min-h-20">
            {cvData.description}
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-4">
        <button
          onClick={onClick}
          type="button"
          className="text-sm bg-blue-600 hover:bg-blue-500 text-white cursor-pointer px-4 py-px rounded-lg font-bold transition-all duration-300 ease-in-out"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
