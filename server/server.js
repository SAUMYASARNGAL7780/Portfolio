import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🎀 Saumya's portfolio API is up and running!");
});

app.use("/api", apiRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`✨ Server listening on http://localhost:${PORT}`);
  });
});
