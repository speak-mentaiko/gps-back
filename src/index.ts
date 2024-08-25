import express from "express";
import cors from "cors";
import type { Express } from "express";
import contentsController from "./controllers/contents";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contents", contentsController);

app.listen(3000, () => {
  console.log("Start on PORT:3000!");
});
