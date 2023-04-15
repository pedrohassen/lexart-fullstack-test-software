import { type Request, type Response } from "express";
import SearchService from "../services/search.service";

export default class SearchController {
  constructor(private readonly service: SearchService) {}

  readonly saveSearch = async (req: Request, res: Response): Promise<Response> => {
    const { photo, description, category, price, website } = req.body;   

    const search = await this.service.saveSearch({ photo, description, category, price, website });

    return res.status(201).json(search);
  }
}