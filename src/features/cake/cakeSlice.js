import { createSlice } from "@reduxjs/toolkit";

const cakeSlice = createSlice({
  name: "cake",
  initialState: { numOfCakes: 10 },
  reducers: {
    buyCake: (state, action) => {
      state.numOfCakes = state.numOfCakes - action.payload;
    },
    buyTwoCake : (state, action) => {
        state.numOfCakes = action.payload - 2
    }
  },
});

export const { buyCake, buyTwoCake } = cakeSlice.actions;

export default cakeSlice.reducer;

