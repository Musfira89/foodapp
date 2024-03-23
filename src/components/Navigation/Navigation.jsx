import React from "react";
import "/index.css";
import logo from "../../assests/images/logo.png";
import { Link } from "react-router-dom";

export const Title = () => <img className="logo" src={logo} />;

const Navigation = () => {
  return (
    <div className="Header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home </Link>
          </li>
          <li>
            <Link to={"/Aboutus"}>About us</Link>
          </li>
          <li>
            <Link to={"/Contact"}> Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="LogBtn">
        <button> Login</button>
        <button> Log Out</button>
      </div>
    </div>
  );
};

export default Navigation;
