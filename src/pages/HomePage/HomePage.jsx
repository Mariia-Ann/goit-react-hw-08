import { RiContactsBookFill } from "react-icons/ri";
import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <title>Welcome</title>
      <div className={style.homePage}>
        <h1 className={style.title}>
          Welcome to the Contact Book <span className={style.icon}>{<RiContactsBookFill size="34px" />}</span>
        </h1>
      </div>
    </>
  );
};

export default HomePage;
