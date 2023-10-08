import React, { Fragment } from 'react'
import classes from "./GiftCard.module.css"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../store/CartSlice'
const GiftCard = () => {
  const dispatch =useDispatch();
  const giftCardPage= [
   
    {
      id: "a100",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/ValentinesMiniKetoCheesecake.jpg?v=1675898054&width=360",
      title: " Mini Heart-Shaped Keto Cheesecake: Perfect for Valentine's Day!",
      description:
        "Indulge in this Valentine's Day...",
      price: 40.99,
    },
    {
      id: "a101",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/OrganicTea.jpg?v=1673029444&width=360",
      title: "  Organic Tea",
      description:
        "Indulge in this Valentine's DayElevate your tea time with our eco-friendly, organic blend....",
      price: 9.99,
    },
{
 id: "a102",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/Dairy-freeKetoCoffeeCake.jpg?v=1673029345&width=360",
      title: "Keto Coffee Cake",
      description:
        " A delicious and rich coffee cake keto friendly and sugar-free....",
      price: 11.99,
    }, 
{
id:"a103",
img:"https://cdn.shopify.com/s/files/1/0665/2110/4628/products/KetoChocolateCake.jpg?v=1673387538&width=360",
title:"Keto Chocolate Cake 8”",
description:
        " The perfect treat for chocoholics, this Keto Chocolate Cake ....",
      price: 79.99,
    }, 
  ];
  return (
<Fragment>
<section>
      <div className={classes.appContainer}>
      <Link to="/menu"> <div style={{color:"#3D081B",textDecoration:"underline" }}> <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#3D081B", transform: "msFilter",color:"#3D081B",textDecoration:"underline" }}
        >
          <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
        </svg>back to menu</div></Link>

        <div className={classes.cardContainer}>
          <div className={classes.imageCard}>
            <div className={classes.imageContainer}>
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493"
                alt="Image Card"
                className={classes.cardImage}
              />
              <div className={classes.smallbox}>
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493"
                alt="Image Card"
                className={classes.cardImage1}
              />
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493"
                alt="Image Card"
                className={classes.cardImage1}
              />
              <img
                src="https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493"
                alt="Image Card"
                className={classes.cardImage1}
              />
              </div>
              
            </div>
          </div>
        </div>

        <div className={classes.cardContainer1}>
          <div className={classes.textCard}>
            <h6>KETODELIA RESTAURANT</h6>
            <h2>Ketodelia Restaurant Gift Card </h2>
            <h2>Card</h2>
            <p>$30.00</p>
            <h6>Denominations</h6>
            <div className={classes.btn1}>
              <a href="#" className={classes.btn2}>
              CA$30.00
              </a>
              <a href="#" className={classes.btn2}>
              CA$75.00
              </a>
              <a href="#" className={classes.btn2}>
              CA$100.00
              </a>
              <a href="#" className={classes.btn2}>
              CA$150.00
              </a>
              
            </div>
            <div>
              <h6>Quantity</h6>
              <div className={classes.btnplus}>
                <a href="#" className={classes.btn3}>
                  {" "}
                  - 1 +{" "}
                </a>{" "}
              </div>
            </div>
            <div className={classes.mainButton}>
              <div  onClick={()=>dispatch(cartAction.addToCartItem())}> Add To Cart</div>
            </div>
          </div>
            
          
          <div className={classes.textCard}>
            <p>
            Introducing our versatile Gift Cards, the perfect gift for any food lover in your life. Our Gift Cards can be used towards any menu items at Ketodelia, making it a great gift for birthdays, holidays, or any special occasion.

 Our Gift Cards are available in various denominations, so you can choose the amount that best suits your budget. They can also be used for dine-in or take-out, giving the recipient the flexibility to enjoy our delicious Keto-friendly food at their convenience.

{/* Our menu features a wide variety of Keto-friendly options, such as low-carb, high-fat dishes, perfect for those following the ketogenic diet. We have something for everyone, from savory breakfast options to mouthwatering entrees and desserts, all made with the freshest, high-quality ingredients. */}

{/* Give the gift of delicious, healthy food with our Gift Cards. They are a thoughtful and convenient way to show someone you care. Purchase yours today and share the taste of Keto-friendly food with your loved ones. */} 
            </p>
            <div>
              {"  "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#3D081B", transform: "msFilter" }}
              >
                <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path>
              </svg>
              {"  "}
              Share
            </div>
          </div>
        </div>
      </div>

      <h3 className={classes.mostLoved}>You may also like</h3>
      <div className={classes.card1}>
       {
        giftCardPage.map((data)=>{
          return (
            <Link to={`/${data.id}`} style={{textDecoration:'none'}}>
            <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid skyblue",
          }}
        >
          <img
            src={data.img}
            className={`card-img-top ${classes.imgTop}`}
            alt="..."
          />
          <div className="card-body " style={{ textAlign: "left" }}>
            <h5 className="card-title" style={{ fontSize: "18px" }}>
           {data.title}
            </h5>
            <p className="card-text" style={{ fontSize: "12px" }}>
           {data.description}
            </p>
           
            <div>${data.price}</div>
            <img src='https://labels.sfo3.digitaloceanspaces.com/files/2727Valentine%20love%20badge1676059375.png' style={{width:"40px",height:"40px"}}/>
          </div>
        </div>
        </Link>
          )
        })
       }
        </div>
        <div className={classes.star}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{  transform: "msFilter" }}
        >
          <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
        </svg>
        </div>
            </section>
</Fragment>
  )
}

export default GiftCard