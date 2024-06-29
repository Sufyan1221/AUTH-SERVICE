import { createSlice, nanoid } from "@reduxjs/toolkit";

export const statuses = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const initialState = {
  Post: [],
  status: statuses.IDLE,
};

export const PostSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.Post = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setPost, setStatus } = PostSlice.actions;
export default PostSlice.reducer;

export function fetchPost() {
  return async function fetchPostThunk(dispatch, getstate) {
    dispatch(setStatus(statuses.LOADING));
    try {
      const res = await fetch("http://localhost:8000/api/posts", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },  
      });
      const posts = await res.json();
      dispatch(setPost(posts));
      dispatch(setStatus(statuses.IDLE));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(statuses.ERROR));
    }
  };
}
