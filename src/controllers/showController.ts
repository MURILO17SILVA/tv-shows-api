import { Request, Response } from "express";
import ShowDAO from "../daos/showDAO";
import { ShowModel, validateShowInputs } from "../domains/showModel";

export default class ShowController {
  private showDAO: ShowDAO;

  constructor() {
    this.showDAO = new ShowDAO();
  }

  async save(req: Request, res: Response) {
    const errorMessages = validateShowInputs(req.body);

    if (errorMessages.length === 0) {
      const { title, premiere, isRunning, language, mainGenre, posterUrl } = req.body;

      const show = new ShowModel({
        title,
        premiere: new Date(premiere),
        isRunning,
        language,
        mainGenre,
        posterUrl,
      });

      const savedShow = await this.showDAO.save(show);
      return res.status(201).json({ id: savedShow._id });
    }

    return res.status(400).json({ errorMessages });
  }

  async findByTitle(req: Request, res: Response) {
    const { title } = req.params;
    try {
      const shows = await this.showDAO.findByTitle(title);
      return res.status(200).json({ shows });
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve shows" });
    }
  }
}
