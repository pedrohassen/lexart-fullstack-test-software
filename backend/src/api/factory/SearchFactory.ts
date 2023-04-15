import { type Router } from "express";
import SearchModel from "../models/search.model";
import SearchService from "../services/search.service";
import SearchController from "../controllers/search.controller";
import { SearchRoute } from "../routes";

export class SearchFactory {
  public static createSearchRouter(): Router {
    const searchModel = new SearchModel();
    const searchService = new SearchService(searchModel);
    const searchController = new SearchController(searchService);
    const searchRoute = new SearchRoute(searchController);
    searchRoute._routes();
    return searchRoute._router;
  }
}