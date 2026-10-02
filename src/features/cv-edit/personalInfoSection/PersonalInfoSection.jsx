import PersonalInfoForm from "./components/PersonalInfoForm";

export default function PersonalInfoSection() {
  return (
    <div className="my-4">
      <h2 className="font-bold text-lg">General Information and Contact</h2>
      <p className="text-xs text-slate-600 font-normal">
        Key details that will appear at the top of your résumé.
      </p>
      <PersonalInfoForm/>
    </div>
  );
}
