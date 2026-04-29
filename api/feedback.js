import { API_URL, USE_MOCK } from "../src/config/api";
import { mockSendFeedback } from "./mocker";

export async function sendFeedback(data) {
  if (USE_MOCK) {
    return mockSendFeedback(data);
  }

  const res = await fetch(`${API_URL}/send-letter`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    console.log("API URL:", import.meta.env.VITE_API_URL);
    throw new Error("Ошибка отправки");
  }

  return res.json();
}
