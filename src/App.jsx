import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Toast from "./components/toast/toast";
import Home from "./pages/home/home";
import Layaout from "./pages/layaout";
import Learning from "./pages/learning/learning";
import Unit from "./pages/learning/unit";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Resource from "./pages/resources/resource";
import Setting from "./pages/setting/setting";
import TestInfo from "./pages/test/test-info";
import ImageQuiz from "./pages/test/tests/imageQuiz/imageQuiz";
import MatchingPairWordsQuiz from "./pages/test/tests/matchPairWords/matchPairWords";
import MoreButtonsQuiz from "./pages/test/tests/moreButtons/moreButtons";
import Quiz from "./pages/test/tests/quiz/quiz";
import TrueFalseQuiz from "./pages/test/tests/truefalse/trueOrFalse";
import UserService from "./service/user.service";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  });
  return;
};

const App = () => {
  const { user, isLoading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("jwt") && user == null) {
      const data = UserService.getUser(dispatch);
      if (data._id) {
        navigate("/home");
      }
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <div className="w-[100vw] overflow-x-hidden overflow-y-hidden relative">
      <Toast />
      <Routes>
        {user !== null && (
          <>
            <Route path="/home" element={<Layaout activPage={<Home />} />} />
            <Route
              path="/learning"
              element={<Layaout activPage={<Learning />} />}
            />
            <Route
              path="/resource"
              element={<Layaout activPage={<Resource />} />}
            />
            <Route
              path="/setting"
              element={<Layaout activPage={<Setting />} />}
            />
            <Route
              path="/tests"
              element={<Layaout activPage={<TestInfo />} />}
            />
            <Route
              path="/learning/:id"
              element={<Layaout activPage={<Unit />} />}
            />
          </>
        )}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Redirect />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test/:slug" element={<Quiz />} />
        <Route path="/test/true-false" element={<TrueFalseQuiz />} />
        <Route path="/test/more-buttons" element={<MoreButtonsQuiz />} />
        <Route path="/test/image-quiz" element={<ImageQuiz />} />
        <Route
          path="/test/matching-pair-words-quiz"
          element={<MatchingPairWordsQuiz />}
        />
      </Routes>
    </div>
  );
};

export default App;
