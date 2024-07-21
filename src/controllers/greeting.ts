import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router: Router = Router();

const greetings = [
  { id: 0, greeting: "Hello!" },
  { id: 1, greeting: "Nice to meet you!" },
];

router.get("/", (req, res) => {
  res.send(greetings);
});

router.post("/", async (req, res) => {
  const { title, name, body } = req.body;
  const posts = await prisma.contents.create({
    data: {
      title,
      name,
      body,
    },
  });
  return res.json(posts);
});

export default router;
