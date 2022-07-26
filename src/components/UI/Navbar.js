import React from "react";
import logo from "../../assets/homeid_logo_white.png";
import "./Navbar.css";

const Navbar = ({ loginStatus, clearToken }) => {
  // const { clearToken } = useToken();

  const logoutHandler = () => {
    // localStorage.clear();
    document.cookie='token=';
    clearToken();
  };

  return (
    <div className="general_navbar">
      <img src={logo} alt="homeid_logo" />
      {loginStatus ? (
        <div className="navbar_btn_group">
          <button onClick={logoutHandler} className="navbar_btn">
            Logout
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
