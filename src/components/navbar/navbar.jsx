import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/logo.png";
import User from "../../../public/user.png";
import Down from "../../../public/down.png";
import "./navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const [showDropMenu, setShowDrowMenu] = useState(false);

  const logout = () => {
    localStorage.removeItem("jwt-token");
    window.location.reload();
  };

  return (
    <header>
      {showDropMenu && (
        <div
          className="closer"
          onClick={() => setShowDrowMenu(!showDropMenu)}
        ></div>
      )}
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="user">
          <img src={User} alt="" />
          <div
            onClick={() => setShowDrowMenu(!showDropMenu)}
            className="drop-menu font-poppins flex gap-2 items-center"
          >
            {user.username} <img src={Down} className="h-100" alt="" />
          </div>
          {showDropMenu ? (
            <div className="drop-down">
              <Link
                to="/setting"
                onClick={() => setShowDrowMenu(!showDropMenu)}
                className="menu-item"
              >
                <i className="bi bi-gear"></i> Sozlamalar
              </Link>

              <div className="menu-item" onClick={() => logout()}>
                <i className="bi bi-box-arrow-right"></i> Chiqish
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
