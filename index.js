import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import quizRoutes from "./routes/quiz.js";
import dotenv from "dotenv";

dotenv.config();

const user = process.env.DB_USER;
const pw = process.env.DB_PASS;
const name = process.env.DB_NAME;

const app = express();
app.use(cors());
app.use(
  express.json({
    limit: "20mb",
    extended: true,
  })
);
app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);
app.use("/quiz", quizRoutes);

const CONNECTION_URL = `mongodb+srv://${user}:${pw}@cluster0.hhjqb.mongodb.net/${name}?retryWrites=true&w=majority`;

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Connection is established and runnin on port ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);
