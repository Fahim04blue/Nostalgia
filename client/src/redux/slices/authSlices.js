import { createSlice } from "@reduxjs/toolkit";

const authSlices = createSlice({
  name: "auth",
  initialState: {
    authData: null,
  },
  reducers: {
    login: (state, { payload }) => {
      localStorage.setItem("profile", JSON.stringify({ ...payload?.data }));

      state.authData = payload?.data;
    },
    logout: (state, { payload }) => {
      localStorage.clear();
      state.authData = null;
    },
    jwtSignup: (state, { payload }) => {},
    jwtSignIn: (state, { payload }) => {},
  },
});

export const { login, logout, jwtSignup, jwtSignIn } = authSlices.actions;

export const jwtAsyncSignup = (formData, history) => async (dispatch) => {
  try {
  } catch (error) {}
};

export const jwtAsyncSignIn = (formData, history) => async (dispatch) => {
  try {
  } catch (error) {}
};

export default authSlices.reducer;
