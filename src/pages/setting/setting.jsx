import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../service/user.service";
import { changeActivePage } from "../../slice/ui";
import { getUserStart } from "../../slice/user.slice";
import "./setting.scss";

const Setting = () => {
  const { user, isLoading } = useSelector((state) => state.user);

  const [username, setUsername] = useState(user.username);
  const [picture, setPicture] = useState(user.picture);
  const [fullName, setFullName] = useState(user.fullName);
  const [age, setAge] = useState(user.age);
  const [job, setJob] = useState(user.job);
  const [school, setSchool] = useState(user.school);
  const [labelImage, setLabelImage] = useState(user.picture);

  const changeFile = (e) => {
    setPicture(e.target.files[0]);
    setLabelImage(URL.createObjectURL(e.target.files[0]));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(changeActivePage("Sozlamalar"));
  }, []);

  const changeHandler = async (e) => {
    e.preventDefault();
    dispatch(getUserStart());
    const formData = new FormData();
    formData.append("file", picture);
    formData.append("upload_preset", "restoran-order");
    formData.append("cloud_name", "djsdapm3z");

    await fetch("https://api.cloudinary.com/v1_1/djsdapm3z/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (data) => {
        const profile = {
          ...user,
          userId: user._id,
          username,
          fullName,
          age,
          job,
          school,
          picture: data.secure_url,
        };
        try {
          dispatch(getUserStart());
          await UserService.setting(dispatch, profile, navigate);
        } catch (error) {}
      });
  };

  return (
    <div className="md:p-3 test lg:py-[30px] py-[40px] px-[10px]">
      <h4 className="font-nunito page-label">Sozlamalar</h4>
      <p className="font-nunito page-path">Sozlamalar /</p>
      <form onSubmit={(e) => changeHandler(e)} className="md:w-[70%] w-[90%]">
        <div className="label font-poppins text-center primary text-[20px] font-[600]">
          Profile malumotlarini ozgartirish
        </div>
        <p className="font-open-sans text-center mb-3">
          Kerakli bolimlarni toldirishingiz mumkin
        </p>
        <div className="form-box ">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="input">
                <label htmlFor="username">Ism va sharifi</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="form-control"
                    aria-label="Username"
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
                    aria-describedby="basic-addon1"
                  />
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
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 flex justify-center">
              <img src={labelImage} className="rounded-sm h-[230px]" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="input">
                <label htmlFor="username">Yoshi</label>
                <div className="input-group mb-3">
                  <input
                    type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="input">
                <label htmlFor="username">Rasim Ozgartirish</label>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    onChange={(e) => changeFile(e)}
                    className="form-control"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
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
                aria-describedby="basic-addon1"
              />
            </div>
          </div>

          <button
            className="primary-button disabled:opacity-[0.5]"
            disabled={isLoading}
          >
            {isLoading ? "Yuklanmoda..." : "Saqlash"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Setting;
