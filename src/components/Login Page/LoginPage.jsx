import style from "./LoginPage.module.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { useState } from "react";

export default function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className={style.loginPageWrapper}>
        <div className={style.loginPageLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.loginPageAuthorizationForm}>
          <form action="">
            <label htmlFor="email">Email </label>
            <input onChange={(event) => setEmail(event.target.value)} type="email" name="email" id="email" placeholder="email" />
            <br />
            <label htmlFor="password">Password </label>
            <input onChange={(event) => setPassword(event.target.value)} type="password" name="password" id="password" placeholder="password" />
            <br />
            <button type="button">
              <Link className={style.logOut} to="/">
                Sign in
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
