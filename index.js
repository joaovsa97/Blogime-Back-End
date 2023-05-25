import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options = cors.CorsOptions = {
  origin: allowedOrigins,
  credentials:true
};

app.use(cors(options));

app.use(express.json());
app.use(cookieParser())
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

app.listen(8800, () => {
  console.log("connected");
});
