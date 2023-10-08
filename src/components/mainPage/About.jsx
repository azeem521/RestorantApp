import React, { Fragment } from "react";
import classes from "./About.module.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Fragment>
      <div className={classes.appContainer}>
        <div className={classes.cardContainer1}>
          <div className={classes.imageCard}>
            <img
              src="https://www.ketodelia.ca/cdn/shop/files/316326066_6318662482886_6362087473845255281_n.png?v=1674936588&width=535" // Replace with your image URL
              alt="Image Card"
              className={classes.cardImage}
            />
          </div>
        </div>
        <div className={classes.cardContainer}>
          <div className={classes.textCard}>
            
            <h2>
              {" "}
              When yummy meets healthy 
            </h2>
            
            <p>Keto is not about dieting. It’s about
              choosing the best possible food to fuel your body and mind. And,
              of course, pleasure is always part of the mix.</p>
            
          </div>
        </div>
      </div>
      <div className={classes.text}>
        <h1></h1>
        <p>
          At Ketodelia, we're passionate about providing delicious,
          <b>keto-friendly meals</b> that are not only good for you, but also taste
          amazing. Our restaurant, based in Toronto, offers <b>100% gluten-free,</b>
          low-carb cuisine that is carefully crafted using only the highest
          quality ingredients.
        </p>

        <p>
          {" "}
          Our menu is designed to satisfy all yourcravings, from our almond
          crust pizzas to our creamy pasta dishes, burgers, and even <b>sugar-free</b>
          desserts. All of our meals are <b>homemade</b> and prepared to order,
          ensuring that you're getting the freshest and most flavorful food
          possible.{" "}
        </p>
        <p>
          {" "}
          We take great care in sourcing our ingredients, using only the <b>finest
          quality</b> meat from local farms and the <b>highest quality  olive, coconut,
          and avocado oils</b>, as well as the healthiest ghee butter and grass-fed
          butter. We believe that a healthy diet doesn't have to sacrifice taste
          and pleasure, and that's why we've created a menu that appeals to
          everyone, regardless of their dietary restrictions.
        </p>
        <p>
          {" "}
          Our team is highly professional and <b>specialized in keto low carb diet,</b>
          ensuring that you're getting expert advice and guidance when it comes
          to your meal choices. We are <b>strict on our ingredients</b> and no
          preservatives, artificial food coloring, and restricted products are
          used in our food.{" "}
        </p>
        <p>
          We're proud to offer <b>pickup and same-day or next-day delivery </b>in
          Toronto and nearby cities, making it easy for you to enjoy our
          delicious keto-friendly meals whenever and wherever you choose. Visit
          us today and discover the taste of healthy eating at its finest!{" "}
        </p>
      </div>
      <div className={classes.btnBoxFormBtn}>
       <Link to="/menu"><button type="submit" className={classes.btn}>
         Explore Our Menu
       </button></Link>
      
     </div>
      <div className={classes.line}></div>
    </Fragment>
  );
};

export default About;
