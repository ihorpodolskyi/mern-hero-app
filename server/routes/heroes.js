import express from "express";
import { getHeroes, getHero, createHero, updateHero, deleteHero } from "../controllers/heroes.js";

const router = express.Router();

router.get("/", getHeroes);
router.get("/:id", getHero);
router.post("/", createHero);
router.patch("/:id", updateHero);
router.delete("/:id", deleteHero);

export default router;