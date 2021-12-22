import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = ({ setSerch }) => {
  const cartItems = useSelector((state) => state.productReducer.cart);
  return (
    <div>
      <Link to="/">classRedux</Link>
      <input onChange={(e) => setSerch(e.target.value)} type="serch" />
      <button>Serch</button>
      <Link to="/cart">Cart:{cartItems.length} </Link>
    </div>
  );
};

export default NavBar;
