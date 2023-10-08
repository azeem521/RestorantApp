import React, { Fragment } from 'react';
import classes from  "./HorizontalCard.module.css";



const HorizontalCard = () => {
    
      return (
        <Fragment>
        
        <div className={classes.appContainer}>

        <div className={classes.cardContainer}>
        <div className={classes.textCard}>
        <h6>From our bakery</h6>
       <h1> Keto Red Velvet</h1>
      <h1>Cake 8”</h1>
      <p>Sugar-free low carb red velvet cake is naturally</p>
      <p> colored and sugar-free.</p>
    </div>
    </div>
 <div className={classes.cardContainer1}>
        <div className={classes.imageCard}>
          <img
            src="https://www.ketodelia.ca/cdn/shop/files/Keto_Red_Velvet_Cake_1662917780.png?v=1668492270&width=535" // Replace with your image URL
            alt="Image Card"
            className={classes.cardImage}
          />
        </div>
        </div>
        
    </div>
    <div className={classes.text}>
        <h1>When yummy meets healthy</h1>
        <p>Keto is not about dieting. It’s about choosing the best possible food to fuel your body and mind. 
        And, of course, pleasure is always part of the mix. </p>


<p>Based in Toronto, Ketodelia offers 100% gluten-free delicious low-carb cuisine. We take pride in 
selecting the very best ingredients for each and every meal. The meat we cook comes exclusively
from local farms so that we can make sure it’s of the finest quality. </p>
    </div>
    <div className={classes.line}></div>

    </Fragment>
      );
    };
    
 
    


export default HorizontalCard;

