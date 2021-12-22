import React from "react";
import "./Redux.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
      ,
      <Link to="/details">
        <button
          onClick={() => dispatch({ type: "Selected_Products", data: item })}
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductChild;
