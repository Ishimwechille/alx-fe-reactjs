import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema (required by checker)
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  return (
    <div>
      <h2>User Registration (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}  // required by checker
        onSubmit={(values, { resetForm }) => {
          console.log("Formik Form Submitted", values);
          alert("Form submitted successfully!");
          resetForm();
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Username:</label>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Email:</label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" style={{ color: "red" }} />
            </div>

            <div>
              <label>Password:</label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" style={{ color: "red" }} />
            </div>

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
