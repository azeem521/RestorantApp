import React, { Fragment, useEffect, useState } from 'react'
import classes from "./AddToCart.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../store/CartSlice'
import { Link } from 'react-router-dom'
import { createAction } from '@reduxjs/toolkit'
import CartPage from './mainPage/CartPage'
const AddToCart = () => {
 const [isCartEpety,setIsCartEpety]=useState(false)
  const cartItems=useSelector((state)=>state.cartSliceReducer.cartItem)
  const subTotal=useSelector((state)=>state.cartSliceReducer.subTotal)
    const dispatch=useDispatch()

   
useEffect(()=>{
  dispatch(cartAction.toggleCartReducer(false))
  return ()=>dispatch(cartAction.toggleCartReducer(true))
},[])
 useEffect(()=>{
  if (cartItems.length===0){
    setIsCartEpety(true)
  }
 },[cartItems])



  return (
    <div>
    {cartItems.length!==0 ? <div> 

        <div className={classes.cart}> 
        <h1>Your cart</h1> </div>
        <Link to="/menu" >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)",transform: "msFilter",marginLeft:"65%"}}><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path></svg>Back To Menu 
</Link>
       
        <div className={classes.pTag}>
            <p>PRODUCT</p>
            <p style={{marginLeft:"25%"}}>QUANTITY	</p>
            <p>TOTAL</p>
            </div>
            
        {
cartItems.map((data)=>{
  return (
    <div className={classes.addCart}>
    <div
          className={classes.card}
        
        
          key={data.id}
        >
          <img
            src={data.imgUrl}
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          </div>

          <div className={classes.cardBody}>
            <h6 className={classes.cardTitle}>
            {data.title}
            </h6>
             <div>${data.price}</div>
          </div>
        
        <div className={classes.btnplus}>
                <div className={classes.btn3}>
                 <span style={{marginRight:"20px",cursor:"pointer",fontSize:"30px",marginBottom:"5px"}} onClick={()=>dispatch(cartAction.decreaseQuantity(data.id))}> - </span>
                  <span>{data.quantity}</span>
                  <span style={{marginLeft:"20px",cursor:"pointer",fontSize:"25px",marginBottom:"3px"}}onClick={()=>dispatch(cartAction.increaseQuantity(data.id))}> + </span>
                </div>
              </div>
              <div>${(data.quantity*data.price).toFixed(2)}</div>
    </div>

  )
})
        }
        <div className={classes.cartBottom}> 
        <div className={classes.cartBottom4}>Order special instruction 
       
        <textarea className={classes.cartBottom1}>
          
         
          </textarea>
          </div>
          
          <div className={classes.cartBottom2}><h6>subTotal</h6>
          <span>:${
            isCartEpety?"0":subTotal.toFixed(2)
          }</span>
          </div>
          </div>

          <div className={classes.icon}>
          <div  className={classes.icon1}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style={{fill:" rgba(0, 0, 0, 1)",transform: "msFilter"}}><path d="M2 8v4.001h1V18H2v3h16l3 .001V21h1v-3h-1v-5.999h1V8L12 2 2 8zm4 10v-5.999h2V18H6zm5 0v-5.999h2V18h-2zm7 0h-2v-5.999h2V18zM14 8a2 2 0 1 1-4.001-.001A2 2 0 0 1 14 8z"></path></svg><p>store pickup</p></div>
          <div  className={classes.icon2}>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" style={{fill:" rgba(0, 0, 0, 1)",transform: "msFilter"}}><path d="M19.15 8a2 2 0 0 0-1.72-1H15V5a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v10a2 2 0 0 0 1 1.73 3.49 3.49 0 0 0 7 .27h3.1a3.48 3.48 0 0 0 6.9 0 2 2 0 0 0 2-2v-3a1.07 1.07 0 0 0-.14-.52zM15 9h2.43l1.8 3H15zM6.5 19A1.5 1.5 0 1 1 8 17.5 1.5 1.5 0 0 1 6.5 19zm10 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5z"></path></svg><p>local delivery</p>
          </div>
          </div>
          <div className={classes.last}>
          <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29703.013276664344!2d78.2468601508266!3d21.47335567564409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5ca942d208c47%3A0x1096416ee5560128!2sWarud%2C%20Maharashtra%20444906!5e0!3m2!1sen!2sin!4v1695728993760!5m2!1sen!2sin"
      width="255"
      height="300"
      style={{  borderRadius:"10px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
          </div>
          <div className={classes.box1}>

          </div>
          <div className={classes.btn1} onClick={()=>dispatch(cartAction.orderSuccessful())}>Check Out</div>
   
    </div>:<CartPage/>}
    </div>
  )
}

export default AddToCart