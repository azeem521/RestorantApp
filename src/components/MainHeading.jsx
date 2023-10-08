import React, { Fragment } from "react";
import classes from "./MainHeading.module.css";
import MostLoved from "./MostLoved";
import BrowseByCategory from "./BrowseByCategory";
import HorizontalCard from "./HorizontalCard";
import StayPage from "./StayPage";
import ContactPage from "./ContactPage";
import Footer from "./Footer";
import Map from "./Map";
import { Link } from "react-router-dom";

const MainHeading = () => {
  return (
    <Fragment>
      <section className={classes.container}>
        <div className={classes.left}>
          <h2 style={{ textAlign: "left", marginLeft: "20%" }}>
            LESS CARBS, MORE
          </h2>
          <h2 style={{ textAlign: "left", marginLeft: "20%" }}>
            {" "}
            DELICIOUS...
          </h2>
          <p style={{ textAlign: "left", marginLeft: "20%" }}>
            KETO FRIENDLY • LOW CARB • 100% GLUTEN FREE
          </p>
          <Link to="/menu" style={{textDecoration:"none"}}>
          <button type="button" className={classes.btn}>
            order online
          </button>
          </Link>
        </div>
      </section>
      <MostLoved/>
      <BrowseByCategory/>
      <HorizontalCard/>
      <Map />
      <StayPage />
      {/* <ContactPage /> */}
      {/* <Footer /> */}
    </Fragment>
  );
};

export default MainHeading;
