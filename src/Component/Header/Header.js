import React from "react";
import "./Header.css";
// import logo from "../../images/logo.jpg";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-fixed">
        <div>
          {/* <img className="logo-img" src={logo} alt=""></img> */}
        </div>
        <div>
          <h2 className="gadgetDb">GadgetDB</h2>
        </div>
      </div>

      <div className="nav-header">
        <a href="">Home</a>
        <a href="">sign up</a>
        <a href="">my order</a>
        <a href="">info</a>
      </div>
    </div>
  );
};

export default Header;
