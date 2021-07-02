import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postSlices";
import authReducer from "./slices/authSlices";

const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
  },
});

export default store;
