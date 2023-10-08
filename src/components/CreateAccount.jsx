import React, { Fragment, useEffect, useState } from 'react'
import classes from "./CreateAccount.module.css"
import { useDispatch } from 'react-redux';
import { cartAction } from '../store/CartSlice';
import { Link, Navigate, unstable_HistoryRouter, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const CreateAccount = () => {
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [isLogin,setIsLogin]=useState(true);

const dispatch=useDispatch();
const navigate=useNavigate()
 
let url ;
const signUpRequest=()=>{
  if(!isLogin){
  url="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAhjkYgb-E_dffPRgvmL5KMY0LlYyvV3w";
  }else{
 url="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAhjkYgb-E_dffPRgvmL5KMY0LlYyvV3w"
  }
  fetch(url, {
    method:"POST",
    body:JSON.stringify({
      email:email,
      password:password,
      returnSecureToken:true,
    })
  })
  .then((res)=>{
    res.json().then((result)=>{
    console.log(result)
    if(!result.error){
      toast.success("Login successful",{
        position:'top-right',
        autoClose:2000,
      })
      dispatch(cartAction.saveTokenLocalStorage(result.idToken))
      navigate("/menu")
    }else{
      toast.error(result.error.message,{
        position:'top-right',
        autoClose:2000,
      })
    }
    })
    
  })
  .catch((e)=>{
   console.log(e)
  })
}



   const submitHandler=(e)=>{
      e.preventDefault();
      signUpRequest()
      
   }

   useEffect(()=>{
    dispatch(cartAction.toggleCartReducer(false))
    return ()=>dispatch(cartAction.toggleCartReducer(true))
   },[])


  return (
    <Fragment>
        <div className={classes.log}>
    <h1>{isLogin ? "Log-In":"Create Account"}</h1>

    
<form onSubmit={submitHandler}>

        {!isLogin &&  <input
           type="text"
           placeholder="Your Name"
           name="First Name"
           value={name}
           onChange={(e)=>setName(e.target.value)}
           required
         /> }
          {!isLogin && <input
           type="text"
           placeholder="Your Name"
           name="Last Name"
          
         /> }
          <input
           type="email"
           placeholder="Your Email"
           name="email"
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           required
         /> 
          <input
           type="password"
           placeholder="password"
           name="Password"
           value={password}
           onChange={(e)=>setPassword(e.target.value)}
           required
         /> 
         
        {isLogin &&<Link to="/forget"><p style={{color:"#3D081B"}}>Forget yout account</p></Link>}
         <div className={classes.btnBoxFormBtn}>
       <button type="submit" className={classes.btn} >
        {isLogin ? "Log-in":"Register"}
       </button>
       {isLogin && <h6 onClick={()=>setIsLogin(false)}>Create account</h6>}
       {!isLogin && <h6 onClick={()=>setIsLogin(true)}>All ready have an Account go to login</h6>}
         </div>
       
     
         </form>
         {/* <p>Forget yout account</p>
          <div className={classes.btnBoxFormBtn}>
       <button type="submit" className={classes.btn}>
         Login
       </button>
      
     </div>
     <h6>Create account</h6> */}
         </div>
    </Fragment>
  ) 
};

export default CreateAccount