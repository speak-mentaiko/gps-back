import express from "express";
import type { Express } from "express";
import contentsController from "./controllers/contents";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/contents", contentsController);

app.listen(8080, () => {
  console.log("Start on PORT:8080!");
});
