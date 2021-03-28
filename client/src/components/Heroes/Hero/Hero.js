import React from "react";
import { useDispatch } from "react-redux";
import { deleteHero, getHero } from "../../../store/actions/heroes";
import cls from "./Hero.module.css";
import { NavLink } from "react-router-dom";

const Hero = (props) => {
  const dispatch = useDispatch();

  return (
    <div className={cls.box}>
      <div className={cls.heroImage}>
        <img className={cls.image} src={props.selectedFile} alt="" />
      </div>
      <h2 className={cls.heroTitle}>{props.nickname}</h2>
      <div className={cls.btnGroup}>
        <button
          className={cls.btb}
          onClick={() => dispatch(deleteHero(props._id))}
        >
          Delete
        </button>
        <NavLink to={props._id}>
          <button
            className={cls.btb}
            onClick={() => dispatch(getHero(props._id))}
          >
            More info
          </button>
        </NavLink>
        <button
          className={cls.btb}
          onClick={() => props.setCurrentId(props._id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Hero;