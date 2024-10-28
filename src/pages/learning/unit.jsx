import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { infoTests, learningDB } from "../../service/db";
import { changeActivePage } from "../../slice/ui";
import FormulaRenderComponent from "../../utilities/formulaRender.jsx";

const Unit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const mediaRef = useRef();

  const currentLesson = learningDB.filter((c) => c.id == id)[0];
  const test = infoTests.filter((c) => c.keyValue == currentLesson.keyValue)[0];
  const favouriteColor = test.favouriteColor;

  useEffect(() => {
    dispatch(changeActivePage("Tayyorlanish"));
  }, []);

  return (
    <div>
      <div className="md:p-3  pb-5 px-[10px]">
        <Link to={"/learning"} className="font-nunito page-label">
          Tayyorlanish
        </Link>
        <p className="font-nunito page-path">
          <Link to={"/learning"}>Tayyorlanish</Link>/{currentLesson.title}
        </p>
        <div className="unit-box block px-[20px] md:px-[30px] bg-white mt-[16px] rounded pb-[20px] md:pb-[30px] pt-[15px] border-t-[15px] border-[#502E92]">
          <div className="title font-nunito text-[#502E92] font-[700] text-[20px]">
            Tema: {currentLesson.title}
          </div>
          <div className="desription font-nunito text-[#939393] font-[400] text-[16px]">
            {currentLesson.desctiption}
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12">
              {currentLesson.paragraphs.map((item) => (
                <div>
                  <span className="px-3">
                    <FormulaRenderComponent content={item.text} />
                  </span>
                  <div className="flex items-center justify-center">
                    {<img className="" src={item?.formula} />}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="images">
                {currentLesson.media?.images.map((item) => (
                  <div className="my-3">
                    <img src={item.src} alt="" />
                    <p className="text-center">{item.title}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-center" ref={mediaRef}>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
            </div>
          </div>
        </div>
        <Link
          to={`${test.path}`}
          className={`unit-box block px-[20px] md:px-[30px] bg-white mt-[16px] rounded pb-[20px] md:pb-[30px] pt-[15px] border-t-[15px] border-[${favouriteColor}]`}
        >
          <div
            className={`font-nunito text-[${favouriteColor}] font-[700] text-[20px]`}
          >
            Test:
          </div>
          <div className="desription font-nunito text-[#939393] font-[400] text-[16px]">
            {currentLesson.title} teoriyasidan test
          </div>
          <div
            className={`unit-label font-nunito text-[${favouriteColor}] font-[600] text-[24px] `}
          >
            {" "}
            {test.title}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Unit;
