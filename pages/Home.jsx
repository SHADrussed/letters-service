import Form from "../components/Form";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.section}>
      <div className={styles.titleContainer}>
        <h2 className={styles.formTitle}>Отправка письма в редакцию</h2>
      </div>
      <Form />
    </div>
  );
}
