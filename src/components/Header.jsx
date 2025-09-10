import React from "react";
import HeaderLogo from "../assets/headerLogo.svg";

const Header = () => {
  return (
    <div>
      <img src={HeaderLogo} alt="Header Logo" className="px py-12" />
    </div>
  );
};

export default Header;
