export default function EditNavItem({
  label,
  onChangeSection,
  id,
  activeSection,
  icon,
}) {
  return (
    <button
      onClick={() => onChangeSection(id)}
      className={`
     flex items-center gap-2 text-xs cursor-pointer px-2 py-1 rounded-lg bg-blue-50 font-medium transition-all
    ${activeSection === id ? "text-blue-700 bg-blue-100" : "text-slate-600 hover:text-slate-800"}
  `}
    >
      {icon}
      {label}
    </button>
  );
}
