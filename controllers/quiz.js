import QuizData from "../models/quiz.js";

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
