import React, { useEffect } from "react";
import { navItems } from "../../constants";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./sidebar.scss";
import { changeShowSide } from "../../slice/ui";

const Sidebar = () => {
  const { activePage, showSide } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const changeSideHandler = (val) => {
    dispatch(changeShowSide(val));
  };
  useEffect(() => {
    console.log(window.innerWidth);
  }, [window.innerWidth]);

  return (
    <div className={`side-bar  ${showSide ? "" : "hide"}`}>
      <ul>
        {navItems.map((item) => (
          <li
            key={item.label}
            className={`${activePage == item.label ? "active" : ""}`}
          >
            <Link
              to={item.path}
              onClick={() =>
                window.innerWidth < 500 ? changeSideHandler(!showSide) : ""
              }
            >
              <img
                src={item.icon}
                className={showSide ? "" : "w-[30px]"}
                alt={item.label}
              />
              <span className={`font-nunito ${showSide ? "show" : "hide"}`}>
                {item.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="show-hide" onClick={() => changeSideHandler(!showSide)}>
        <i className={`bi bi-chevron-bar-${showSide ? "left" : "right"}`}></i>
      </div>
    </div>
  );
};

export default Sidebar;
