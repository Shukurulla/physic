import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeActivePage } from "../../slice/ui";
import { infoTests } from "../../service/db";
import "./test.scss";
import { Link } from "react-router-dom";

const TestInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { showSide } = useSelector((state) => state.ui);

  useEffect(() => {
    dispatch(changeActivePage("Test"));
  }, []);

  return (
    <div className="md:p-3 test lg:py-[30px] py-[40px] px-[10px]">
      <h4 className="font-nunito  page-label">Testlar</h4>
      <p className="font-nunito page-path">Testlar /</p>
      {infoTests.map((item) => (
        <div className="test-list">
          <div key={item.id} className="row items-center">
            <div className={"col-lg-8 col-md-8 col-sm-12"}>
              <h5 className="font-poppins primary">{item.title}</h5>
              <p className="font-montserrat">Jami test: {item.totalTest}</p>
              {user.userScore && user.userScore[item.keyValue] ? (
                <ul className="mt-[20px]">
                  <li>
                    Jami yig'gan balingiz:{" "}
                    {user.userScore && user.userScore[item.keyValue].score}
                    ball
                  </li>
                  <li>
                    Tog'ri javoblar soni:{" "}
                    {user.userScore &&
                      user.userScore[item.keyValue].correctAnswer}
                    ta
                  </li>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div className={"col-lg-4 col-md-4 col-sm-12"}>
              <Link to={item.path}>
                <button
                  className={
                    user.userScore && user.userScore[item.keyValue]
                      ? "btn btn-success block w-100 p-[10px]"
                      : "primary-button"
                  }
                >
                  {user.userScore && user.userScore[item.keyValue]
                    ? "Qayta Urinish"
                    : "Boshlash"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestInfo;
