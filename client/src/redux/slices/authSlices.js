import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/index";

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
  },
});

export const { login, logout } = authSlices.actions;

export const jwtAsyncSignup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch(login(data));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const jwtAsyncSignIn = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch(login(data));
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export default authSlices.reducer;
