import { createSlice } from "@reduxjs/toolkit";

const milkSlice = createSlice({
  name: "cake",
  initialState: { numOfMilk: 10 },
  reducers: {
    buyMilk: (state, action) => {
      state.numOfMilk = state.numOfMilk - action.payload;
    },
    butTowMilk: (state, action) => {
      state.numOfMilk = -action.payload;
    },
  },
});

export const { butTowMilk, buyMilk } = milkSlice.actions;

export default milkSlice.reducer;
