import { Router } from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const router: Router = Router();

const filePath = path.join(__dirname, "data.json");
let num = 1;

type data = {
  id: string;
  data: [];
};

router.get("/list", cors(), async (req, res) => {
  const fileData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  const idList = fileData.records.map((record: data) => record.id);

  res.status(200).json({ ids: idList });
});

router.get("/list/:id", cors(), async (req, res) => {
  const { id } = req.params;
  const fileData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const record = fileData.records.find((record: data) => record.id === id);

  if (!record) {
    return res.status(404).json({ message: "Data not found." });
  }

  res.status(200).json(record);
});

router.post("/new", async (req, res) => {
  const data = req.body;
  if (!Array.isArray(data)) {
    return res
      .status(400)
      .json({ message: "Invalid data format. Expected an array." });
  }

  const fileData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const newRecord = {
    id: uuidv4(),
    data: data,
  };

  fileData.records.push(newRecord);

  fs.writeFile(filePath, JSON.stringify(fileData, null, 2), (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).json({ message: "Failed to save data." });
    }
    res
      .status(200)
      .json({ message: "Data saved successfully.", id: newRecord.id });
  });
});

export default router;
