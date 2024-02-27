import React from "react";
import "/index.css";
import logo from "../../../assests/logo.png";

export const Title = () => <img className="logo" src={logo} />;

const Header = () => {
  return (
    <div className="Header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <button> Login</button>
      <button> Log Out</button>

    </div>
  );
};

export default Header;
