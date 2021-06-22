import express from "express";
import {
  createPosts,
  deletePosts,
  getPosts,
  updatePosts,
  likePosts,
} from "../controllers/postsController.js";

const router = express.Router();

//localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePosts);
router.patch("/:id/likePost", likePosts);

export default router;
