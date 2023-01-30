import { Contact } from "./../types";
import { useState } from "react";
import { useUpdateContact, usePostContact } from "@/hooks";
export const useForm = (
  initialState: Contact = {
    name: "",
    email: "",
    phone: "",
    picture: "",
    id: "",
  },
  onSubmit?: ({}: Contact) => void
) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (onSubmit) onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};
