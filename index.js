import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postsRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";
import cookieParser from "cookie-parser";
import multer from "multer";

const app = express();

const allowedOrigins = ["http://localhost:3000"];

const options = (cors.CorsOptions = {
  origin: allowedOrigins,
  credentials: true,
});

app.use(cors(options));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Front-End/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/user", userRoutes);

app.listen(8800, () => {
  console.log("connected");
});
