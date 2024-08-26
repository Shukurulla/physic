import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/home/home";
import Layaout from "./pages/layaout";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import UserService from "./service/user.service";

const App = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      UserService.getUser(dispatch, navigate);
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Routes>
        {user !== null && (
          <>
            <Route path="/home" element={<Layaout activPage={<Home />} />} />
            <Route path="/learning" element={<Layaout />} />
            <Route path="/resource" element={<Layaout />} />
            <Route path="/tests" element={<Layaout />} />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
