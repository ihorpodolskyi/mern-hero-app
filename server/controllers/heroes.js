import HeroDescription from "../models/heroDescription.js";
import mongoose from "mongoose";

export const getHeroes = async (req, res) => {
  try {
    const heroDescriptions = await HeroDescription.find();
    res.status(200).json(heroDescriptions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getHero = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  const postMessage = await HeroDescription.findById(id);
  res.status(200).json(postMessage);
};

export const createHero = async (req, res) => {
  const hero = req.body;
  const newHero = new HeroDescription(hero);
  console.log(hero);
  try {
    await newHero.save();
    res.status(201).json(newHero);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateHero = async (req, res) => {
  const { id: _id } = req.params;
  const hero = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }

  const updatedHero = await HeroDescription.findByIdAndUpdate(
    _id,
    { ...hero, _id },
    { new: true }
  );

  res.json(updatedHero);
};

export const deleteHero = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No post with that id");
  }

  await HeroDescription.findByIdAndRemove(id);
  res.json({ message: "Post deleted successfully" });
};