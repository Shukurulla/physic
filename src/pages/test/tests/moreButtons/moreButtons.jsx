import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { moreButtonsQuiz } from "../../../../service/db";
import UserService from "../../../../service/user.service";
import trueSound from "../../../../assets/sounds/true.wav";
import success from "../../../../assets/sounds/success.wav";
import wrong from "../../../../assets/sounds/wrong.mp3";
import "../quiz/quiz.scss";
import Result from "../../../../components/result/result";

const MoreButtonsQuiz = () => {
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

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const { questions } = moreButtonsQuiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  let wrongAudio = new Audio(wrong);
  let correct = new Audio(trueSound);
  let win = new Audio(success);

  const onClickNext = () => {
    setShowCorrect(false);
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + moreButtonsQuiz.perQuestionScore,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
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

  const quizPostScore = () => {
    win.play();
    const val = {
      userId: user._id,
      ...user,
      userScore: {
        ...user.userScore,
        moreButtons: {
          quizName: moreButtonsQuiz.topic,
          score: result.score,
          correctAnswer: result.correctAnswers,
          wrong: result.wrongAnswers + 1,
        },
      },
    };
    UserService.test(dispatch, val);
    onClickNext();
  };

  return (
    <div className="bg-[#F6F9FF] w-screen min-h-screen flex justify-center items-center">
      <div className="w-[90%] sm:w-3/4 my-10">
        {!showResult && (
          <div className="border h-4 rounded-full bg-gray-300 mb-10 w-3/4 mx-auto">
            <div
              className="bg-[#FFE500] h-full rounded-full transition-all ease-in-out duration-300"
              style={{
                width: `${Math.round(
                  ((activeQuestion + 1) / questions.length) * 100
                )}%`,
              }}
            ></div>
          </div>
        )}
        <div className="shadow-[0_0_16px_0_#00000029] quiz-wrapper border-t-[10px] sm:p-8 p-4 sm:border-t-[20px] border-[#FFE500] rounded-[8px] bg-white ">
          {!showResult ? (
            <>
              <div className="flex justify-between items-center sm:mb-4 mb-2">
                <span className="text-[#FFE500] font-semibold text-2xl sm:text-3xl ">
                  Test
                </span>
                <span className="bg-[#FFE500] text-white font-montserrat font-[600] sm:px-4 text-sm py-1 px-3 rounded-full ">
                  {activeQuestion + 1}/{questions.length}
                </span>
              </div>
              <p className="sm:mb-10 mb-2">Durıs juwaptı belgileń</p>
              <p className="text-lg font-[600]">{question}</p>
              <div className="flex items-center flex-wrap lg:w-1/2 gap-2 mb-10 mt-6">
                {choices.map((answer, index) => (
                  <button
                    className={`${
                      selectedAnswerIndex !== null
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } px-4 py-2 rounded ${
                      selectedAnswerIndex === index &&
                      "border-4 border-blue-400"
                    } ${
                      choices.indexOf(correctAnswer) !== index &&
                      selectedAnswerIndex === index
                        ? "bg-red-500"
                        : selectedAnswerIndex === index
                        ? "bg-green-500"
                        : showCorrect &&
                          choices.indexOf(correctAnswer) === index
                        ? "bg-green-500"
                        : "bg-[#D9D9D9]"
                    }`}
                    key={index}
                    onClick={() => onAnswerSelected(answer, index)}
                  >
                    {answer}
                  </button>
                ))}
              </div>
              <div className="bg-[#FFE500] h-1 w-fit flex my-4 items-center gap-[15px] sm:gap-[25px] mx-auto">
                {Array(questions.length)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`border-[3px] border-[#FFE500] rounded-full size-4 ${
                        index === activeQuestion ? "bg-white" : "bg-[#FFE500]"
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
                    Jumaqlaw
                  </button>
                ) : (
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={selectedAnswerIndex === null}
                    onClick={onClickNext}
                  >
                    Kiyingi
                  </button>
                )}
              </div>
            </>
          ) : (
            <Result result={result} questions={questions} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreButtonsQuiz;
