import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../service/user.service";
import "./register.scss";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState([]);
  const [job, setJob] = useState("");
  const [age, setAge] = useState("");
  const [school, setSchool] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.user);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "restoran-order");
    formData.append("cloud_name", "djsdapm3z");

    await fetch("https://api.cloudinary.com/v1_1/djsdapm3z/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data) => {
        await UserService.postUser(
          dispatch,
          {
            fullName,
            username,
            password,
            age,
            job,
            school,
            picture: data.secure_url,
          },
          navigate
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeFile = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="wrapper">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="label font-poppins">Create an Account</div>
        <p className="font-open-sans">
          Enter your personal details to create account
        </p>
        <div className="form-box">
          <div className="input">
            <label htmlFor="username">Ism va sharifi</label>
            <div className="input-group mb-3">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="form-control"
                aria-label="Username"
                required
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
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
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
              <div className="input">
                <label htmlFor="username">Yoshi</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control"
                    aria-label="Username"
                    required
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-6 col-12">
              <div className="input">
                <label htmlFor="username">Rasim Yuklash</label>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    onChange={(e) => changeFile(e)}
                    className="form-control"
                    required
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="input">
            <label htmlFor="username">Kasbi</label>
            <div className="input-group mb-3">
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="form-control"
                aria-label="Username"
                required
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="input">
            <label htmlFor="username">Ta'lim joyi:</label>
            <div className="input-group mb-3">
              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="form-control"
                aria-label="Username"
                required
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div className="">
            <input type="checkbox" id="remember" />{" "}
            <label htmlFor="remember">
              I agree and accept the <Link to={"#"}>terms and conditions</Link>
            </label>
          </div>
          <button className="primary-button" disabled={isLoading}>
            {isLoading ? "Loading..." : "Create Account"}
          </button>
          <small>
            Already have an account?  <Link to={"/login"}>Log in</Link>
          </small>
        </div>
      </form>
    </div>
  );
};

export default Register;
