import style from "./Header.module.css";
import { faList, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Header() {
  const curentDate = new Date();
  return (
    <>
      <div className={style.headerBodyStyle}>
        <div className={style.headerTitleStyle}>
          {<FontAwesomeIcon icon={faList} spinReverse />} TO-DO LIST:
          <span className={style.headerDataStyle}>
            {" "}
            {curentDate.toLocaleDateString()}
          </span>
        </div>
        <Link className={style.logOut} to="/login">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </Link>
      </div>
    </>
  );
}
