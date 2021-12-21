import React from "react";
import { useSelector } from "react-redux";

const ProductCart = () => {
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCart;
