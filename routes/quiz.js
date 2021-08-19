import express from "express";
import {
  createQuiz,
  deleteQuiz,
  getQuiz,
  updateQuiz,
} from "../controllers/quiz.js";

const router = express.Router();

router.get("/", getQuiz);

router.post("/", createQuiz);

router.patch("/:id", updateQuiz);

router.delete("/:id", deleteQuiz);

export default router;
