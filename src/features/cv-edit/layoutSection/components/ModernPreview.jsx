export default function ModernPreview() {
  return (
    <div>
      <div className="bg-slate-900 px-3 py-4">
        <div className="mb-2 h-1.5 w-16 rounded-sm bg-white" />
        <div className="h-1 w-20 rounded-sm bg-slate-400" />
        <div className="mt-3 h-1 w-full bg-sky-400" />
        <div className="mt-1 h-1 w-3/4 bg-slate-500" />
      </div>

      <div className="px-3 py-2">
        {[1, 2, 3].map((item) => (
          <div key={item} className="mt-2">
            <div className="mb-1 h-1 w-12 rounded-sm bg-sky-600" />
            <div className="h-1 w-4/5 bg-slate-300" />
            <div className="mt-1 h-1 w-3/5 bg-slate-200" />
          </div>
        ))}
      </div>
    </div>
  );
}
