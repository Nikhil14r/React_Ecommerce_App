import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(8, 'Must be at least 8 characters').required('Password is required'),
  });

  const onSubmit = (values, { setSubmitting }) => {
    console.log('User Signup Data:', values);

    setSubmitting(false);
  };

  return (
    <div className='bg-black login center-content'>
      <div className="auth-container">
        <h2 className="text-center">Signup</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="auth-form">
            <div className="form-group">
              <label>Name:</label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage name="name" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <Field type="password" name="password" className="form-control" />
              <ErrorMessage name="password" component="div" className="error-message" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary me-2">Signup</button>
              <Link to='/login'>
                <button type="" className="btn btn-outline-primary">Login</button>
              </Link>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
