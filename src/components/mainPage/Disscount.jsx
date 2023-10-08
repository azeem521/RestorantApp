import React, { Fragment } from 'react'
import classes from "./Discount.module.css";
const Disscount = () => {
  return (
    <Fragment>
 <div className={classes.appContainer}>
<div className={classes.cardContainer1}>
<div className={classes.imageCard}>
  <img
    src="https://assets.privy.com/picture_photos/3313362/original/6fdd98819ed542a0baa20fd09e771414?1689982762" // Replace with your image URL
    alt="Image Card"
    className={classes.cardImage}
  />
</div>
</div>
<div className={classes.cardContainer1}>
<div className={classes.log}>
<h3>OUR GIFT TO YOU</h3>
<h6>Sign up for 15% off your order</h6>
<form
            action="https://formspree.io/f/xqkvlqlv"
            method="POST"
            className="scroll-scale"
          >
            <input type="text" placeholder="Your Name" name="name" required />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              required
            />
          
            <div className={classes.btnBoxFormBtn}>
              <button type="submit" className={classes.btn}>
                Subscribe
              </button>
            </div>
          </form>
    <p>*By completing this form you are signing up to receive our emails and can unsubscribe at any time.</p>
          </div>
        </div>
        
        </div>
    </Fragment>
  )
}

export default Disscount