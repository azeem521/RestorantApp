import { Fragment } from "react"
import classes from "./logInPage.module.css"

const LogInPage = () => {
  return (
    <Fragment> 
    <div className={classes.log}>
    <h1>Log-In</h1>
<form>

         <input
           type="email"
           placeholder="Your Email"
           name="email"
           required
         /> 
         <input
           type="password"
           placeholder="Your password"
           name="password"
           required
         />
         <p>Forget yout account</p>
          <div className={classes.btnBoxFormBtn}>
       <button type="submit" className={classes.btn}>
         Login
       </button>
      
     </div>
     <h6>Create account</h6>
        
</form>
</div>
</Fragment> 

)
}

export default LogInPage