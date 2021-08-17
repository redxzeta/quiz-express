import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  quizNumber: Number,
  question: String,
  answer: String,
  topic: String,
});

const quiz = mongoose.model("Quiz", quizSchema);

export default quiz;
