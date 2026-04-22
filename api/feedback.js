export async function sendFeedback(data) {
  const res = await fetch("http://192.168.10.64:8000/send-letter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Ошибка отправки");
  }

  return res.json();
}
