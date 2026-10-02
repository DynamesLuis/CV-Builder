export default function PersonalInfoCv({ personaInfoData }) {
  return (
    <div>
      <p>{personaInfoData.fullName}</p>
      <div>
        <p>{personaInfoData.location}</p>
        <p>{personaInfoData.linkedin}</p>
        <p>{personaInfoData.phone}</p>
        <p>{personaInfoData.email}</p>
      </div>
      <p>{personaInfoData.description}</p>
    </div>
  );
}
