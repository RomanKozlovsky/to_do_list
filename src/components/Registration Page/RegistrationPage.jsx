import style from "./RegistrationPage.module.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { Formik, Form, Field, ErrorMessage, getIn } from "formik";

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
              errors.firstName = "errors";
            }
            if (!values.lastName) {
              errors.lastName = "required";
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
          {({ errors, touched }) => (
            <div className={style.loginPageAuthorizationForm}>
              <Form action="">
                {errors.firstName && touched ? (
                  <div className={style.errorInput}>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" placeholder="enter first name" />
                    <ErrorMessage name="firstName" component="div" />
                  </div>
                ) : (
                  <div className={style.test3}>
                    <label htmlFor="firstName">First Name</label>
                    <Field name="firstName" placeholder="enter first name" />
                    <ErrorMessage name="firstName" component="div" />
                  </div>
                )}

                {errors.lastName && touched ? (
                  <div className={style.errorInput}>
                    <label htmlFor="lastName">Last Name</label>
                    <Field name="lastName" placeholder="enter last name" />
                    <ErrorMessage name="lastName" component="div" />
                  </div>
                ) : (
                  <div className={style.test3}>
                    <label htmlFor="lastName">First Name</label>
                    <Field name="lastName" placeholder="enter last name" />
                    <ErrorMessage name="lastName" component="div" />
                  </div>
                )}

                {errors.email && touched ? (
                  <div className={style.errorInput}>
                    <label htmlFor="email">Email</label>
                    <Field name="email" placeholder="enter email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                ) : (
                  <div className={style.test3}>
                    <label htmlFor="email">Email</label>
                    <Field name="email" placeholder="enter email" />
                    <ErrorMessage name="email" component="div" />
                  </div>
                )}
                <br />
                <br />
                <button type="submit">
                  <Link type="submit" className={style.logOut} to="/">
                    To register
                  </Link>
                </button>
                <button>
                  <Link className={style.logOut} to="/login">
                    Sign in
                  </Link>
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}
