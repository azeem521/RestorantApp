import React, { Fragment } from 'react'
import classes from "./StayPage.module.css";
const StayPage = () => {
  return (
    <Fragment>
        <div className={classes.line1}> </div>
        <div className={classes.sub1}>
            <h1>Stay in the Loop</h1>
            <p>Be the first to know about new collections and exclusive offers.</p>
       <input type="email" id="email" name="email" required  placeholder="Email" className={classes.email}/>     
      {/* <input type="email" id="email" name="email" required   className={classes.email}/> */}
        <div className={classes.line2}></div>
    <div className={classes.line}></div>
    </div>
    </Fragment>
  )
}

export default StayPage;