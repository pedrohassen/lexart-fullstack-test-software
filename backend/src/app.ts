import express from 'express';
import cors from 'cors';
import { SearchRoute } from './api/routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/scrap', SearchRoute);

export default app;