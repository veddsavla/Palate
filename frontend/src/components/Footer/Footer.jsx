// import React from 'react'
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="footer-logo-name">FOOD DEL.</h1>
          {/* <img src={assets.logo_2} alt="" className="footer-logo" /> */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            necessitatibus neque sint vero aliquam dolor ipsa repudiandae,
            facilis explicabo blanditiis eaque amet odit cumque! Explicabo
            delectus sequi est quas molestiae!
          </p>
          <div className="footer-social-items">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h1>Get in touch</h1>
          <ul>
            <li>Vedansh 16010122323</li>
            <li>Ananya 1601022323</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="food-copyright">
        Copyright 2024 @ FOODDEL.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
