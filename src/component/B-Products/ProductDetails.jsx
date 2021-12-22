import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(
    (state) => state.productReducer.selectedProduct[0]
  );
  return (
    <div className="cards-parent">
      <div className="cards">
        <h1>product details</h1>
        <img className="image" src={selectedItem.image} alt="" />
        <h3>{selectedItem.title.substr(0, 20) + "..."}</h3>
        <h4>Price: ${selectedItem.price}</h4>
        <button
          onClick={() => dispatch({ type: "Add_Cart", data: selectedItem })}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
