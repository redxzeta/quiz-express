import mongoose from "mongoose";

const quizSchema = mongoose.Schema({
  question: String,
  answer: String,
  author: {
    type: String,
    default: "unknown",
  },
  topic: String,
  created: {
    type: Date,
    default: Date.now,
  },
});

const quiz = mongoose.model("Quiz", quizSchema);

export default quiz;
