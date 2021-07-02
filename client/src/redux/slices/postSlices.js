import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api/index";

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    getPosts: (state, { payload }) => {
      state.posts = payload;
    },
    createPost: (state, { payload }) => {
      state.posts.push(payload);
    },
    updatePost: (state, { payload }) => {
      state.posts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
    },
    deletePost: (state, { payload }) => {
      state.posts = state.posts.filter((post) => post._id !== payload._id);
    },
    likePost: (state, { payload }) => {
      state.posts = state.posts.map((post) =>
        post._id === payload._id ? payload : post
      );
    },
  },
});

export const { getPosts, createPost, updatePost, deletePost, likePost } =
  postSlice.actions;

export const createAsyncPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch(createPost(data));
  } catch (error) {
    console.log(error);
  }
};

export const fetchAsyncPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch(getPosts(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateAsyncPost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch(updatePost(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteAsyncPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);
    dispatch(deletePost(data));
  } catch (error) {
    console.log(error);
  }
};

export const likeAsyncPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch(likePost(data));
  } catch (error) {}
};

export default postSlice.reducer;
