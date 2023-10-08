import React, { Fragment } from 'react'
import classes from "./Page.module.css";
import { cartAction } from '../store/CartSlice';
import { useDispatch } from 'react-redux';




const Page1 = () => {
  const dispatch=useDispatch();
  const browsePage= [
    {
      id: "a1",
      img: "https://www.ketodelia.ca/cdn/shop/products/AlmondFlourWaffles.jpg?v=1673029390&width=360",
      title: "Almond Flour Belgian Waffle",
      description:
        "Our almond flour waffles are crispy on the outside, and ...",
      price: 10.99,
    },
    {
      id: "a2",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoLoxandCreamCheeseBagel.jpg?v=1673029393&width=360",
      title: "Keto Lox and Cream Cheese Bagel",
      description:
        "Keto bagel (almond flour and mozzarella), cream cheese...",
      price: 12.99,
    },
    {
      id: "a3",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoStrawberryJam.png?v=1673029403&width=360",
      title: "Keto Strawberry Jam",
      description:
        "Our Keto Strawberry Jam is delicious on just about everything. It's...",
      price: 8.99,
    },
    {
      id: "a4",
      img: "https://www.ketodelia.ca/cdn/shop/products/RaspberryChiaPudding.jpg?v=1673029406&width=360",
      title: "Keto Raspberry Chia Pudding",
      description:
        "Our keto pudding is made of fresh raspberries, chia seeds and 35%",
      price: 15.99,
    },
    {
      id: "a5",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our cheddar jalapeno bagels are made of almond flour, mozzarella...",
      price: 23.99,
    },
    {
      id: "a6",
      img: "https://www.ketodelia.ca/cdn/shop/products/BlueberryKetoBagels.jpg?v=1679087774&width=360",
      title: "Keto Bagel Blueberry - 4 pack",
      description:
        "Our blueberry keto bagels are made of almond flour, mozzarella,....",
      price: 23.99,
    }, 
    {
      id: "a7",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsAssorted.jpg?v=1679087749&width=360",
      title: "Assorted Keto Bagels - 4 Pack",
      description:
        "Our keto bagels are made of almond flour, mozzarella and cream cheese....",
      price:  23.99,
    },
    {
      id: "a8",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our keto bagels are made of almond flour, mozzarella and cream cheese....",
      price: 23.99,
    },
     {
      id: "a9",
      img: "https://www.ketodelia.ca/cdn/shop/products/HalalTurkeyBaconWrappedKetoBagels.jpg?v=1679087926&width=360",
      title: "Keto Bagel Turkey Bacon Wrapped 4 Pack",
      description:
        "Our bacon wrapped keto bagels are made of almond flour, mozzarella, cream ....",
      price: 23.99,
    },
    {
      id: "a10",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoCinnamonBagels.jpg?v=1678745477&width=360",
      title: "Keto Cinnamon Sugar (No Sugar) Bagels - 4 pack",
      description:
        "Our bacon wrapped keto bagels are made of almond flour, mozzarella, cream ...",
      price: 23.99,
    },
  ];
  return (
    <Fragment>
        

    <div className={classes.border}></div>
    <div className={classes.filter}>
    <ul className="nav">
    
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
                
              filter</a></li>
    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">
                
               avalibility</a></li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
                
               price</a></li>
    </ul>
    
    <ul className="nav">
    
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
                
                sorted by</a></li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
                
                feature</a></li>
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="#">
                
                5 product</a></li>
                </ul>
    
    </div>
    
       <div className={classes.appContainer}>
       

        {
          browsePage.map((data)=>{
               return (
                <div className={classes.cardContainer}>
          <div className={classes.imageCard}>
            <div className={classes.imageContainer}>
              <img
                src={data.img}
                alt="Image Card"
                className={classes.cardImage}
              />
              <div className={classes.text}>
                <h6>{data.title}</h6>
                <p>{data.description}</p>
                <span className={classes.reviewRating}>★★★★★ (6)</span>
            <div>{data.price}</div>
            <div className={classes.smallStar}>★ ★ ★ ★ ★ (2)</div>
            <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data.id,
            imgUrl:data.img,
            title:data.title,
            price:data.price,
            quantity:1,

          }))}}>Add to Order</button>
              </div>
              </div>
            </div>
          </div>
               )
          })
        }
          
        </div>

    </Fragment>
  )
}

export default Page1