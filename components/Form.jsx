import { useFeedbackForm } from "../hooks/useFeedbackForm";
import styles from "./Form.module.css";
import draftsIcon from "../src/assets/drafts.svg";
import contactIcon from "../src/assets/account_circle.svg";

export default function Form() {
  const { form, status, error, handleChange, handleSubmit } = useFeedbackForm();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputBlock}>
        <img className={styles.icon} src={contactIcon} alt="Иконка контактов" />
        <textarea
          disabled={status === "success"}
          className={styles.input}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="представьтесь"
        />
      </div>

      <div className={styles.inputBlock}>
        <img className={styles.icon} src={draftsIcon} alt="Иконка сообщения" />
        <textarea
          disabled={status === "success"}
          className={styles.input}
          name="contacts"
          value={form.contacts}
          onChange={handleChange}
          placeholder="контакты"
        />
      </div>

      <div className={styles.letterSubmitWrapper}>
        <h3 className={styles.inputTitle}>ваше письмо</h3>
        <textarea
          disabled={status === "success"}
          className={styles.message}
          name="message"
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <div className={styles.resultBox}>
        <button className={styles.button} disabled={status === "loading"}>
          {status === "loading" && "отправка..."}
          {status === "success" && "отправлено ✅"}
          {status === "idle" && "отправить в редакцию"}
          {status === "error" && "повторить"}
        </button>

        {status === "success" && (
          <p className={styles.result}>спасибо! мы получили ваш отзыв.</p>
        )}
        {status === "error" && <p className={styles.result}>{error}</p>}
      </div>
    </form>
  );
}
