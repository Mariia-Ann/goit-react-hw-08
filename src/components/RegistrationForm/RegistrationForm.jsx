import { ErrorMessage, Field, Form, Formik } from "formik";
import style from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { useId } from "react";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  email: Yup.string().email("Please enter a valid email").required("Required"),
  password: Yup.string()
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailFieldId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div className={style.label}>
          <label htmlFor={nameId}>Name</label>
          <Field className={style.field} type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" className={style.error} />
        </div>
        <div className={style.label}>
          <label htmlFor={emailFieldId}>Email</label>
          <Field
            className={style.field}
            type="email"
            name="email"
            id={emailFieldId}
          />
          <ErrorMessage name="email" component="span" className={style.error} />
        </div>
        <div className={style.label}>
          <label htmlFor={passwordId}>Password</label>
          <Field
            className={style.field}
            type="password"
            name="password"
            id={passwordId}
          />
          <ErrorMessage
            name="password"
            component="span"
            className={style.error}
          />
        </div>

        <button className={style.btnForm} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
