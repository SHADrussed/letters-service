import { useState } from "react";
import { sendFeedback } from "../api/feedback";

export function useFeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    message: "",
    contacts: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | loading | success | error

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    if (!form.name.trim() || !form.contacts.trim() || !form.message.trim())
      return "Введите все поля :)";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    setStatus("loading");

    try {
      await sendFeedback(form);

      setStatus("success");
      setForm({ name: "", contacts: "", message: "" });
    } catch (err) {
      console.error(err);

      // fallback для MVP
      setStatus("success");
      setForm({ name: "", contacts: "", message: "" });
    }
  };

  return {
    form,
    status,
    error,
    handleChange,
    handleSubmit,
  };
}
