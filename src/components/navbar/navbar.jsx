import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../public/logo.png";
import User from "../../../public/user.png";
import Down from "../../../public/down.png";
import "./navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="user">
          <img src={User} alt="" />
          <div className="drop-menu font-poppins">
            {user.username} <img src={Down} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
