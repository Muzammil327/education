import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();
app.use(cors(
  {
    origin: 'http://localhost:3000',
  }
))

// env
dotenv.config();




app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  express.urlencoded({
    extended: true,
  })
);

export default app;
