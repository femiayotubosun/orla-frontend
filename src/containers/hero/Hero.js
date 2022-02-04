import React from "react";

import "./hero.css";
import hero from "../../assets/images/undraw_empty_cart_co35.svg";
const Hero = () => {
  return (
    <div className="orla__hero">
      <div className="orla__hero-content">
        <div className="orla__hero-content__brand">Favorite Brands</div>
        <div className="orla__hero-content__text">
          <p>
            <span>An Exciting Place</span> <br />
            for the whole family to shop.
          </p>
        </div>
        <div className="orla__hero-content__sub-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          molestias sit.
        </div>

        <div className="orla__hero-content__buttons">
          <button>Shop Now</button>
          <p>₦ 2000</p>
          <p className="discount">₦250</p>
        </div>
      </div>
      <div className="orla__hero-picture">
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
