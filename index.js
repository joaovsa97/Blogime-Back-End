import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

const app = express();

const allowedOrigins = ['http://localhost:3000'];

const options = cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

app.listen(8800, () => {
  console.log("connected");
});
