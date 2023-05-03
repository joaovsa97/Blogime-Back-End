import express from "express";
import { addPosts } from "../controllers/post.js";

const router = express.Router();

router.get("/", addPosts);

export default router;
