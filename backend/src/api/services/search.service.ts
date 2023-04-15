import { type searches } from "@prisma/client";
import ISearch from "../interface/ISearch";
import SearchModel from "../models/search.model";

export default class SearchService {
  constructor(private readonly model: SearchModel) {}

  readonly saveSearch = async ({ photo, description, category, price, website }: ISearch): Promise<searches> => {

    const result = await this.model.saveSearch({ photo, description, category, price, website });

    return result;
  }
}