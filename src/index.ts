import express from "express";
import cors from "cors";
import path from "path";
import type { Express } from "express";
import contentsController from "./controllers/contents";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', (req, res) => {
  res.render('index'); // "index.ejs"をレンダリング
});

app.use("/contents", contentsController);

app.listen(3000, () => {
  console.log("Start on PORT:3000!");
});
