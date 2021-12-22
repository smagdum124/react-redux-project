import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductChild from "./ProductChild";
import "./Redux.css";

const ProductsParent = ({ serch }) => {
  const stateProduct = useSelector((state) => state.productReducer.product);
  const dispatch = useDispatch();
  const [products, setproducts] = useState([]);
  const getApiData = async () => {
    const allProducts = await axios.get("https://fakestoreapi.com/products");
    setproducts(allProducts.data);
    stateProduct.length <= 0 &&
      dispatch({ type: "Add_Product", data: allProducts.data });
    // console.log("====>", allProducts.data);
  };
  useEffect(() => {
    getApiData();
  }, []);
  useEffect(() => {
    const filteredProducts = stateProduct.filter((item) =>
      item.title.toUpperCase().includes(serch.toUpperCase().trim())
    );
    setproducts(filteredProducts);
    // console.log(filteredProducts);
  }, [serch]);
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
