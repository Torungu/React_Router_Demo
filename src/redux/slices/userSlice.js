import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  hoTen: "Torungu",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    capNhatHoTen: (state, action) => {
      console.log(current(state));
      console.log(action.payload);
      state.hoTen = action.payload;
    },
  },
});

export const { capNhatHoTen } = userSlice.actions;

export default userSlice.reducer;
