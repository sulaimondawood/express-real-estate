import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.unsubscribe(cookieParser());

app.use("/api/posts", postRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});
