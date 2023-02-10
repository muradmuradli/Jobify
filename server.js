import express from "express";
const app = express();
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();

// db & authenticateUser
import connectDB from "./db/connectDB.js";

// routes
import authRoutes from "./routes/authRoutes.js";
import jobsRoutes from "./routes/jobsRoutes.js";

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/auth.js";

// make sure json data is available in the controllers
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
app.use(express.json());

app.get("/api/v1", (req, res) => {
  res.send("Home route");
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/jobs", authenticateUser, jobsRoutes);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL).then(() =>
      console.log("Connected to DB")
    );
    app.listen(port, () => console.log(`Server running on PORT ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
