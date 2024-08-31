import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../../public/teory-banner.png";
import testBanner from "../../../public/test-banner.png";
import bgEllipses from "../../../public/bg-ellipse.png";
import setting from "../../../public/setting.png";
import { changeActivePage } from "../../slice/ui";
import { infoTests } from "../../service/db";
import "./home.scss";
import "react-circular-progressbar/dist/styles.css";
import UserService from "../../service/user.service";
import physic9 from "../../assets/books/Fizika 9-sinf.pdf";
import physic10 from "../../assets/books/Fizika 10-sinf.pdf";
import physic11 from "../../assets/books/Fizika 11-sinf.pdf";
import physicImage9 from "../../assets/book-images/fizika-9.png";
import physicImage10 from "../../assets/book-images/fizika-10.png";
import physicImage11 from "../../assets/book-images/fizika-11.png";

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

  const usersBall = user?.userScore
    ? infoTests
        .map((item) =>
          user?.userScore[item.keyValue]
            ? user?.userScore[item.keyValue]?.score
            : 0
        )
        .reduce((a, b) => a + b)
    : 0;

  const percentage = ((usersBall * 100) / totalBall).toFixed() || 0;

  return (
    <div className="md:p-3 lg:py-[30px] py-[40px] px-[10px] ">
      <h4 className="font-nunito page-label">Bosh sahifa</h4>
      <p className="font-nunito page-path">Bosh shifa /</p>
      <div className="row items-center">
        <div
          className={`${
            showSide
              ? "col-lg-8 col-md-12 col-sm-12"
              : "col-lg-9 col-md-9 col-sm-12"
          }`}
        >
          <div className="edu-system bg-light mt-[20px] sm:mt-0">
            <i className="fa-brands fa-react text-[200px] md:text-[300px]"></i>
            <h5 className="font-poppins ">Ta'lim tizimi</h5>
            <div className="leveling relative z-[999]">
              <div className="index-level complete font-montserrat">
                01
                <div className="level-line">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="level-info">
                <h6 className="font-montserrat primary md:text-[18px] sm:text-[18px] text-[16px]">
                  Teoriya o’zlashtirish
                </h6>
                <p className="font-montserrat md:text-[16px] sm:text-[18px] text-[16px]">
                  mutaxassislarning maqolalarini o'qish {showSide && <br />}
                  ~o'qish vaqti: 15 daqiqa
                </p>
              </div>
            </div>
            <div className="leveling relative z-[999]">
              <div className="index-level font-montserrat ">
                02
                <div className="level-line">
                  <div className="progress"></div>
                </div>
              </div>
              <div className="level-info">
                <h6 className="font-montserrat md:text-[18px] sm:text-[16px] text-[15px]">
                  Test (<span className="coral">Matching</span>)
                </h6>
                <p className="font-montserrat md:text-[16px] sm:text-[14px] text-[14px]">
                  Matching shaklida testdan o'ting
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            showSide
              ? "col-lg-4 col-md-12 col-sm-8 mx-auto"
              : "col-lg-3 col-md-3 col-sm-8 mx-auto "
          }`}
        >
          <div className="score-level-box w-100 h-100 mt-[20px] sm:mt-0">
            <h5 className="font-montserrat md:text-[18px] sm:text-[16px] text-[18px]">
              Natijangizning o'rtacha foizi
            </h5>
            <div className="score-percent  flex justify-center pt-3">
              <CircularProgressbar
                className="z-[1] montserrat-font mx-auto size-3/6 lg:size-2/3 md:size-2/5"
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
          <img
            src={banner}
            className="w-100 rounded-[6px] h-[200px] sm:h-auto"
            alt=""
          />
        </Link>
      </div>
      <div className="resource">
        <h5 className="font-poppins primary md:text-[20px] sm:text-[16px] text-[15px]">
          Resurslar:
        </h5>
        <p className="font-montserrat">
          Nazariyani o'rganish uchun elektron kitoblar
        </p>
        <div className="row size-3/4 mx-auto mt-[20px]">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-[20px] md:mt-0">
            <a href={physic9} download="Fizika 9-sinf">
              <img src={physicImage9} alt="" className="w-100" />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-[20px] md:mt-0">
            <a href={physic10} download="Fizika 10-sinf">
              <img src={physicImage10} alt="" className="w-100" />
            </a>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 mt-[20px] md:mt-0">
            <a href={physic11} download="Fizika 11-sinf">
              <img src={physicImage11} alt="" className="w-100" />
            </a>
          </div>
        </div>
        <div className="flex pt-3 items-center text-center">
          <Link
            to={"/resource"}
            className="mx-auto px-4 py-2 rounded-[5px] text-white bg-blue-500 inline"
          >
            Barchasini korish <i className="bi bi-chevron-down"></i>
          </Link>
        </div>
      </div>
      <div className="pb-4">
        <Link to={"/tests"} className="col-12">
          <img
            src={testBanner}
            className="w-100 h-[200px] sm:h-auto rounded-[6px]"
            alt=""
          />
        </Link>
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
              <Link to="/setting" className="text">
                <h5 className="font-montserrat  md:text-[18px] sm:text-[16px] text-[18px]">
                  Sozlamalar
                </h5>
                <img src={setting} alt="" />
              </Link>
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
                      : "col-lg-8 col-md-8 col-sm-8"
                  }`}
                >
                  <div className="user-info">
                    <h5 className="font-poppins primary md:text-[20px] sm:text-[16px]  font-[600] text-[20px]">
                      Resurslar:
                    </h5>
                    <div className="row  px-3">
                      <div className="col-12 mt-3  sm:mt-2">
                        <p className="font-nunito text-[14px] sm:text-[16px]">
                          Ism va sharifi
                        </p>
                        <h4 className="font-poppins md:text-[24px] text-[20px] font-[500] ">
                          {user.fullName}
                        </h4>
                      </div>
                      <div className="col mt-3 sm:mt-2">
                        <p className="font-nunito">Kasb:</p>
                        <h4 className="font-poppins md:text-[24px] text-[20px] font-[500] ">
                          {user.job}
                        </h4>
                      </div>
                      <div className="col mt-3 sm:mt-2">
                        <p className="font-nunito">Yoshi:</p>
                        <h4 className="font-poppins md:text-[24px] text-[20px] font-[500] ">
                          {user.age}
                        </h4>
                      </div>
                      <div className="col-12 mt-3 sm:mt-2">
                        <p className="font-nunito">Ta'lim joyi:</p>
                        <h4 className="font-poppins md:text-[24px] text-[20px] font-[500] ">
                          {user.school}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${
                    showSide
                      ? "col-lg-4 col-md-5 col-sm-5 h-100"
                      : "col-lg-4 col-md-5 col-sm-4  h-100"
                  }`}
                >
                  <div className="img-box mt-3 sm:mt-0 h-[100%]">
                    <img
                      src={user.picture}
                      className="md:w-[100%] w-[50%] sm:w-[70%] mx-auto  h-[200px] "
                      alt=""
                    />
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
