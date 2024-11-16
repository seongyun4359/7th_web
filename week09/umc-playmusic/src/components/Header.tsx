import React from "react";
import { FiShoppingCart } from "react-icons/fi"; // 장바구니 아이콘 import
import { Link } from "react-router-dom";
import { CartIcon } from "../constants/icons";


function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <h1 className="text-xl font-bold">
        <Link to="/">UMC Lucha Playlist</Link>
      </h1>
      <Link to="/cart" className="text-2xl hover:text-gray-400 transition-colors">
        <FiShoppingCart />
      </Link>
    </header>
  );
}

export default Header;
