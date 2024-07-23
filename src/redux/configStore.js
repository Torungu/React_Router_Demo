import { configureStore } from "@reduxjs/toolkit";
import pokemonSlice from "./slices/pokemonSlice";
import iPhoneSlice from "./slices/iPhoneSlice";
import userSlice from "./slices/userSlice";
import dicesSlice from "./slices/dicesSlice";

export const store = configureStore({
  reducer: {
    hoTen: () => {
      return "Hehe";
    },
    pokemonSlice,
    iPhoneSlice,
    userSlice,
    dicesSlice,
  },
});
