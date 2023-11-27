import style from "./RegistrationPage.module.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { useFormik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
};

function onSubmit(values) {
  console.log(values);
}

function Validate(values) {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }
  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
}
export default function RegistrationPage(props) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    Validate,
  });


  return (
    <>
      <div className={style.loginPageWrapper}>
        <div className={style.loginPageLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={style.loginPageAuthorizationForm}>
          <form onSubmit={formik.handleSubmit} action="">
            <label htmlFor="firstName">First Name</label>
            <input
              value={formik.values.firstName}
              onChange={formik.handleChange}
              type="firstName"
              name="firstName"
              id="firstName"
              placeholder="enter first name"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              value={formik.values.lastName}
              onChange={formik.handleChange}
              type="lastName"
              name="lastName"
              id="lastName"
              placeholder="enter last name"
            />
            <label htmlFor="email">Email </label>
            <input value={formik.values.email} onChange={formik.handleChange} type="email" name="email" id="email" placeholder="email" />
            <br />

            <br />
            <button type="button">
              <Link className={style.logOut} to="/">
                to register
              </Link>
            </button>
            <button>
              <Link className={style.logOut} to="/login">
                Sign in
              </Link>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
