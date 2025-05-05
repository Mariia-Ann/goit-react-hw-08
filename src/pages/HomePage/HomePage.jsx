import { RiContactsBookFill } from "react-icons/ri";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <title>Welcome</title>
      <div className={style.homePage}>
        <h1 className={style.title}>
          Welcome to the Contact Book{" "}
          <span className={style.icon}>
            {<RiContactsBookFill size="34px" />}
          </span>
        </h1>
      </div>
      <section className={style.homeText}>
      <p>
        <strong>Contact Book</strong> is a web application for managing
        contacts, allowing users to easily add, edit, and delete contacts. The
        interface lets you store important data such as name and phone number,
        and organize them in a convenient way.
      </p>

      <h2 className={style.subtitle}>Features:</h2>
      <ul>
        <li>
          <strong>Registration and Login</strong>: Create an account using a
          unique email and a strong password. After successful registration, you
          will be directed to your personal page where you can add new contacts
          and edit existing ones.
        </li>
        <li>
          <strong>Adding and Filtering Contacts</strong>: Easily add new
          contacts via a form. For convenience, there is a search filter by name
          or phone number.
        </li>
        <li>
          <strong>Security and Authentication</strong>: Secure access to your
          information is ensured with JWT tokens. All your data is stored on the
          server via a <strong>REST API</strong>, allowing synchronization
          across different devices.
        </li>
      </ul>

      <h2 className={style.subtitle}>Technologies:</h2>
      <ul>
        <li>
          <strong>React</strong>: for building the interface.
        </li>
        <li>
          <strong>Redux</strong> and <strong>Redux Toolkit</strong>: for
          managing the app state.
        </li>
        <li>
          <strong>Formik</strong> and <strong>Yup</strong>: for efficient form
          handling and validation.
        </li>
        <li>
          <strong>React Router</strong>: for navigation between pages.
        </li>
        <li>
          <strong>Axios</strong>: for interacting with the API.
        </li>
        <li>
          <strong>React Icons</strong>: for convenient icons in the interface.
        </li>
      </ul>

      <h2 className={style.subtitle}>Additional Features:</h2>
      <ul>
        <li>Responsive design for mobile and desktop devices.</li>
        <li>
          Implementation of status notifications using{" "}
          <strong>react-hot-toast</strong>.
        </li>
        <li>
          Use of <strong>Redux Persist</strong> for state preservation even
          after a page reload.
        </li>
      </ul>
      </section>
    </>
  );
};

export default HomePage;
