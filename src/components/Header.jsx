import React from "react";
import HeaderLogo from "../assets/headerLogo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex flex-col justify-center">
      <Link to="/">
        <img
          src={HeaderLogo}
          alt="Header Logo"
          className="flex items-start w-16 ml-14 cursor-pointer"
        />
      </Link>
    </div>
  );
};

export default Header;
