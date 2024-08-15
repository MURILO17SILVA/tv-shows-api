import express from "express";
import cors from "cors";
import logger from "morgan";

import { connectToDB } from "./config/db";
import { showsRouter } from "./routes/showRoutes";

connectToDB();

export const app = express();

// Configuração de middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

app.use("/shows", showsRouter);
