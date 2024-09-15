import { useEffect, useState } from "react";
import { matchingPairWordsQuiz } from "../../../../service/db";
import { shuffleArray } from "../../../../utilities/shuffleArray.js";
import wrongSound from "../../../../assets/sounds/wrong.mp3";
import correctSound from "../../../../assets/sounds/true.wav";
import winSound from "../../../../assets/sounds/success.wav";
import ConfettiExplosion from "react-confetti-explosion";
import { useDispatch, useSelector } from "react-redux";
import UserService from "../../../../service/user.service";

const MatchingPairWordsQuiz = () => {
  const [pairs, setPairs] = useState({ leftValue: "", rightValue: "" });
  const [leftClick, setLeftClick] = useState(null);
  const [rightClick, setRightClick] = useState(null);
  const [events, setEvents] = useState({ e1: "", e2: "" });
  const [foundedWords, setFoundedWords] = useState([]);
  const [leftSideWords, setLeftSideWords] = useState(
    shuffleArray(Object.keys(matchingPairWordsQuiz.questions[0]))
  );
  const [rightSideWords, setRightSideWords] = useState(
    shuffleArray(Object.values(matchingPairWordsQuiz.questions[0]))
  );
  let wrong = new Audio(wrongSound);
  let correct = new Audio(correctSound);
  let win = new Audio(winSound);
  const [isExploding, setExploding] = useState(false);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const [showResult, setShowResult] = useState(false);

  const { questions } = matchingPairWordsQuiz;
  const { question } = questions[activeQuestion];

  const onClickNext = () => {
    setFoundedWords([]);
    setLeftClick(null);
    setRightClick(null);
    setExploding(false);
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  useEffect(() => {
    setLeftSideWords(
      shuffleArray(Object.keys(matchingPairWordsQuiz.questions[activeQuestion]))
    );
    setRightSideWords(
      shuffleArray(
        Object.values(matchingPairWordsQuiz.questions[activeQuestion])
      )
    );
  }, [activeQuestion]);

  const handleClick = (side, e, index, item) => {
    if (side === "left") {
      setEvents({ ...events, e1: e });
      setLeftClick(index);
      setPairs({ ...pairs, leftValue: item });
    } else {
      setEvents({ ...events, e2: e });
      setRightClick(index);
      setPairs({ ...pairs, rightValue: item });
    }
  };

  useEffect(() => {
    if (pairs.leftValue !== "" && pairs.rightValue !== "") {
      if (
        matchingPairWordsQuiz.questions[activeQuestion][pairs.leftValue] ===
        pairs.rightValue
      ) {
        correct.play();
        setResult((prev) => ({
          ...prev,
          score: prev.score + matchingPairWordsQuiz.perQuestionScore,
          correctAnswers: prev.correctAnswers + 1,
        }));
        setFoundedWords([...foundedWords, pairs.leftValue, pairs.rightValue]);
        events.e1.target.classList.add("true");
        events.e2.target.classList.add("true");
        setTimeout(() => {
          events.e1.target.classList.remove("true");
          events.e2.target.classList.remove("true");
          events.e1.target.disabled = true;
          events.e2.target.disabled = true;
        }, 500);
      } else {
        wrong.play();
        setResult((prev) => ({
          ...prev,
          wrongAnswers: prev.wrongAnswers + 1,
          correctAnswers: prev.correctAnswers - 1,
          score: prev.score - matchingPairWordsQuiz.perQuestionScore,
        }));
        events.e1.target.classList.add("wrong");
        events.e2.target.classList.add("wrong");
        setTimeout(() => {
          setLeftClick(null);
          setRightClick(null);
          events.e1.target.classList.remove("wrong");
          events.e2.target.classList.remove("wrong");
        }, 500);
      }
      setPairs({ leftValue: "", rightValue: "" });
    }
  }, [pairs]);

  useEffect(() => {
    if (
      foundedWords.length ===
      Object.keys(matchingPairWordsQuiz.questions[activeQuestion]).length +
        Object.values(matchingPairWordsQuiz.questions[activeQuestion]).length
    ) {
      setTimeout(() => {
        win.play();
        setExploding(true);
      }, 100);
    }
  }, [foundedWords]);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const quizPostScore = () => {
    const val = {
      userId: user._id,
      ...user,
      userScore: {
        ...user.userScore,
        matchingPairWordsQuiz: {
          quizName: matchingPairWordsQuiz.topic,
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
    <div className="bg-[#F6F9FF] w-screen min-h-screen h-[100vh] overflow-y-scroll flex justify-center items-center">
      <div className="w-[90%] sm:w-3/4 my-10">
        {!showResult && (
          <div className="border h-4 rounded-full bg-gray-300 mb-10 w-3/4 mx-auto">
            <div
              className="bg-[#F47921] h-full rounded-full transition-all ease-in-out duration-300"
              style={{
                width: `${Math.round(
                  ((activeQuestion + 1) / questions.length) * 100
                )}%`,
              }}
            ></div>
          </div>
        )}
        <div className="shadow-[0_0_16px_0_#00000029] sm:p-8  border-t-[10px] sm:border-t-[15px] border-[#F47921] rounded-[8px] bg-white p-4">
          {!showResult ? (
            <>
              <div className="flex justify-between items-center sm:mb-4 mb-2">
                <span className="text-[#F47921] font-semibold text-3xl">
                  Test
                </span>
                <span className="bg-[#F47921] text-white sm:text-sm sm:py-2 sm:px-5 py-1 text-sm  px-3 rounded-full ">
                  {activeQuestion + 1}/{questions.length}
                </span>
              </div>
              <p className="mb-10">
                Óz-ara sáykes keletuǵın juplıqlardı tańlań
              </p>
              <div className="flex justify-center items-center gap-2 mb-10 mt-6">
                <div className="grid gap-6">
                  {leftSideWords.map((item, index) => (
                    <button
                      key={item}
                      onClick={(e) => handleClick("left", e, index, item)}
                      className={`w-28 h-12 md:w-40 md:h-16 text-white font-bold md:text-lg bg-[#F47921CC] cursor-pointer select-none transition-all duration-150 rounded-full border border-[#F47921] ${
                        leftClick === index
                          ? "clicked translate-y-2"
                          : foundedWords.includes(item)
                          ? "translate-y-2"
                          : "[box-shadow:0_10px_0_0_#F47921,0_15px_0_0_#F47921]"
                      } disabled:clicked disabled:opacity-50`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="grid gap-6">
                  {rightSideWords.map((item, index) => (
                    <button
                      key={item}
                      onClick={(e) => handleClick("right", e, index, item)}
                      className={`w-28 h-12 md:w-40 md:h-16 text-white font-bold md:text-lg bg-[#F47921CC] cursor-pointer select-none transition-all duration-150 rounded-full border border-[#F47921] ${
                        rightClick === index
                          ? "clicked translate-y-2"
                          : foundedWords.includes(item)
                          ? "translate-y-2"
                          : "[box-shadow:0_10px_0_0_#F47921,0_15px_0_0_#F47921]"
                      } disabled:clicked disabled:opacity-50`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
              <div className="bg-[#F47921CC] h-1 w-fit flex my-4 items-center gap-[15px] sm:gap-[25px] mx-auto">
                {Array(questions.length)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      key={index}
                      className={`border-[3px] border-[#F47921CC] rounded-full size-4 ${
                        index === activeQuestion ? "bg-white" : "bg-[#F47921CC]"
                      }`}
                    ></div>
                  ))}
              </div>
              <div className="flex justify-end">
                {activeQuestion === questions.length - 1 ? (
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={
                      foundedWords.length === 0 ||
                      foundedWords.length %
                        (leftSideWords.length + rightSideWords.length) !==
                        0
                    }
                    onClick={quizPostScore}
                  >
                    Juwmqlaw
                  </button>
                ) : (
                  <button
                    className="bg-gray-300 px-4 py-2 rounded-full disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={
                      foundedWords.length === 0 ||
                      foundedWords.length %
                        (leftSideWords.length + rightSideWords.length) !==
                        0
                    }
                    onClick={onClickNext}
                  >
                    Kiyingisi
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="flex flex-col gap-2 bg-white rounded p-4">
              <h3 className="font-bold text-lg">Nátiyje</h3>
              <div className="border-b border-stone-500 pb-2">
                <p className="flex justify-between gap-10">
                  Barlıq basqıshlar:{" "}
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
      {isExploding && (
        <ConfettiExplosion
          className="absolute top-1/4 left-1/2 -translate-x-1/2"
          duration={3000}
          force={0.8}
          particleCount={250}
          width={1600}
        />
      )}
    </div>
  );
};

export default MatchingPairWordsQuiz;
