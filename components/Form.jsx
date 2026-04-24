import { useFeedbackForm } from "../hooks/useFeedbackForm";
import styles from "./Form.module.css";

export default function Form() {
  const { form, status, error, handleChange, handleSubmit } = useFeedbackForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.inputTitle}>Представьтесь(контакты)</h3>
      <textarea
        disabled={status === "success"}
        className={styles.input}
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Представьтесь"
      />

      <h3 className={styles.inputTitle}>Ваше сообщение в редакцию</h3>
      <textarea
        disabled={status === "success"}
        className={styles.input}
        name="contacts"
        value={form.contacts}
        onChange={handleChange}
        placeholder="Контакты (опционально)"
      />

      <textarea
        disabled={status === "success"}
        className={styles.input}
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Ваше сообщение в редакцию"
      />

      <div className={styles.resultBox}>
        <button className={styles.button} disabled={status === "loading"}>
          {status === "loading" && "Отправка..."}
          {status === "success" && "Отправлено ✅"}
          {status === "idle" && "Отправить"}
          {status === "error" && "Повторить"}
        </button>

        {status === "success" && (
          <p className={styles.result}>Спасибо! Мы получили ваш отзыв.</p>
        )}
        {status === "error" && <p className={styles.result}>{error}</p>}
      </div>
    </form>
  );
}
