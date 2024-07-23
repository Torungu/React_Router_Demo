import { createSlice } from "@reduxjs/toolkit";
import { getRandomNumber } from "../../utils/utils";
const initialState = {
  dices: {
    dice1: 1,
    dice2: 2,
    dice3: 3,
  },
  win: 0,
  play: 0,
  choose: true,
};

const dicesSlice = createSlice({
  name: "dices",
  initialState,
  reducers: {
    userChosen: (state, action) => {
      console.log(action);
      state.choose = action.payload;
    },
    buttonPlay: (state, action) => {
      state.dices.dice1 = getRandomNumber();
      state.dices.dice2 = getRandomNumber();
      state.dices.dice3 = getRandomNumber();
      // state.dices = { dice1, dice2, dice3 };
      let tongDice = state.dices.dice1 + state.dices.dice2 + state.dices.dice3;
      state.play++;
      let checker = tongDice > 11 ? true : false;
      checker == state.choose && state.win++;
      // if (state.choose) {
      //   if (tongDice > 10) {
      //     state.win++;
      //   }
      // } else {
      //   if (tongDice <= 10) {
      //     state.win++;
      //   }
      // }
    },
  },
});
// function getRandomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

export const { userChosen, buttonPlay } = dicesSlice.actions;

export default dicesSlice.reducer;
