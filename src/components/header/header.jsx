import style from "./header.module.css";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  const curentDate = new Date();
  return (
    <>
      <div className={style.headerBodyStyle}>
        <div className={style.headerTitleStyle}>
          To-do list first:
          <span className={style.headerDataStyle}> {curentDate.toLocaleDateString()}</span>
        </div>
        <Link className={style.logOut} to="/login">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Link>
      </div>
    </>
  );
}
