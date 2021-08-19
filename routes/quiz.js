import express from "express";
import {
  createQuiz,
  deleteQuiz,
  findQuizById,
  getQuiz,
  updateQuiz,
} from "../controllers/quiz.js";

const router = express.Router();

router.get("/", getQuiz);

router.post("/", createQuiz);

router.patch("/:id", updateQuiz);

router.delete("/:id", deleteQuiz);

router.get("/:id", findQuizById);

export default router;
