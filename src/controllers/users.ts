import express, { Router, Request, Response } from "express";
import mysql from "mysql2";
import { Data } from "../../connection";

const router: Router = express.Router();
/*type USER_TYPE = {
  id: null;
  password: string;
  name: string;
};*/

const connection = mysql.createConnection({
  host: Data.host,
  user: Data.user,
  password: Data.password,
  database: Data.database,
});

connection.connect((err: mysql.QueryError | null) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("success");
});

router.get("/", (req: Request, res: Response) => {
  connection.query("SELECT * FROM users", (err: string, results: []) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(results);
  });
});

router.post("/", (req: Request, res: Response) => {
  connection.query(
    `insert into users values (${req.body.id}, "${req.body.password}", "${req.body.name}")`,
    (err: string, results: []) => {
      if (err) {
        console.log(err);
        return;
      }
      res.send(results);
    }
  );
});

export default router;
