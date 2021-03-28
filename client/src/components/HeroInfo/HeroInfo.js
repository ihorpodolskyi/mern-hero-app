import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cls from "./HeroInfo.module.css";

const HeroInfo = () => {
  const hero = useSelector((state) => state.hero);

  return (
    <div className={cls.box}>
      <div className={cls.cardHero}>
        <h2 className={cls.heroTitle}>{hero.nickname}</h2>
        <h3 className={cls.heroSubtitle}>{hero.realName}</h3>
        <p>{hero.originDesc}</p>
        <p>{hero.originDesc}</p>
        <p>{hero.catchPhrase}</p>
        <p>{hero.superpowers}</p>
        <div className={cls.heroImgBox}>
          <img className={cls.heroImg} src={hero.selectedFile} />
        </div>
        <div className={cls.btnBox}>
          <NavLink to="/">
            <button className={cls.btb}>Edit</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
