import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { infoTests } from "../../../../service/db";
import UserService from "../../../../service/user.service";
import trueSound from "../../../../assets/sounds/true.wav";
import success from "../../../../assets/sounds/success.wav";
import wrong from "../../../../assets/sounds/wrong.mp3";
import "../quiz/quiz.scss";
import Result from "../../../../components/result/result";
import KaTeXTextParser from "../../../../components/katex/parser";

const TrueFalseQuiz = () => {
  const { slug } = useParams();
  const [testData, setTestData] = useState(null);

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

  // slug asosida testni topish
  useEffect(() => {
    const foundTest = infoTests.find((item) => item.keyValue === slug);
    if (foundTest) {
      setTestData(foundTest.db);
    }
  }, [slug]);

  if (!testData) {
    return (
      <div className="text-center mt-10 text-red-600 font-bold">
        Test topilmadi yoki mavjud emas 😥
      </div>
    );
  }

  const { questions } = testData;
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
            score: prev.score + testData.perQuestionScore,
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

  const quizPostScore = () => {
    // Avval oxirgi javobni hisobga olamiz
    const finalResult = selectedAnswer
      ? {
          ...result,
          score: result.score + testData.perQuestionScore,
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
        [slug]: {
          quizName: testData.topic,
          score: finalResult.score,
          correctAnswer: finalResult.correctAnswers,
          wrong: finalResult.wrongAnswers,
        },
      },
    };
    UserService.test(dispatch, val);
    setShowResult(true);
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

  return (
    <div className="bg-[#F6F9FF] quiz w-screen min-h-screen flex justify-center items-center">
      <div className="w-[90%] sm:w-3/4 my-10">
        {!showResult ? (
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
              className="bg-[#79C142] h-full rounded-full transition-all ease-in-out duration-300"
              style={{
                width: `${Math.round(
                  ((activeQuestion + 1) / questions.length) * 100
                )}%`,
              }}
            ></div>
          </div>
        )}
        <div className="shadow-[0_0_16px_0_#00000029] quiz-wrapper border-t-[10px] sm:border-t-[20px] border-[#79C142] rounded-[8px] bg-white sm:p-8 p-4">
          {!showResult ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#79C142] font-semibold text-2xl sm:text-3xl">
                  {testData.topic}
                </span>
                <span className="bg-[#79C142] text-white sm:text-sm sm:py-2 sm:px-4 text-sm py-1 px-2 rounded-full ">
                  {activeQuestion + 1}/{questions.length}
                </span>
              </div>
              <p className="sm:mb-10 mb-2">Tog'ri javobni belgilang</p>
              <p className="text-lg font-[600]">
                <KaTeXTextParser>{question}</KaTeXTextParser>
              </p>
              <div className="flex justify-center items-center gap-2 mb-10 mt-6">
                {choices.map((answer, index) => (
                  <button
                    className={`${
                      selectedAnswerIndex !== null
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } px-4 py-2 rounded md:w-40 md:text-xl ${
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
                    <KaTeXTextParser>{answer}</KaTeXTextParser>
                  </button>
                ))}
              </div>
              <div className="bg-[#79C142] h-1 w-fit flex my-4 items-center gap-[15px] sm:gap-[25px] mx-auto">
                {Array(questions.length)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`border-[3px] border-[#79C142] rounded-full size-4 ${
                        index === activeQuestion ? "bg-white" : "bg-[#79C142]"
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
                    Keyingi
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

export default TrueFalseQuiz;
