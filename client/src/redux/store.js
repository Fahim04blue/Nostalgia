import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlices";

const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});

export default store;
