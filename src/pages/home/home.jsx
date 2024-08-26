import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../../public/banner-theory.png";
import bgEllipses from "../../../public/bg-ellipse.png";
import userPic from "../../../public/profile.png";
import setting from "../../../public/setting.png";
import { changeActivePage } from "../../slice/ui";
import { infoTests } from "../../service/db";
import "./home.scss";
import "react-circular-progressbar/dist/styles.css";
import UserService from "../../service/user.service";
const Home = () => {
  const dispatch = useDispatch();
  const { showSide } = useSelector((state) => state.ui);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(changeActivePage("Bosh sahifa"));
    UserService.getUser(dispatch, navigate);
    if (user == null) {
      navigate("/login");
    }
  }, []);

  const totalBall =
    infoTests.map((item) => item.totalTest).reduce((a, b) => a + b) * 5;
  const usersBall = infoTests
    .map((item) => (user.userScore ? user.userScore[item.keyValue]?.score : 0))
    .reduce((a, b) => a + b);
  const percentage = ((usersBall * 100) / totalBall).toFixed() || 0;

  return (
    <div className="p-3">
      <h4 className="font-nunito page-label">Bosh sahifa</h4>
      <p className="font-nunito page-path">Bosh shifa /</p>
      <div className="row">
        <div
          className={`${
            showSide
              ? "col-lg-8 col-md-9 col-sm-12"
              : "col-lg-9 col-md-9 col-sm-12"
          }`}
        >
          <div className="edu-system bg-light">
            <i className="fa-brands fa-react"></i>
            <h5 className="font-poppins ">Ta'lim tizimi</h5>
            <div className="leveling">
              <div className="index-level complete font-montserrat">
                01
                <div className="level-line">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="level-info">
                <h6 className="font-montserrat primary">
                  Teoriya o’zlashtirish
                </h6>
                <p className="font-montserrat">
                  mutaxassislarning maqolalarini o'qish {showSide && <br />}
                  ~o'qish vaqti: 15 daqiqa
                </p>
              </div>
            </div>
            <div className="leveling">
              <div className="index-level font-montserrat ">
                02
                <div className="level-line">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="level-info">
                <h6 className="font-montserrat">
                  Test (<span className="coral">Matching</span>)
                </h6>
                <p className="font-montserrat">
                  Matching shaklida testdan o'ting
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            showSide
              ? "col-lg-4 col-md-3 col-sm-12"
              : "col-lg-3 col-md-3 col-sm-12"
          }`}
        >
          <div className="score-level-box w-100 h-100">
            <h5 className="font-montserrat">Natijangizning o'rtacha foizi</h5>
            <div className="score-percent  flex justify-center pt-3">
              <CircularProgressbar
                className="z-[1] montserrat-font size-3/4"
                value={percentage}
                text={`${percentage}%`}
                styles={{
                  path: {
                    stroke: "#fff",
                    strokeWidth: "4px",
                  },
                  trail: {
                    stroke: "#012970CC",
                    strokeWidth: "2px",
                  },
                  text: {
                    fill: "#fff",
                    fontSize: "30px",
                    fontWeight: 700,
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <Link to={"/learning "} className="col-12">
          <img src={banner} className="w-100" alt="" />
        </Link>
      </div>
      <div className="resource">
        <h5 className="font-poppins primary">Resurslar:</h5>
        <p className="font-montserrat">
          Nazariyani o'rganish uchun elektron kitoblar
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <a href="https://s3-alpha-sig.figma.com/img/5c25/ee71/d72a70c003a4ed76f83c4da654342432?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GaiLVVvsdk8ZEI0o~Ags0~TuZbQsrvPRewRpVE2ZkbPu2X9Rw3HQLLHUj2sTnSh8rWX1tJb89EqaMFiUBwFZCDafyZzOua3WlrB~98gm2dS~YtLkj7pDu~FZoEHzpGtNri6DBhaztkWHI8oPgHdAmjLn~htrNmpghrFm6tsX5P8PyEWTwH6QDteviC3gwJuyC0hdBeOPua4hXqbPYzdQqqwle2AWBstTovuDKfmsjOkjeIdyUsqqWwYTZh15B4rBNxP4beoNpI4eZysiJRkllBVM2GpR7P1-i0KAw22zKUUJxGs02~ihVPAv31JXtFqv6f59molxNSoJNbduPoUDzg__">
              <img
                src="https://s3-alpha-sig.figma.com/img/5c25/ee71/d72a70c003a4ed76f83c4da654342432?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GaiLVVvsdk8ZEI0o~Ags0~TuZbQsrvPRewRpVE2ZkbPu2X9Rw3HQLLHUj2sTnSh8rWX1tJb89EqaMFiUBwFZCDafyZzOua3WlrB~98gm2dS~YtLkj7pDu~FZoEHzpGtNri6DBhaztkWHI8oPgHdAmjLn~htrNmpghrFm6tsX5P8PyEWTwH6QDteviC3gwJuyC0hdBeOPua4hXqbPYzdQqqwle2AWBstTovuDKfmsjOkjeIdyUsqqWwYTZh15B4rBNxP4beoNpI4eZysiJRkllBVM2GpR7P1-i0KAw22zKUUJxGs02~ihVPAv31JXtFqv6f59molxNSoJNbduPoUDzg__"
                alt=""
                className="w-100"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <a href="https://s3-alpha-sig.figma.com/img/5c25/ee71/d72a70c003a4ed76f83c4da654342432?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GaiLVVvsdk8ZEI0o~Ags0~TuZbQsrvPRewRpVE2ZkbPu2X9Rw3HQLLHUj2sTnSh8rWX1tJb89EqaMFiUBwFZCDafyZzOua3WlrB~98gm2dS~YtLkj7pDu~FZoEHzpGtNri6DBhaztkWHI8oPgHdAmjLn~htrNmpghrFm6tsX5P8PyEWTwH6QDteviC3gwJuyC0hdBeOPua4hXqbPYzdQqqwle2AWBstTovuDKfmsjOkjeIdyUsqqWwYTZh15B4rBNxP4beoNpI4eZysiJRkllBVM2GpR7P1-i0KAw22zKUUJxGs02~ihVPAv31JXtFqv6f59molxNSoJNbduPoUDzg__">
              <img
                src="https://s3-alpha-sig.figma.com/img/5c25/ee71/d72a70c003a4ed76f83c4da654342432?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GaiLVVvsdk8ZEI0o~Ags0~TuZbQsrvPRewRpVE2ZkbPu2X9Rw3HQLLHUj2sTnSh8rWX1tJb89EqaMFiUBwFZCDafyZzOua3WlrB~98gm2dS~YtLkj7pDu~FZoEHzpGtNri6DBhaztkWHI8oPgHdAmjLn~htrNmpghrFm6tsX5P8PyEWTwH6QDteviC3gwJuyC0hdBeOPua4hXqbPYzdQqqwle2AWBstTovuDKfmsjOkjeIdyUsqqWwYTZh15B4rBNxP4beoNpI4eZysiJRkllBVM2GpR7P1-i0KAw22zKUUJxGs02~ihVPAv31JXtFqv6f59molxNSoJNbduPoUDzg__"
                alt=""
                className="w-100"
              />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <a href="https://s3-alpha-sig.figma.com/img/5c25/ee71/d72a70c003a4ed76f83c4da654342432?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GaiLVVvsdk8ZEI0o~Ags0~TuZbQsrvPRewRpVE2ZkbPu2X9Rw3HQLLHUj2sTnSh8rWX1tJb89EqaMFiUBwFZCDafyZzOua3WlrB~98gm2dS~YtLkj7pDu~FZoEHzpGtNri6DBhaztkWHI8oPgHdAmjLn~htrNmpghrFm6tsX5P8PyEWTwH6QDteviC3gwJuyC0hdBeOPua4hXqbPYzdQqqwle2AWBstTovuDKfmsjOkjeIdyUsqqWwYTZh15B4rBNxP4beoNpI4eZysiJRkllBVM2GpR7P1-i0KAw22zKUUJxGs02~ihVPAv31JXtFqv6f59molxNSoJNbduPoUDzg__">
              <img
                src="https://s3-alpha-sig.figma.com/img/5c25/ee71/d72a70c003a4ed76f83c4da654342432?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GaiLVVvsdk8ZEI0o~Ags0~TuZbQsrvPRewRpVE2ZkbPu2X9Rw3HQLLHUj2sTnSh8rWX1tJb89EqaMFiUBwFZCDafyZzOua3WlrB~98gm2dS~YtLkj7pDu~FZoEHzpGtNri6DBhaztkWHI8oPgHdAmjLn~htrNmpghrFm6tsX5P8PyEWTwH6QDteviC3gwJuyC0hdBeOPua4hXqbPYzdQqqwle2AWBstTovuDKfmsjOkjeIdyUsqqWwYTZh15B4rBNxP4beoNpI4eZysiJRkllBVM2GpR7P1-i0KAw22zKUUJxGs02~ihVPAv31JXtFqv6f59molxNSoJNbduPoUDzg__"
                alt=""
                className="w-100"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="setting" id="#settings">
        <div className="row">
          <div
            className={`${
              showSide
                ? "col-lg-4 col-md-3 col-sm-12"
                : "col-lg-3 col-md-3 col-sm-12"
            }`}
          >
            <div className="setting-detail">
              <img
                src={bgEllipses}
                className="bg-ellipses h-100 w-100"
                alt=""
              />
              <div className="text">
                <h5 className="font-montserrat">Sozlamalar</h5>
                <img src={setting} alt="" />
              </div>
            </div>
          </div>
          <div
            className={`${
              showSide
                ? "col-lg-8 col-md-8 col-sm-12"
                : "col-lg-9 col-md-9 col-sm-12"
            }`}
          >
            <div className="profile-info">
              <div className="row">
                <div
                  className={`${
                    showSide
                      ? "col-lg-8 col-md-7 col-sm-7"
                      : "col-lg-9 col-md-8 col-sm-8"
                  }`}
                >
                  <div className="user-info">
                    <h5 className="font-poppins primary font-[600] text-[20px]">
                      Resurslar:
                    </h5>
                    <div className="row mt-3 px-3">
                      <div className="col-12 mt-2">
                        <p className="font-nunito">Ism va sharifi:</p>
                        <h4 className="font-poppins text-[24px] font-[500] ">
                          {user.fullName}
                        </h4>
                      </div>
                      <div className="col mt-2">
                        <p className="font-nunito">Kasb:</p>
                        <h4 className="font-poppins text-[24px] font-[500] ">
                          {user.job}
                        </h4>
                      </div>
                      <div className="col mt-2">
                        <p className="font-nunito">Yoshi:</p>
                        <h4 className="font-poppins text-[24px] font-[500] ">
                          {user.age}
                        </h4>
                      </div>
                      <div className="col-12 mt-2">
                        <p className="font-nunito">Ta'lim joyi:</p>
                        <h4 className="font-poppins text-[24px] font-[500] ">
                          {user.school}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    showSide
                      ? "col-lg-4 col-md-5 col-sm-5"
                      : "col-lg-3 col-md-4 col-sm-4"
                  }`}
                >
                  <div className="img-box">
                    <img src={user.picture} className="w-100 " alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
