import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { imageQuiz } from "../../../../service/db";
import UserService from "../../../../service/user.service";
import trueSound from "../../../../assets/sounds/true.wav";
import success from "../../../../assets/sounds/success.wav";
import wrong from "../../../../assets/sounds/wrong.mp3";
import "../quiz/quiz.scss";

const ImageQuiz = () => {
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

  const { questions } = imageQuiz;
  const { question, choices, correctAnswer, image } = questions[activeQuestion];

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
            score: prev.score + imageQuiz.perQuestionScore,
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

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const quizPostScore = () => {
    win.play();
    if (showResult) {
      const val = {
        userId: user._id,
        ...user,
        userScore: {
          ...user.userScore,
          imageQuiz: {
            quizName: imageQuiz.topic,
            score: result.score,
            correctAnswer: result.correctAnswers,
            wrong: result.wrongAnswers,
          },
        },
      };
      UserService.test(dispatch, val);
    }
  };

  useEffect(() => {
    if (showResult == true) {
      quizPostScore();
    }
  }, [showResult]);

  return (
    <div className="bg-[#F6F9FF] overflow-scroll py-10 h-[100vh] w-screen min-h-screen flex justify-center items-center">
      <div className="w-[90%] sm:w-3/4 py-10">
        {!showResult && (
          <>
            <div className="border h-4 rounded-full bg-gray-300 mb-3 w-3/4 mx-auto">
              <div
                className="bg-[#EE1D23] h-full rounded-full transition-all ease-in-out duration-300"
                style={{
                  width: `${Math.round(
                    ((activeQuestion + 1) / questions.length) * 100
                  )}%`,
                }}
              ></div>
            </div>
            <div className="bg-[#F5F5F5] shadow-[0_0_16px_0_#00000029]  quiz-wrapper sm:border-t-[15px] border-t-[10px]  border-[#EE1D23] rounded-[8px] sm:h-64 h-48  mb-10 lg:w-1/2 mx-auto">
              <img
                src={`./quiz-images/${image}`}
                alt="Quiz image"
                className="h-full mx-auto object-contain"
              />
            </div>
          </>
        )}
        <div className="shadow-[0_0_16px_0_#00000029] quiz-wrapper border-[#EE1D23] rounded-[8px] sm:border-t-[15px] border-t-[10px] bg-white  sm:p-8 p-4">
          {!showResult ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#EE1D23] font-semibold text-2xl sm:text-3xl">
                  Test
                </span>
                <span className="bg-[#EE1D23] text-white sm:text-sm sm:py-2 sm:px-4 text-sm py-1 px-3 rounded-full ">
                  {activeQuestion + 1}/{questions.length}
                </span>
              </div>
              <p className="sm:mb-10 mb-2">Durıs juwaptı belgileń</p>
              <p className="text-lg font-[600]">{question}</p>
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
                      {answer}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-[#EE1D23] h-1 w-fit flex my-4 items-center gap-6 mx-auto">
                {Array(questions.length)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`border-[3px] border-[#EE1D23] rounded-full size-4 ${
                        index === activeQuestion ? "bg-white" : "bg-[#EE1D23]"
                      }`}
                    ></div>
                  ))}
              </div>
              <div className="flex justify-end">
                {activeQuestion === questions.length - 1 ? (
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={selectedAnswerIndex === null}
                    onClick={onClickNext}
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
            <div className="flex flex-col gap-2 bg-white rounded p-4">
              <h3 className="font-bold text-lg">Nátiyje</h3>
              <div className="border-b border-stone-500 pb-2">
                <p className="flex justify-between gap-10">
                  Barlıq sorawlar:{" "}
                  <span className="font-bold">{questions.length}</span>
                </p>
                <p className="flex justify-between gap-10">
                  Ulıwma ball: <span className="font-bold">{result.score}</span>
                </p>
                <p className="flex justify-between gap-10">
                  Durıs juwaplar:{" "}
                  <span className="font-bold text-green-500">
                    {result.correctAnswers}
                  </span>
                </p>
                <p className="flex justify-between gap-10">
                  Qáte juwaplar:{" "}
                  <span className="font-bold text-red-500">
                    {result.wrongAnswers}
                  </span>
                </p>
              </div>
              <button
                className="self-end bg-gray-500 px-4 py-2 rounded text-white"
                onClick={() => location.reload()}
              >
                Qayta baslaw
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageQuiz;
