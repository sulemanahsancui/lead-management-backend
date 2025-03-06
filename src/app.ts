import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import leadRoutes from "./routes/lead.routes";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/leads", leadRoutes);

export default app;
