import React from "react";
import { useSelector } from "react-redux";
import Hero from "./Hero/Hero";
import cls from "./Heroes.module.css";

const Heroes = ({ setCurrentId, currentPosts }) => {
  const heroes = useSelector((state) => state.heroes);

  const heroList = currentPosts.map((item) => (
    <Hero key={item._id} {...item} setCurrentId={setCurrentId} />
  ));

  return <div className={cls.box}>{heroList}</div>;
};

export default Heroes;