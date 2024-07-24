import { Router } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router: Router = Router();

router.get("/list", cors(), async (req, res) => {
  const posts = await prisma.contents.findMany({
    select: {
      id: true,
      title: true,
      name: true,
    },
  });
  return res.send(posts);
});

router.get("/list/:id", cors(), async (req, res) => {
  const posts = await prisma.contents.findMany({
    where: {
      id: Number(req.params.id),
    },
  });
  return res.send(posts[0]);
});

router.post("/new", async (req, res) => {
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
