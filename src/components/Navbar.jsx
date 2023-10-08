


import React, { Fragment } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../store/CartSlice";

const Navbar = () => {
   const dispatch= useDispatch()
   const cartItem1=useSelector((state)=>state.cartSliceReducer.cartItem)
  return (
    <Fragment>
    <div className={classes.headBorder}>
      <p>order now and enjoy instant delivery on orders over $25</p>
    </div>
      <div
        className={`d-flex justify-content-space-between    ${classes.container}`}
      >
      <Link to="/"><div>
          <img src="https://www.ketodelia.ca/cdn/shop/files/Ketodelia_Logo_1b.png?v=1664321580&width=500" />
        </div></Link>
        
        <div>
          <ul className={classes.nav}>
            <li className={classes.navItem} >
              
              <Link to="/menu" style={{textDecoration:"none",color:"#3D081B"}}>Menu</Link>
            </li>

            <li className={classes.navItem}>
            <Link to="/faq" style={{textDecoration:"none",color:"#3D081B"}}>FAQ</Link>
            </li>
            <li className={classes.navItem}>
            <Link to="/about" style={{textDecoration:"none",color:"#3D081B"}}>About</Link>
                
              
            </li>
            <li className={classes.navItem}>
            <Link to="/gift-card" style={{textDecoration:"none",color:"#3D081B"}}>Gift Card</Link>
            </li>
            <li className={classes.navItem}>
            <Link to="/contact" style={{textDecoration:"none",color:"#3D081B"}}>Contact</Link>
            </li>
       </ul>
          
          {/* s */}
        </div>
        
        <div className={classes.account}>
      <ul className={` nav  w-100  d-flex   ${classes.acoount1}`}>
      <li className="nav-item"><a href="tel:9370419427"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter"}}>
        <path d="m20.487 17.14-4.065-3.696a1.001 1.001 0 0 0-1.391.043l-2.393
         2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 
         1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 
         6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992
       0 0 0 .648-.291l1.86-2.171a.997.997 0 0 0-.085-1.39z">
        </path></svg></a></li>
      <li className="nav-item"><Link to="/magnify"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter"}}>
        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952
        0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8
         8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg></Link></li>
        <li className="nav-item"><Link to="/auth">
        <svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24"
        style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter"}}>
        <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5
        6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
        </svg>
        </Link></li>
        
       
        
        <li className="nav-item me-4"><Link to="/cart" style={{textDecoration:"none"}} onClick={()=>{setTimeout(()=>{dispatch(cartAction.toggleCartReducer(false))},0)}}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        style={{fill: "rgba(0, 0, 0, 1)",transform:"msFilter"}}>
        <path d="M21 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a1 1 0 0 0-1-1zm-9 9c-3.309
         0-6-2.691-6-6h2c0 2.206 1.794 4 4 4s4-1.794 4-4h2c0 3.309-2.691 6-6 6z"></path>
         </svg>
         </Link>
         <div className={classes.noCart}>{cartItem1.length}</div>
        </li>
      
        </ul>
        
     </div>
        </div>
       
        <div className={classes.line}></div>
       
      
    </Fragment>
  );
};

export default Navbar;
