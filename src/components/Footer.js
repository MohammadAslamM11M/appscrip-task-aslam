import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footerSytle">
      <div className="subscriptionGrid">
        <div>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <input
            type="text"
            placeholder="Enter your e-mail..."
            className="emailInput"
          />
          <button className="subButton">SUBSCRIBE</button>
        </div>
        <div>
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h2>CURRENCY</h2>
          <div className="flagAndCurrency">
            <img src="/flag.png" alt="flag" />
            <img src="/star.png" alt="star" />
            <p>USD</p>
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <div className="quickLinkGrid">
        <div>
          <h2>mettā muse</h2>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>
        <div>
          <h2>QUICK LINKS</h2>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div>
          <h2>FOLLOW US</h2>
          <img
            src="/socialMedia.png"
            alt="social media"
            style={{ width: "80px" }}
          />
          <h2>mettā muse Accepts</h2>
          <img
          className="paymentMethodImg"
            src="/paymentMethods.png"
            alt="social media"
          />
        </div>
      </div>
      <div className="copyrightInfo">
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
