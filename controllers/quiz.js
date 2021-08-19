import QuizData from "../models/quiz.js";
import mongoose from "mongoose";
export const getQuiz = async (req, res) => {
  try {
    const allQuizes = await QuizData.find();

    res.status(200).json(allQuizes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createQuiz = async (req, res) => {
  const quiz = req.body;

  const newQuiz = new QuizData(quiz);

  try {
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateQuiz = async (req, res) => {
  const { id: _id } = req.params;
  const quiz = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No quiz with that ID");
  }
  const updatedQuiz = await QuizData.findByIdAndUpdate(
    _id,
    { ...quiz, _id },
    { new: true }
  );
  res.json(updatedQuiz);
};

export const deleteQuiz = async (req, res) => {
  const { id } = await req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No quiz with that ID");
  }
  await QuizData.findByIdAndDelete(id);
  res.json({ message: "Quiz Deleted successfully" });
};

export const findQuizById = async (req, res) => {
  const id = req.params.id;
  try {
    const quiz = await QuizData.findById(id);
    res.status(200).json(quiz);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
