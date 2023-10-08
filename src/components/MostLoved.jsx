import React, { Fragment, useEffect, useState } from "react";
import classes from "./MostLoved.module.css";
import images from "./images (1).jpg";
import { Link } from "react-router-dom";

const MostLoved = () => {
  const mostLoved = [
    {
      id: "a1",
      img: "https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=533",
      title: "Air Fried Keto Buffalo Cauliflower Bites",
      description:
        "Lightly battered organic cauliflower tossed in homemade buffalo sauce with your choice ...",
      price: 12.99,
    },
    {
      id: "a2",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356",
      title: "Keto Chicken Soup",
      description:
        "Our Keto Chicken Soup is made with homemade organic farmers chicken and cauliflower rice...",
      price: 15.99,
    },
    {
      id: "a3",
      img: "https://www.ketodelia.ca/cdn/shop/products/NoSugarCheesecake.jpg?v=1673029341&width=360",
      title: "Keto Cheesecake",
      description:
        "A classic cheesecake, made Keto-friendly. Deliciously rich and creamy with a crumbly almond ...",
      price: 12.99,
    },
    {
      id: "a4",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our cheddar jalapeno bagels are made of almond flour, mozzarella...",
      price: 23.99,
    },
  ];

  return (
    <Fragment>
      <section>
        <h1 className={classes.mostLoved}>Most Loved</h1>
        <div className={classes.card1}>
          {/* cart start */}
          {mostLoved.map((data) => {
            return (
              <div
                className="card"
                style={{
                  width: "15rem",
                  marginRight: "15px",
                  border: "1px solid skyblue",
                }}
              >
              <Link to={`/${data.id}`}>
                <img
                  src={data.img}
                  className={`card-img-top ${classes.imgTop}`}
                  alt="..."
                /></Link>
                <div className="card-body " style={{ textAlign: "left" }}>
                  <h5 className="card-title" style={{ fontSize: "18px" }}>
                    {data.title}
                  </h5>
                  <p className="card-text" style={{ fontSize: "12px" }}>
                    {data.description}
                  </p>
                  <span className="review-rating">★★★★★(6)</span>
                  <div>${data.price}</div>
                </div>
              </div>
            );
          })}
          {/* card ended */}
        </div>
      </section>
    </Fragment>
  );
};

export default MostLoved;
