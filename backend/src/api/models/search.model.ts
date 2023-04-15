import { PrismaClient, type searches } from "@prisma/client";
import ISearch from "../interface/ISearch";

export default class SearchModel {
  private readonly _prisma: PrismaClient;

  constructor() {
    this._prisma = new PrismaClient();
  }

  readonly saveSearch = async ({ photo, description, category, price, website }: ISearch): Promise<searches> => {
    return await this._prisma.searches.create({
      data: {
        photo,
        description,
        category,
        price,
        website
      }
    });
  }
}