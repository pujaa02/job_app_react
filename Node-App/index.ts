import express, { Application, NextFunction } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import main from "./routes/router";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

dotenv.config();
const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET, PUT, POST",
  credentials: true,
};
app.use(cors(corsOptions));
app.options("http://localhost:3000", cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("hello");
});

try {
  app.listen(port, () => {
    console.log(`Server is running in port: ${port} `);
    app.use(main);
  });
} catch (error) {
  console.log(`Error: ${error}`);
}
