import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postRoutes from "./routes/postRoutes.js";


dotenv.config();

const app = express();

// Connect to database
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 4000;
app.use("/api", postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

