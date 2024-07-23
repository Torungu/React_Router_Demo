import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const { win, play, choose } = useSelector((state) => state.dicesSlice);
  return (
    <div className="result">
      <p>
        U choose:{" "}
        <span className="text-red-500 ml-2">{choose ? "Tai" : "Xiu"}</span>
      </p>
      <p>
        Wins: <span className="text-green-500 ml-2">{win}</span>
      </p>
      <p>
        Plays: <span className="text-yellow-500 ml-2">{play}</span>
      </p>
    </div>
  );
};

export default Result;
