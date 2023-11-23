import style from './Header.module.css'
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Header() {
  const curentDate = new Date();
  return (
    <>
      <div className={style.headerBodyStyle}>
        <div className={style.headerTitleStyle}>
          {<FontAwesomeIcon icon={faList} spin />} СПИСОК СПРАВ НА:
          <span className={style.headerDataStyle}> {curentDate.toLocaleDateString()}
          </span>
        </div>
      </div>
    </>

  )
}
