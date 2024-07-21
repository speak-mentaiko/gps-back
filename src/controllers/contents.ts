import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router: Router = Router();

router.get("/", async (req, res) => {
  const posts = await prisma.contents.findMany();
  return res.send(posts);
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
  return res.send(posts);
});

export default router;
