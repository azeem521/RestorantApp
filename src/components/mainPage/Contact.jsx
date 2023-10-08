import React, { Fragment } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <Fragment>
      <section>
        <div
          className={classes.text}
          style={{ marginRight: "25%", marginLeft: "25%",marginTop:"5%" }}
        >
          <p>
            Welcome to our Contact Us page! Ketodelia Keto Restaurant is located
            at<b> 3187 Yonge St, Toronto</b>
          </p>

          <p>
            If you need to get in touch with us, you have several options
            available. You can give us a call at<b> 416-623-0317</b> and speak with one
            of our friendly staff members. Alternatively, you can use the <b>live
            chat</b> feature located in the bottom right corner of our website. This
            is a great option if you prefer a quick and convenient way to get in
            touch with us.
          </p>

          <p>
            Lastly, you can fill out the <b>contact form</b> on this page. Simply
            provide us with your contact information and a brief message, and we
            will get back to you as soon as possible.
          </p>

          <p>
            Ketodelia keto restaurant is committed to providing our customers
            with the best possible experience. We value your feedback and are
            always looking for ways to improve. So, please don't hesitate to
            reach out to us with any questions, comments, or suggestions. We're
            always happy to assist you in any way we can.
          </p>

          <p>
            Thank you for choosing our restaurant, we look forward to hearing
            from you!
          </p>
          <img src="https://cdn.shopify.com/s/files/1/0665/2110/4628/files/316366734_6318662481286_1019662693495287861_n_480x480.png?v=1675466925" />
        </div>
        <div className={classes.textlast}>
          Please adjust the following:
          <li>Email is invalid</li>
        </div>
        <div id="contact" className={classes.contact}>
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
            {/* <input
          type="text"
          placeholder="Your Address"
          name="address"
          
         
          required
        /> */}
            <input
              type="tel"
              placeholder="Phone Number"
              name="phoneNumber"
              required
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <div className={classes.btnBoxFormBtn}>
              <button type="submit" className={classes.btn}>
                Send
              </button>
            </div>
          </form>
        </div>
        <div>
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29703.013276664344!2d78.2468601508266!3d21.47335567564409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd5ca942d208c47%3A0x1096416ee5560128!2sWarud%2C%20Maharashtra%20444906!5e0!3m2!1sen!2sin!4v1695728993760!5m2!1sen!2sin"
            width="100%"
            height="400"
            marginBottom="5%"
            marginTop="5%"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
