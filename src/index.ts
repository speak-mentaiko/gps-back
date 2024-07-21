import express from "express";
import type { Express } from "express";
import greetingController from "./controllers/greeting";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/greetings", greetingController);

app.listen(8080, () => {
  console.log("Start on PORT:8080!");
});
