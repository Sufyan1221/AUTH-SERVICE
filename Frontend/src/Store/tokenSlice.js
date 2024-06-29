import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  token: [],
};

export const tokenSlice = createSlice({
  name: "Token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;


