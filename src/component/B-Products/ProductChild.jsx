import React from "react";
import "./Redux.css";
import { useDispatch } from "react-redux";

const ProductChild = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cards">
      <img className="image" src={item.image} alt="" />
      <h3>{item.title.substr(0, 20) + "..."}</h3>
      <h4>Price: ${item.price}</h4>
      <button onClick={() => dispatch({ type: "Add_Cart", data: item })}>
        Add To Cart
      </button>
      <button>View Details</button>
    </div>
  );
};

export default ProductChild;
