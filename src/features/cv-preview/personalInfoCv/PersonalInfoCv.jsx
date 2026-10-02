export default function PersonalInfoCv({ personaInfoData }) {
  return (
    <>
      <header className="text-center">
        <h1 className="font-serif text-3xl font-bold tracking-wide">
          {personaInfoData.fullName}
        </h1>

        <div className="mt-2 flex flex-wrap justify-center gap-x-3 text-sm">
          <span>{personaInfoData.location}</span>
          <span>•</span>
          <span>{personaInfoData.linkedin}</span>
          <span>•</span>
          <span>{personaInfoData.phone}</span>
          <span>•</span>
          <span>{personaInfoData.email}</span>
        </div>
      </header>

      <hr className="my-5 border-gray-400" />

      <section className="mt-6">
        <p className="text-sm leading-relaxed">{personaInfoData.description}</p>
      </section>
    </>
  );
}
