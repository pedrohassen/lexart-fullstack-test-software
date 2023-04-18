import { type Request, type Response } from "express";
import { saveSearchService } from "../services/search.service";
import { meliScrapper } from "../scrappers/meli.scrapper";
import { buscapeScrapper } from "../scrappers/buscape.scrapper";

export const saveSearchController = async (req: Request, res: Response): Promise<Response> => {
  const { photo, description, category, price, website } = req.body;   

  const search = await saveSearchService({ photo, description, category, price, website });

  return res.status(200).json(search);
}

export const queryController = async (req: Request, res: Response): Promise<Response> => {
  const { query, web, category } = req.body;

  if (!query || !web || !category) {
    return res.status(400).json({ message: 'Missing parameters' });
  }

  if (web === 'Mercado Livre') {
    const scrapMeli = await meliScrapper(query);
    return res.status(200).json(scrapMeli);
  } if (web === 'Buscapé') {
    const scrapBusca = await buscapeScrapper(query);
    return res.status(200).json(scrapBusca);
  }

  const scrapMeli = await meliScrapper(query);
  const scrapBusca = await buscapeScrapper(query);

  return res.status(200).json([...scrapMeli, ...scrapBusca]);
}
