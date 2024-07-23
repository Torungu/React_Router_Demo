import React from "react";
import "./Dices.scss";
import ItemDices from "./ItemDices";
import Result from "./Result";
import { useDispatch, useSelector } from "react-redux";
import { buttonPlay } from "../../../redux/slices/dicesSlice";

const Dices = () => {
  // const { play } = useSelector((state) => state.dicesSlice);
  const dispatch = useDispatch();
  return (
    <div className="baiTap2">
      <h2 className="uppercase text-5xl">GAME DICES</h2>
      <ItemDices />
      <Result />
      <button
        className="btn bg-green-600 px-5 py-2 rounded-md text-white text-xl mt-5 btn-play"
        onClick={() => dispatch(buttonPlay(0))}
      >
        Play Games
      </button>
    </div>
  );
};

export default Dices;
