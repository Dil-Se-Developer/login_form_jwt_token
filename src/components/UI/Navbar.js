import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/homeid_logo_white.png";
import "./Navbar.css";

const Navbar = (props) => {
  const Navigate = useNavigate();

  return (
    <div className="general_navbar">
      <img src={logo} alt="homeid_logo" />
    </div>
  );
};

export default Navbar;
