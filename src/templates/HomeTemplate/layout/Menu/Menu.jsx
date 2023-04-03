import React from "react";
import Logo from "../../../../assets/img/AoT-gold 3.png";
export default function Menu() {

  return (
    <div className="menu-template">
      <div className="menu-left">
        <a href="#">
            <img src={Logo} alt="logo" />
        </a>
      </div>
      <div className="menu-mid">
      <i class="fa fa-bars"></i>
      </div>
      <div className="menu-right">
      <i class="fa fa-search"></i>
      </div>
    </div>
  );
}
