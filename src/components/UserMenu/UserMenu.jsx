import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import style from "./UserMenu.module.css";

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

  return (
    <div className={style.userMenu}>
        <p className={style.link}>Welcome, {user.name}</p>
        <button className={style.btn} type="button" onClick={() => dispatch(logOut())}>Log Out</button>
    </div>
  )
}

export default UserMenu