import React from "react";

import "./app.css";
import { Navbar, Brands, Product } from "./components";
import {
  About,
  Discount,
  Footer,
  Header,
  Hero,
  Instyle,
  New,
  Popular,
} from "./containers";

const App = () => {
  return (
    <div className="orla__container">
      <Navbar />
      <Hero />
      <Brands />
      <Product />
    </div>
  );
};

export default App;
