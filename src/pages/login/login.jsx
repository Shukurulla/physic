import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../service/user.service";
import "./login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate("");

  const loginHandler = async (e) => {
    e.preventDefault();
    await UserService.loginUser(dispatch, { username, password }, navigate);
  };

  return (
    <div className="wrapper">
      <form onSubmit={(e) => loginHandler(e)}>
        <div className="label font-poppins">Login to Your Account</div>
        <p className="font-open-sans">
          Enter your username & password to login
        </p>
        <div className="form-box">
          <div className="input">
            <label htmlFor="username">Username</label>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                @
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control"
                aria-label="Username"
                required
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor="username">Password</label>
            <div className="input-group mb-3">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                aria-label="Username"
                required
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="">
            <input type="checkbox" id="remember" />{" "}
            <label htmlFor="remember">Remember me</label>
          </div>
          <button className="primary-button">Login</button>
          <small>
            Don't have account?  <Link to={"/register"}>Create an account</Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Login;
