import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProductCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.productReducer.cart);
  //   console.log("cart=====>", cartItems);
  return (
    <div>
      <h3> product Cart</h3>
      <div className="cards-parent">
        {cartItems.map((item) => {
          return (
            <div className="cards">
              <img className="image" src={item.image} alt="" />
              <h3>{item.title.substr(0, 20) + "..."}</h3>
              <h4>Price: ${item.price}</h4>
              <button
                onClick={() => dispatch({ type: "Remove_Product", data: item })}
              >
                Remove
              </button>
              <Link to="/details">
                <button
                  onClick={() =>
                    dispatch({ type: "Selected_Products", data: item })
                  }
                >
                  View Details
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCart;
