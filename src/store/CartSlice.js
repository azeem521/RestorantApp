import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';

const initialState = {
 isCartShow: true,
  cartItem: [],
  subTotal:0,
  isAuthenticate:!!localStorage.getItem("token")
  
};
const cartSlice = createSlice({
  name: "Cart",
  initialState: initialState,
  reducers: {
     
    toggleCartReducer: (state, action) => {
      state.isCartShow = action.payload;
    },

    addToCartItem (state, action) {
     const isProductExist=state.cartItem.find((item)=>item.id===action.payload.id)
     if(isProductExist){
      isProductExist.quantity++;
      state.subTotal+=isProductExist.price;
      toast.success('Quantity has increased!', {
        position: "top-right",
        autoClose: 2000,
      })
     }else{
      state.cartItem.push(action.payload)
      state.subTotal+=action.payload.price;
      toast.success('Product has added successfully!', {
        position: "top-right",
        autoClose: 2000, // Close the toast after 3 seconds
      });
     }
     
      console.log(state.cartItem)
    },
    increaseQuantity: (state,action)=>{
     const existProduct=state.cartItem.find((item)=>item.id===action.payload)
     existProduct.quantity++
     state.subTotal+=existProduct.price;
     toast.success('Your product Quantity  is Increased', {
      position: "top-right",
      autoClose: 2000,
     })
    },
    decreaseQuantity:(state,action)=>{
      const existProduct=state.cartItem.find((item)=>item.id===action.payload)
      if(existProduct.quantity>1){
         existProduct.quantity--;
         state.subTotal-=existProduct.price;
         toast.success('Your product Quantity is Decreased', {
          position: "top-right",
          autoClose: 2000,
         })
      }else{
         const existProduct=state.cartItem.find((item)=>item.id===action.payload)
         state.subTotal-=existProduct.price;
        state.cartItem=state.cartItem.filter((item)=>item.id!=action.payload)
        toast.success('Your product Quantity is Removed', {
          position: "top-right",
          autoClose: 2000,
         })
      }
      
    },
    orderSuccessful:()=>{
      toast.success('Your order is successfull!', {
        position: "top-right",
        autoClose: 2000,
    })
    
    },
    saveTokenLocalStorage:(state,action)=>{
      state.isAuthenticate=true
      localStorage.setItem("token",action.payload)


    }
  },
});
export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
