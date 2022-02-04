import React from "react";

import atlassian from "../../assets/images/atlassian.png";
import dropbox from "../../assets/images/dropbox.png";
import google from "../../assets/images/google.png";
import shopify from "../../assets/images/shopify.png";
import slack from "../../assets/images/slack.png";
import "./brands.css";

const Brands = () => {
  return (
    <div className="orla__brands">
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>

      <div>
        <img src={dropbox} alt="dropbox" />{" "}
      </div>
      <div>
        <img src={google} alt="google" />{" "}
      </div>
      <div>
        <img src={shopify} alt="shopify" />{" "}
      </div>
      <div>
        <img src={slack} alt="slack" />{" "}
      </div>
    </div>
  );
};

export default Brands;
