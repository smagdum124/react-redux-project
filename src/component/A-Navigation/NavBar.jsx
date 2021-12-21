import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartItems = useSelector((state) => state.productReducer.cart);
  return (
    <div>
      <Link to="/">ClassRedux</Link>
      <input type="serch" />
      <button>Serch</button>
      <Link to="/cart">Cart:{cartItems.length} </Link>
    </div>
  );
};

export default NavBar;
