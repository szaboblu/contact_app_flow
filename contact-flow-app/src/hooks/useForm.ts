import { FormState } from "./../types";
import { useState } from "react";

export const useForm = (
  initialState: FormState = {
    name: "",
    email: "",
    phone: "",
  },
  onSubmit?: ({}: FormState) => void
) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("submit", formData);
    onSubmit?.(formData);
  };

  return { formData, handleInputChange, handleSubmit };
};
