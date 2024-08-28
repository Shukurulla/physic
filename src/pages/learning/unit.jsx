import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { infoTests, learningDB } from "../../service/db";
import { changeActivePage } from "../../slice/ui";
import TestInfo from "../test/test-info";

const Unit = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const currentLesson = learningDB.filter((c) => c.id == id)[0];
  const test = infoTests.filter((c) => c.keyValue == currentLesson.keyValue)[0];
  const favouriteColor = test.favouriteColor;

  useEffect(() => {
    dispatch(changeActivePage("Tayyorlanish"));
  }, []);

  return (
    <div>
      <div className="md:p-3 test pb-5 px-[10px]">
        <Link to={"/learning"} className="font-nunito page-label">
          Tayyorlanish
        </Link>
        <p className="font-nunito page-path">
          <Link to={"/learning"}>Tayyorlanish</Link>/{currentLesson.title}
        </p>
        <div className="unit-box block px-[20px] md:px-[30px] bg-white mt-[16px] rounded pb-[20px] md:pb-[30px] pt-[15px] border-t-[15px] border-[#502E92]">
          <div className="title font-nunito text-[#502E92] font-[700] text-[20px]">
            Tema:
          </div>
          <div className="desription font-nunito text-[#939393] font-[400] text-[16px]">
            {currentLesson.desctiption}
          </div>
          {currentLesson.paragraphs.map((item) => (
            <div className="mt-3">
              <div className="title font-nunito text-[#012970] md:text-[24px] font-[700]">
                {item.dropTitle}
              </div>
              <div className="paragraph font-nunito text-[#012970] ">
                {item.body}
              </div>
            </div>
          ))}
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
