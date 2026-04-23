import { useFeedbackForm } from "../hooks/useFeedbackForm";
import styles from "./Form.module.css";

export default function Form() {
  const { form, status, error, handleChange, handleSubmit } = useFeedbackForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.inputTitle}>Представьтесь(контакты)</h3>
      <textarea
        className={styles.input}
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Представьтесь"
      />

      <h3 className={styles.inputTitle}>Ваше сообщение в редакцию</h3>
      <textarea
        className={styles.input}
        name="contacts"
        value={form.contacts}
        onChange={handleChange}
        placeholder="Контакты (опционально)"
      />

      <textarea
        className={styles.input}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Ваше сообщение в редакцию"
      />

      <button className={styles.button} disabled={status === "loading"}>
        {status === "loading" ? "Отправка..." : "Отправить"}
      </button>

      {status === "success" && <p>Отправлено ✅</p>}
      {status === "error" && <p>{error}</p>}
    </form>
  );
}
