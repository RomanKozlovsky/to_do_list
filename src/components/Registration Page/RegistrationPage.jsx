import style from "./RegistrationPage.module.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";

export default function RegistrationPage(props) {

  const [newUser, setNewUser] = useState({});

  console.log(props.name)

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
            if (values.firstName.length < 2) {
              errors.firstName = "required";
            }
            if (values.lastName.length < 2) {
              errors.lastName = "required";
            }
            if (!values.email) {
              errors.email = "required";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = "invalid email address";
            }
            return errors;
          }}
          onSubmit={(values) => {
            setNewUser(values)
            alert(JSON.stringify(values));
          }}
        >
          <div className={style.loginPageAuthorizationForm}>
            <Form >
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" placeholder="enter first name" />
              <ErrorMessage name="firstName">{msg => <div>please enter first name</div>}</ErrorMessage>

              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" placeholder="enter last name" />
              <ErrorMessage name="lastName">{msg => <div>please enter last name</div>}</ErrorMessage>

              <label htmlFor="email">Email</label>
              <Field name="email" placeholder="enter email" />
              <ErrorMessage name="email">{msg => <div>please enter email</div>}</ErrorMessage>

              <br />
              <button  type="submit" >To register</button>
              <button >
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
