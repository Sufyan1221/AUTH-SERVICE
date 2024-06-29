import { createSlice, nanoid } from "@reduxjs/toolkit";
// import  statuses  from './PostSlice.js'

export const statuses = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  Auth: [],
  status: statuses.IDLE,
};

export const AuthSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.Auth = [];
      state.Auth.push(action.payload);
    },
    logout: (state, action) => {
      state.Auth = [];
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { login, logout, setStatus } = AuthSlice.actions;
export default AuthSlice.reducer;

export function getProfile() {
  console.log("hii");
  return async function getProfileThunk(dispatch, getstate) {
    dispatch(setStatus(statuses.LOADING));
    try {
      const res = await fetch("http://localhost:8000/api/profile", {
        method: "POST",
        // body: JSON.stringify({id : getstate().Auth.Auth[0].user?.id}),
        credentials: "include",
      });
      const profile = await res.json();
      console.log(profile);
      dispatch(login(profile));
      dispatch(setStatus(statuses.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(statuses.ERROR));
    }
  };
}

export const Logout = () => async (dispatch) => {
  dispatch(setStatus(statuses.LOADING));    

  try {
    const response = await fetch("http://localhost:8000/api/logout", {
      method: "GET",
      credentials: "include", // Include credentials (cookies)
    });

    if (!response.ok) {
      throw new Error("Logout failed");
    }
    dispatch(logout());
    dispatch(setStatus(statuses.IDLE));
  } catch (error) {
    dispatch(setStatus(statuses.ERROR));
  }
};
