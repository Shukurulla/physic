import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ questions, result }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-2 bg-white rounded p-4">
      <h3 className="font-bold text-lg">Natija:</h3>
      <div className="border-b border-stone-500 pb-2">
        <p className="flex justify-between gap-10">
          Barcha savollar: <span className="font-bold">{questions.length}</span>
        </p>
        <p className="flex justify-between gap-10">
          Umumiy ball: <span className="font-bold">{result.score}</span>
        </p>
        <p className="flex justify-between gap-10">
          Tog'ri javoblar:{" "}
          <span className="font-bold text-green-500">
            {result.correctAnswers}
          </span>
        </p>
        <p className="flex justify-between gap-10">
          Xato javoblar:{" "}
          <span className="font-bold text-red-500">{result.wrongAnswers}</span>
        </p>
      </div>
      <div className="text-end flex justify-end gap-3">
        <button className="btn btn-primary" onClick={() => navigate("/tests")}>
          Orqaga qaytish
        </button>
        <button
          className="self-end bg-gray-500 px-4 py-2 rounded text-white"
          onClick={() => location.reload()}
        >
          Qayta boshlash
        </button>
      </div>
    </div>
  );
};

export default Result;
