import express from "express";
import authRoutes from "./routes/auth.js"
import postsRoutes from "./routes/posts.js"
import userRoutes from "./routes/user.js"

const app = express()

app.use(express.json())
app.use("/posts", authRoutes)
app.use("/posts", postsRoutes)
app.use("/user", userRoutes)

app.listen(8800, () => {
    console.log("connected")
})