import { Router } from "express";
import type SearchesController from "../controllers/search.controller";

export default class SearchRoute {
  public _router: Router;

  constructor(private readonly controller: SearchesController) {
    this._router = Router();
  }

  public _routes = (route = '/search'): void =>{
    this._router.post(route, this.controller.saveSearch);
  }
}