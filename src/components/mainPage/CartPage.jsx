import React, { Fragment } from 'react'
import classes from "./CartPage.module.css"
import { Link } from 'react-router-dom'
const CartPage = () => {
  return (
   <Fragment>
<div className={classes.log}>
    <h1>Your cart is empty</h1>
    
<form>
         <div className={classes.btnBoxFormBtn}>
       <Link to="/menu"><button type="button" className={classes.btn}>
         Back to menu
       </button></Link>
      
     </div>
     
         </form>
         </div>
   </Fragment>
  )
}

export default CartPage