import { PrismaClient, type searches } from "@prisma/client";
import ISearch from "../interface/ISearch";

const prisma = new PrismaClient();

export const saveSearchModel = async ({ photo, description, category, price, website }: ISearch): Promise<searches> => {
  return await prisma.searches.create({
    data: {
      photo,
      description,
      category,
      price,
      website
    }
  });
}
