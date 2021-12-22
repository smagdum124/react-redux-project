import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../A-Navigation/NavBar";
import ProductCart from "../B-Products/ProductCart";
import ProductDetails from "../B-Products/ProductDetails";
import ProductsParent from "../B-Products/ProductsParent";

const Landing = () => {
  const [serch, setSerch] = useState([]);
  return (
    <div>
      {/* <h1>Landing Component</h1> */}
      <BrowserRouter>
        <NavBar setSerch={setSerch} />
        <Routes>
          <Route path="/" element={<ProductsParent serch={serch} />} />
          <Route path="/cart" element={<ProductCart />} />
          <Route path="/details" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Landing;
