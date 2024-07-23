import { Router } from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router: Router = Router();

router.get("/new", cors(), async (req, res) => {
  res.set({ "Access-Control-Allow-Origin": "*" });

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
