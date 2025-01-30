import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// 2
export const getAsyncUsers = createAsyncThunk(
  "user/getAsyncUsers",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// 1
const initialState = {
  loading: false,
  data: [],
  error: "",
};

// 3
const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncUsers.pending, (state) => {
        state.loading = true;
        state.data = [];
        state.error = "";
      })
      .addCase(getAsyncUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = "";
      })
      .addCase(getAsyncUsers.rejected, (state, action) => {
        state.error = false;
        state.data = [];
        state.error = action.payload.error.message;
      });
  },
});

export default userSlice.reducer;
