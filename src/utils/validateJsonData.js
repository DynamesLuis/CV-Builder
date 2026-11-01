const isObject = (value) =>
  typeof value === "object" && value !== null && !Array.isArray(value);

export default function validateJsonData(data) {
  const errors = [];

  // Validate main object
  if (!isObject(data)) {
    return {
      valid: false,
      errors: ["The file must contain a JSON object."],
    };
  }

  // Validate personal information
  if (!isObject(data.personalInfo)) {
    errors.push("personalInfo must be an object.");
  } else {
    const fields = [
      "fullName",
      "location",
      "email",
      "phone",
      "linkedin",
      "description",
    ];

    fields.forEach((field) => {
      if (typeof data.personalInfo[field] !== "string") {
        errors.push(`personalInfo.${field} must be a string.`);
      }
    });
  }

  // Validate experience
  if (!Array.isArray(data.experience)) {
    errors.push("experience must be an array.");
  } else {
    data.experience.forEach((item, index) => {
      if (!isObject(item)) {
        errors.push(`experience[${index}] must be an object.`);
        return;
      }

      if (typeof item.id !== "string") {
        errors.push(`experience[${index}].id must be a string.`);
      }

      const stringFields = [
        "company",
        "role",
        "location",
        "startDate",
        "endDate",
      ];

      stringFields.forEach((field) => {
        if (typeof item[field] !== "string") {
          errors.push(`experience[${index}].${field} must be a string.`);
        }
      });

      if (typeof item.currentlyWorking !== "boolean") {
        errors.push(`experience[${index}].currentlyWorking must be a boolean.`);
      }

      if (
        !Array.isArray(item.additionalInfo) ||
        !item.additionalInfo.every((info) => typeof info === "string")
      ) {
        errors.push(
          `experience[${index}].additionalInfo must be an array of strings.`,
        );
      }
    });
  }

  // Validate education
  if (!Array.isArray(data.education)) {
    errors.push("education must be an array.");
  } else {
    data.education.forEach((item, index) => {
      if (!isObject(item)) {
        errors.push(`education[${index}] must be an object.`);
        return;
      }

      if (typeof item.id !== "string") {
        errors.push(`education[${index}].id must be a string.`);
      }

      const stringFields = [
        "institution",
        "location",
        "startDate",
        "endDate",
        "fieldOfStudy",
      ];

      stringFields.forEach((field) => {
        if (typeof item[field] !== "string") {
          errors.push(`education[${index}].${field} must be a string.`);
        }
      });

      if (typeof item.currentlyStudying !== "boolean") {
        errors.push(`education[${index}].currentlyStudying must be a boolean.`);
      }

      if (
        !Array.isArray(item.additionalInfo) ||
        !item.additionalInfo.every((info) => typeof info === "string")
      ) {
        errors.push(
          `education[${index}].additionalInfo must be an array of strings.`,
        );
      }
    });
  }

  // Validate skills
  if (
    !Array.isArray(data.skills) ||
    !data.skills.every((skill) => typeof skill === "string")
  ) {
    errors.push("skills must be an array of strings.");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
