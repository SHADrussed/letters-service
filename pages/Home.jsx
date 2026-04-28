import Form from "../components/Form";
import styles from "./Home.module.css";
import logo from "../src/assets/logo.svg";
import img1 from "../src/assets/photo1.png";
import img2 from "../src/assets/photo2.png";

export default function Home() {
  return (
    <div className={styles.section}>
      <div className={styles.upperPage}>
        <div className={styles.left}>
          <div className={styles.textBlock}>
            <img className={styles.logo} src={logo} alt="logo" />
            <h1 className={styles.title}>
              Письма
              <br /> в редакцию
            </h1>
            <p className={styles.description}>
              Привет, здесь мы собираем обратную связь.
              <br />
              <br />
              Как вам тема номера?
              <br />
              Какой материал этого номера вам показался самым удачным? Почему?
              <br />О чём, на ваш взгляд, стоит срочно говорить?
              <br />И тому подобное.
              <br />
              <br />
              Фактические ошибки, опечатки, типографские косяки — тоже да,
              обязательно (и заранее спасибо!).
            </p>
            <Form />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.imageFirstContainer}>
            <img className={styles.imageOne} src={img1} alt="illustration" />
          </div>
          <div className={styles.imageSecondContainer}>
            <img className={styles.imageTwo} src={img2} alt="illustration" />
          </div>
        </div>
      </div>
      <div className={styles.moreInfo}>
        <p className={styles.message}>
          Ответить каждому не обещаем, но в любом случае указывайте, пожалуйста,
          способ, которым с вами можно связаться. 
        </p>
        <p className={styles.authors}>
          Ваша редакция: Иван Шунин, Полина Лосева, Саша Дубов, Кирилл
          Игамбердиев и Яна Сергиевская
        </p>
      </div>
    </div>
  );
}
