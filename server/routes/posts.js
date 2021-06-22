import express from "express";
import {
  createPosts,
  deletePosts,
  getPosts,
  updatePosts,
  likePosts,
} from "../controllers/postsController.js";
import auth from "../middleware/userMiddleware.js";

const router = express.Router();

//localhost:5000/posts
router.get("/", getPosts);
router.post("/", auth, createPosts);
router.patch("/:id", auth, updatePosts);
router.delete("/:id", auth, deletePosts);
router.patch("/:id/likePost", auth, likePosts);

export default router;
