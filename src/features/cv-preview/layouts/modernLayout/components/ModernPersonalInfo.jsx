export default function ModernPersonalInfo({ personalInfoData }) {
  const { fullName, location, email, phone, linkedin, description } =
    personalInfoData;

  return (
    <header className="bg-slate-900 px-8 py-10 text-white sm:px-12 sm:py-12">
      <div className="mb-6 h-1 w-16 rounded-full bg-sky-400" />

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {fullName}
      </h1>

      {description && (
        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
          {description}
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
        {location && (
          <p className="flex items-center gap-2">
            <span className="text-sky-400">●</span>
            {location}
          </p>
        )}

        {email && (
          <a
            href={`mailto:${email}`}
            className="transition-colors hover:text-white"
          >
            {email}
          </a>
        )}

        {phone && <p>{phone}</p>}

        {linkedin && (
          <a
            href={
              linkedin.startsWith("http") ? linkedin : `https://${linkedin}`
            }
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn ↗
          </a>
        )}
      </div>
    </header>
  );
}
