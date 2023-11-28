import style from "./RegistrationPage.module.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function RegistrationPage(props) {
  return (
    <>
      <div className={style.loginPageWrapper}>
        <div className={style.loginPageLogo}>
          <img src={logo} alt="logo" />
        </div>
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.firstName) {
              errors.firstName = "required field";
            }
            if (!values.lastName) {
              errors.lastName = "required field";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <div className={style.loginPageAuthorizationForm}>
            <Form action="">
              <label htmlFor="firstName">First Name</label>
              <Field type="firstName" name="firstName" id="firstName" placeholder="enter first name" />
              <ErrorMessage name="firstName" component="div" />
              <label htmlFor="lastName">Last Name</label>
              <Field type="lastName" name="lastName" id="lastName" placeholder="enter last name" />
              <ErrorMessage name="lastName" component="div" />
              <label htmlFor="email">Email </label>
              <Field type="email" name="email" id="email" placeholder="email" />
              <ErrorMessage name="email" component="div" />
              <br />
              <br />
              <button type="submit">
                <Link className={style.logOut} to="/">
                  to register
                </Link>
              </button>
              <button>
                <Link className={style.logOut} to="/login">
                  Sign in
                </Link>
              </button>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  );
}
