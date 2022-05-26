import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // Allow cors from all origins.
app.use(express.json()); // Middleware for parsing JSON bodies.

// Health checks.
app.get("/health", (req, res) => {
  return res.status(200).json({ status: "healthy" });
});

export default app;
