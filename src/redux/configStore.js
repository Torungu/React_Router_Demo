import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemonSlice";
import iPhoneSlice from "./slices/iPhoneSlice";

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return "Hehe";
    },
    pokemonSlice,
    iPhoneSlice,
  },
});
