import { Router } from "express";
import { queryController } from "../controllers/search.controller";

const router = Router();
router.post('/', queryController);

export default router;