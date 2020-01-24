import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Layout from '../core/Layout';
import { signIn, authenticate, isAuthenticated } from '../auth';

const Signin = () => {

   const [values, setValues] = useState({
      email: 'admin@gmail.com',
      password: 'abcd@1234',
      loading: false,
      error: '',
      redirectToReferer: ''
   })

   const { email, password, error, loading, redirectToReferer } = values;
   const {user}=isAuthenticated();

   const handleOnChange = name => (e) => {
      setValues({
         ...values,
         [name]: e.target.value
      })
   };


   const handleFormSubmit = e => {
      e.preventDefault();
      setValues({ ...values, error: false, loading: true });
      signIn({ email, password })
         .then(data => {
            if (data.error) {
               setValues({ ...values, error: data.error, loading: false })
            }
            else {
               authenticate(data, () => {
                  setValues({
                     ...values,
                     redirectToReferer: "/",
                     error: '',
                     loading: false
                  })
               })
            }
         })
   };

   const showError = () => (
      <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
         {error}
      </div>
   );

   const showLoading = () => (
      <div className="alert alert-info" style={{ display: loading ? '' : 'none' }}>
         Loading....
      </div>
   );

   const redirectUser = () => {
      if (redirectToReferer) {
         if (user && user.role === 1)
            return <Redirect to="/admin/dashboard" />
         else
         return <Redirect to="/dashboard" />
      }
   }

   const signInForm = () => (
      <form onSubmit={handleFormSubmit}>

         <div className="form-group">
            <label className="text-muted">Email:</label>
            <input onChange={handleOnChange('email')} type="email" className="form-control" value={email} required />
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
      <Layout title="Signin"
         description="Sign in form description. Sample tex. This is a jumbotron that occupies the entire horizontal space of its parent."
         className="container col-md-8 offset-md-2">
         {showError()}
         {showLoading()}
         {signInForm()}
         {redirectUser()}
      </Layout>
   )
};

export default Signin;