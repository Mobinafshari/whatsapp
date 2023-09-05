import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import mongoSanitize from 'express-mongo-sanitize';
import cookieParser from "cookie-parser";
import compression from "compression";
import fileUpload from "express-fileupload";
import cors from 'cors';

//dotenv config
dotenv.config();

//create express app
const app = express();

//use morgan
if(process.env.NODE_ENV !== "production"){
    app.use(morgan("dev"));
}
//middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));
app.use(mongoSanitize());
app.use(cookieParser());
app.use(compression());
app.use(fileUpload({
  useTempFiles:true
}));
app.use(cors());

app.post("/test", (req, res) => {
  res.status(200).json(req.body);
});

export default app;
