import React, { useState } from 'react';
import Layout from '../core/Layout';
import {signUp} from '../auth';

const Signup = () => {

   const [values, setValues] = useState({
      name: 'FirstName LastName',
      email: 'email@gmail.com',
      phone: '1234567890',
      password: 'abcd@1234',
      error: '',
      success: ''
   })

   const { name, email, phone, password, error,success } = values;

   const handleOnChange = name => (e) => {
      setValues({
         ...values,
         [name]: e.target.value
      })
   };


   const handleFormSubmit = e => {
      e.preventDefault();
      signUp({ name, email, phone, password })
         .then(data => {
            if (data.error) {
               setValues({ ...values, error: data.error, success: false })
            }
            else {
               setValues({
                  ...values,
                  name: '',
                  email: '',
                  phone: '',
                  password: '',
                  error: '',
                  success: true
               })
            }
         })
   };

   const showError = () =>(
      <div className="alert alert-danger" style={{display: error ? '': 'none'}}>
         {error}
      </div>
   );

   const showSuccess = () =>(
      <div className="alert alert-success" style={{display: success ? '': 'none'}}>
         New account is created. Please sign in.
      </div>
   );

   const signUpForm = () => (
      <form onSubmit={handleFormSubmit}>
         <div className="form-group">
            <label className="text-muted">Name:</label>
            <input onChange={handleOnChange('name')} type="text" className="form-control" value={name} required />
         </div>

         <div className="form-group">
            <label className="text-muted">Email:</label>
            <input onChange={handleOnChange('email')} type="email" className="form-control" value={email} required />
         </div>

         <div className="form-group">
            <label className="text-muted">Phone:</label>
            <input onChange={handleOnChange('phone')} type="number" className="form-control" value={phone} required />
         </div>

         <div className="form-group">
            <label className="text-muted">Password:</label>
            <input onChange={handleOnChange('password')} type="password" className="form-control" value={password} required />
         </div>

         <button className="btn btn-outline-primary">Submit</button>
         {/* <p>
            {JSON.stringify(values)}
         </p> */}
      </form>
   );

   return (
      <Layout title="Signup" 
               description="This is a jumbotron that occupies the entire horizontal space of its parent." 
               className="container col-md-8 offset-md-2">
         {showError()}
         {showSuccess()}
         {signUpForm()}
      </Layout>
   )
};

export default Signup;