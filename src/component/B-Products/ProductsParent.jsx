import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import ProductChild from "./ProductChild";
import "./Redux.css";

const ProductsParent = () => {
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  const getApiData = async () => {
    const allProducts = await axios.get("https://fakestoreapi.com/products");
    setproducts(allProducts.data);
    dispatch({ type: "Add_Product", data: allProducts.data });
    // console.log("====>", allProducts.data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <div>
      <h1>Product Parents@</h1>
      <div className="cards-parent">
        {products.map((item) => {
          return <ProductChild item={item} />;
        })}
      </div>
    </div>
  );
};

export default ProductsParent;
