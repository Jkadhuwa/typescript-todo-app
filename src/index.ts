import 'dotenv/config';
import "reflect-metadata";
import { createConnection} from "typeorm";
import config from '../ormconfig';
import express from "express";
import cors from 'cors';
import Routes from "./routes";

(async () => {
  try {
    await createConnection(config);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => { 
    console.log(`Server is running:${PORT}`);
  }
)})();