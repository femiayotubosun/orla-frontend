import React from "react";

import headphones from "../../assets/images/products/headphones.jpg";
import headphones2 from "../../assets/images/products/headphones2.jpg";

import "./product.css";

const Product = () => {
  return (
    <div className="orla__products">
      <div className="orla__product">
        <div className="orla__product-image-container">
          <div className="orla__product-image-cart"></div>
          <img src={headphones} alt="headphones" />
        </div>

        <div className="orla__product-content">
          <h4>Always in Style!</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            dolor nobis quasi.
          </p>
          <div className="orla__product-price">
            <p>₦ 2000</p>
            <p className="discount">₦250</p>
          </div>
          <div className="orla__product-stars"></div>
        </div>
      </div>
      <div className="orla__product">
        <div className="orla__product-image-container">
          <div className="orla__product-image-cart"></div>
          <img src={headphones2} alt="headphones" />
        </div>

        <div className="orla__product-content">
          <h4>Always in Style!</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            dolor nobis quasi.
          </p>
          <div className="orla__product-price">
            <p>₦ 2000</p>
            <p className="discount">₦250</p>
          </div>
          <div className="orla__product-stars"></div>
        </div>
      </div>
    </div>
  );
};

export default Product;
