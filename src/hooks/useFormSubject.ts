import { useState, ChangeEvent } from "react";

export const useFormSubject = (formTitle: string) => {
  const [userName, setUserName] = useState("");

  const dynamicSubject = `LUCC submission, ${formTitle}: ${userName.trim() || "New Lead"}`;

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return {
    dynamicSubject,
    handleNameChange,
  };
};
