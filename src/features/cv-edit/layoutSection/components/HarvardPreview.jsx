export default function HarvardPreview() {
  return (
    <div className="px-3 py-4">
      <div className="mb-2 text-center">
        <div className="mx-auto h-2 w-16 rounded-sm bg-slate-800" />
        <div className="mx-auto mt-1 h-1 w-20 rounded-sm bg-slate-300" />
      </div>

      {[1, 2, 3].map((item) => (
        <div key={item} className="mt-3">
          <div className="mb-1 h-1 w-12 bg-slate-700" />
          <div className="h-px w-full bg-slate-400" />
          <div className="mt-2 h-1 w-4/5 bg-slate-300" />
          <div className="mt-1 h-1 w-3/5 bg-slate-200" />
        </div>
      ))}
    </div>
  );
}
