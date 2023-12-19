import style from "./LoginPage.module.css";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className={style.loginPageWrapper}>
        <div className={style.loginPageLogo}>
          <img src="/logo.png" alt="logo" />
        </div>
        <div className={style.loginPageAuthorizationForm}>
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="email" />
            <br />
            <label htmlFor="password">Password </label>
            <input type="password" name="password" id="password" placeholder="enter password" />
            <br />
            <button type="button">
              <Link className={style.logOut} to="/">
                Sign in
              </Link>
            </button>
            <button>
              <Link className={style.test} to="/registration">
                Registration
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
