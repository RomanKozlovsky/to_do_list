import style from './header.module.css'
import img from './img/logo.png'
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Header() {
  const curentDate = new Date();
  return (
    <>
      <div className={style.headerBodyStyle}>
        <div className={style.headerTitleStyle}>
          {<FontAwesomeIcon icon={faList} spin />} СПИСОК СПРАВ НА:
          <span className={style.headerDataStyle}> {curentDate.toLocaleDateString()}
          </span>
        </div>
        <div className={style.headerLogoStyle}>
          <img src={img} alt='error'/>
        </div>
      </div>
    </>

  )
}

export default Header;