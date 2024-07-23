import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userChosen } from "../../../redux/slices/dicesSlice";

const ItemDices = () => {
  const { dices } = useSelector((state) => state.dicesSlice);
  const dispatch = useDispatch();
  // console.log(dices);
  return (
    <div className="dices flex justify-between">
      <button className="btn-dices" onClick={() => dispatch(userChosen(true))}>
        Tai
      </button>
      <div className="flex items-center p-3 bg-white h-max">
        <img src={`/Dices/${dices.dice1}.png`} alt="" width={50} />
        <img src={`/Dices/${dices.dice2}.png`} alt="" width={50} />
        <img src={`/Dices/${dices.dice3}.png`} width={50} />
      </div>
      <button className="btn-dices" onClick={() => dispatch(userChosen(false))}>
        Xiu
      </button>
    </div>
  );
};

export default ItemDices;
