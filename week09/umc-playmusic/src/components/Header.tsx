import React from "react";
import { Link } from "react-router-dom";
import { CartIcon } from "@/constants/icons"; // 아이콘 import

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      <h1 className="text-xl font-bold">
        <Link to="/">UMC Lucha Playlist</Link>
      </h1>
      <Link to="/cart" className="text-2xl hover:text-gray-400 transition-colors">
        <CartIcon /> {/* 기존 FiShoppingCart 대신 CartIcon 사용 */}
      </Link>
    </header>
  );
}

export default Header;
