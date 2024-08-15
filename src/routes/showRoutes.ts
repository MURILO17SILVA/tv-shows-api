import { Router } from "express";
import ShowController from "../controllers/showController";

export const showsRouter = Router();

const showCtrl = new ShowController();

// POST /shows
showsRouter.post("/", (req, res) => showCtrl.save(req, res));

// GET /shows/:title
showsRouter.get("/:title", (req, res) => showCtrl.findByTitle(req, res));
