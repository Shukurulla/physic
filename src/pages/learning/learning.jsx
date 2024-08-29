import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { learningDB } from "../../service/db";
import { changeActivePage } from "../../slice/ui";

const Learning = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeActivePage("Tayyorlanish"));
  }, []);

  return (
    <div>
      <div className="md:p-3 test lg:py-[30px] py-[40px] px-[10px]">
        <h4 className="font-nunito page-label">Tayyorlanish</h4>
        <p className="font-nunito page-path">Tayyorlanish /</p>

        {learningDB.map((item, idx) => (
          <Link
            to={`/learning/${item.id}`}
            key={idx}
            className="unit-box block px-[20px] md:px-[30px] bg-white mt-[16px] rounded pb-[20px] md:pb-[30px] pt-[15px] border-t-[15px] border-[#502E92]"
          >
            <div className="title font-nunito text-[#502E92] font-[700] text-[20px]">
              Tema:
            </div>
            <div className="desription font-nunito text-[#939393] font-[400] text-[16px]">
              {item.desctiption}
            </div>
            <div className="unit-label font-nunito text-[#502E92] font-[600] text-[24px] ">
              {" "}
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Learning;
