import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { infoTests, quiz } from "../../../../service/db";
import UserService from "../../../../service/user.service";
import trueSound from "../../../../assets/sounds/true.wav";
import success from "../../../../assets/sounds/success.wav";
import wrong from "../../../../assets/sounds/wrong.mp3";
import "./quiz.scss";
import Result from "../../../../components/result/result";
import { Link, useParams } from "react-router-dom";
import KaTeXTextParser from "../../../../components/katex/parser";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showCorrect, setShowCorrect] = useState(false);

  let wrongAudio = new Audio(wrong);
  let correct = new Audio(trueSound);
  let win = new Audio(success);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { slug } = useParams();

  const { questions } = infoTests.filter((c) => c.path == `/test/${slug}`)[0]
    .db;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const onClickNext = () => {
    setShowCorrect(false);
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + quiz.perQuestionScore,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    }
  };

  const onAnswerSelected = (answer, index) => {
    if (selectedAnswerIndex === null) {
      setShowCorrect(answer !== correctAnswer);
      setSelectedAnswerIndex(index);
      setSelectedAnswer(answer === correctAnswer);
    }
    if (answer === correctAnswer) {
      correct.play();
    } else {
      wrongAudio.play();
    }
  };

  const keyValue = infoTests.filter((c) => c.path == `/test/${slug}`)[0]
    .keyValue;

  const quizPostScore = () => {
    // Avval oxirgi javobni hisobga olamiz
    const finalResult = selectedAnswer
      ? {
          ...result,
          score: result.score + quiz.perQuestionScore,
          correctAnswers: result.correctAnswers + 1,
        }
      : {
          ...result,
          wrongAnswers: result.wrongAnswers + 1,
        };

    setResult(finalResult);
    win.play();

    const val = {
      userId: user._id,
      ...user,
      userScore: {
        ...user.userScore,
        [keyValue]: {
          quizName: quiz.topic,
          score: finalResult.score,
          correctAnswer: finalResult.correctAnswers,
          wrong: finalResult.wrongAnswers,
        },
      },
    };
    UserService.test(dispatch, val);
    setShowResult(true);
  };

  return (
    <div className="bg-[#F6F9FF] w-screen min-h-screen flex justify-center items-center">
      <div className="w-[90%] sm:w-3/4 my-10">
        {showResult ? (
          <Link
            to={"/tests"}
            className="btn btn-primary absolute top-10 left-10 "
          >
            <i className="bi bi-arrow-left"></i> Testlarga qaytish
          </Link>
        ) : (
          ""
        )}
        {!showResult && (
          <div className="border h-4 rounded-full bg-gray-300 mb-10 w-3/4 mx-auto">
            <div
              className="bg-blue-500 h-full rounded-full transition-all ease-in-out duration-300"
              style={{
                width: `${Math.round(
                  ((activeQuestion + 1) / questions.length) * 100
                )}%`,
              }}
            ></div>
          </div>
        )}
        <div className="shadow-[0_0_16px_0_#00000029] quiz-wrapper border-t-[10px] sm:border-t-[20px] rounded-[8px] bg-white  sm:p-8 p-4">
          {!showResult ? (
            <>
              <div className="flex justify-between items-center sm:mb-4 mb-2">
                <span className="text-blue-500 font-semibold text-2xl sm:text-3xl">
                  Test
                </span>
                <span className="bg-blue-500 text-white sm:text-sm sm:py-2 sm:px-4 text-sm py-1 px-2 rounded-full ">
                  {activeQuestion + 1}/{questions.length}
                </span>
              </div>
              <p className="sm:mb-10 mb-2">Tog'ri javobni belgilang</p>
              <p className="text-lg font-[600]">
                <KaTeXTextParser>{question}</KaTeXTextParser>
              </p>
              <div className="space-y-2 mb-10 mt-6">
                {choices.map((answer, index) => (
                  <div
                    className={`${
                      selectedAnswerIndex !== null
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } flex items-center gap-2`}
                    key={index}
                    onClick={() => onAnswerSelected(answer, index)}
                  >
                    <div className="size-4 rounded-full shadow-[0_0_8px_0_#00000040_inset] flex justify-center items-center">
                      <div
                        className={`rounded-full ${
                          choices.indexOf(correctAnswer) !== index &&
                          selectedAnswerIndex === index
                            ? "bg-red-500"
                            : selectedAnswerIndex === index
                            ? "bg-green-500"
                            : showCorrect &&
                              choices.indexOf(correctAnswer) === index
                            ? "bg-green-500"
                            : ""
                        } size-2`}
                      ></div>
                    </div>
                    <span
                      className={`${
                        choices.indexOf(correctAnswer) !== index &&
                        selectedAnswerIndex === index
                          ? "text-red-500"
                          : selectedAnswerIndex === index
                          ? "text-green-500"
                          : showCorrect &&
                            choices.indexOf(correctAnswer) === index
                          ? "text-green-500"
                          : ""
                      }`}
                    >
                      <KaTeXTextParser>{answer}</KaTeXTextParser>
                    </span>
                  </div>
                ))}
              </div>

              <div className="bg-blue-500 h-1 w-fit flex my-4 items-center gap-[15px] sm:gap-[25px]  mx-auto">
                {Array(questions.length)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`border-[3px] border-blue-500 rounded-full size-4 ${
                        index === activeQuestion ? "bg-white" : "bg-blue-500"
                      }`}
                    ></div>
                  ))}
              </div>
              <div className="flex justify-end">
                {activeQuestion === questions.length - 1 ? (
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={selectedAnswerIndex === null}
                    onClick={quizPostScore}
                  >
                    Yakunlash
                  </button>
                ) : (
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={selectedAnswerIndex === null}
                    onClick={onClickNext}
                  >
                    Keyingisi
                  </button>
                )}
              </div>
            </>
          ) : (
            <Result questions={questions} result={result} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
