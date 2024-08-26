import React from "react";
import Navbar from "../components/navbar/navbar";
import Sidebar from "../components/sidebar/sidebar";
import { useSelector } from "react-redux";

const Layaout = ({ activPage }) => {
  const { showSide } = useSelector((state) => state.ui);
  return (
    <>
      <Navbar />
      <div className="row">
        <div
          className={`${showSide ? "col-lg-3 col-md-4" : "col-lg-1 col-md-2"}`}
        >
          <Sidebar />
        </div>
        <div
          className={`scroll ${
            showSide ? "col-lg-9 col-md-7" : "col-lg-11 col-md-10"
          }`}
        >
          {activPage}
        </div>
      </div>
    </>
  );
};

export default Layaout;
