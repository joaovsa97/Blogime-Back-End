import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);
app.use(cors({ origin: "*" }));

app.listen(8800, () => {
  console.log("connected");
});
