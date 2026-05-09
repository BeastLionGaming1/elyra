import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./lib/db.js";
import authRoutes from "./router/auth.router.js";

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);

// connectDB();

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "Welcome to Elyra Backend Server!"
  });
});

const startServer = async (_, res) => {
  try {
    if (!PORT) {
      console.log('PORT is not defined.');
    }
    
    app.listen(PORT, () => {
      console.log(`Server Started on PORT: ${PORT}`);
    });
  } catch (error) {
    console.log("Internal Server Error, Try Again Later!", error);
  }
}

startServer();