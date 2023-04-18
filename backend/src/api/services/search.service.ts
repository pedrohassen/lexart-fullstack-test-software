import { type searches } from "@prisma/client";
import ISearch from "../interface/ISearch";
import { saveSearchModel } from "../models/search.model";

export const saveSearchService = async ({ photo, description, category, price, website }: ISearch): Promise<searches> => {

  const result = await saveSearchModel({ photo, description, category, price, website });

  return result;
}