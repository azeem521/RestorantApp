import React, { Fragment, useState } from 'react'
 import classes from "./ForgetPass.module.css"
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
const ForgetPass = () => {
  const [email,setEmail]=useState("");

let url="https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDAhjkYgb-E_dffPRgvmL5KMY0LlYyvV3w"
 const sendResetPassword=()=>{

  fetch(url,{
    method:"POST",
    body:JSON.stringify({
      requestType	:"PASSWORD_RESET",
      email:email
    })

  }).then((res)=>{
    res.json()
    .then((result)=>{
          console.log(result)
          if(result.error){
            toast.error(result.error.message,{
              position:'top-right',
              autoClose:2000,

            })
          }else{
           toast.success("Check your Email",{
            position:"top-right",
            autoClose:2000,
           })
          }
    })
  })
  .catch((e)=>{
     console.log(e)
  })
 }
 const resetPasswordHandler=(e)=>{
  e.preventDefault();
   sendResetPassword();
   
 }
  return (
    <Fragment>
<div className={classes.log}>
    <h1>Reset your password</h1>
    <p>We will send you an email to reset your password</p>
<form onSubmit={resetPasswordHandler}>

         <input
           type="email"
           placeholder="Your Email"
           name="email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           required
         /> 
         <div className={classes.btnBoxFormBtn}>
       <button type="submit" className={classes.btn}>
         Submit
       </button>
      
     </div>
     <Link to="/auth"><h6 style={{color:"#3D081B"}}>Cancel</h6></Link>
         </form>
         </div>
    </Fragment>
  )
}

export default ForgetPass