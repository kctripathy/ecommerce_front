import { API_URL } from '../config';

/**
 * This method will signup or create a new user
 * @param {*} user 
 */
export const signUp = user => {

    return fetch(`${API_URL}/signup`, {
       method: "POST",
       headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
       },
       body: JSON.stringify(user)
    })
       .then(response => {
          return response.json()
       })
       .catch(err => {
          console.log(err)
       })
 };

/**
 * This method will sign in the user
 * @param {*} user 
 */
 export const signIn = user => {

    return fetch(`${API_URL}/signin`, {
       method: "POST",
       headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
       },
       body: JSON.stringify(user)
    })
       .then(response => {
          return response.json()
       })
       .catch(err => {
          console.log(err)
       })
 };


 /**
  * This method will set the local storage after successful login
  * @param {*} data 
  * @param {*} next 
  */
export const authenticate = (data,next)=>{
   if (typeof window !== "undefined"){
      localStorage.setItem('jwt',JSON.stringify(data));
      next();
   }
};

/**
 * 
 * @param {*} next 
 */
export const signout = (next) =>{
   if (typeof window !== "undefined"){
      localStorage.removeItem('jwt');
      next();

      fetch(`${API_URL}/signout`,{
         method: "GET"         
      })
      .then(response=>{
         console.log(response);
      })
      .catch(err=>{
         console.log(err);
      })
   }
};

/**
 * This method will check if user has logged into the system or not
 */
export const isAuthenticated = () =>{
   debugger;
   if (typeof window === "undefined"){
      return false;
   }
   if (localStorage.getItem('jwt')){
      return JSON.parse(localStorage.getItem('jwt'));
   }
   else
   {
      return false; 
   }
};