import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createHero, updateHero } from "../../store/actions/heroes";
import cls from "./Form.module.css";

const Form = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();

  const [heroData, setHeroData] = useState({
    nickname: "",
    realName: "",
    originDesc: "",
    superpowers: "",
    catchPhrase: "",
    selectedFile: "",
  });

  const hero = useSelector((state) =>
    currentId ? state.heroes.find((hero) => hero._id === currentId) : null
  );

  useEffect(() => {
    if (hero) {
      setHeroData(hero);
    }
  }, [hero]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createHero(heroData));
      clear();
    } else {
      dispatch(updateHero(currentId, heroData));
      clear();
    }
  };

  const clear = () => {
    setCurrentId(0);
    setHeroData({
      nickname: "",
      realName: "",
      originDesc: "",
      superpowers: "",
      catchPhrase: "",
      selectedFile: "",
    });
  };

  return (
    <div className={cls.box}>
      <h2 className={cls.title}>{currentId ? "Editing" : "Creating"} a Hero</h2>
      <form className={cls.form} onSubmit={handleSubmit}>
        <div>
          <p className={cls.label}>Nickname:</p>
          <div>
            <input
              className={cls.textField}
              name="nickname"
              type="text"
              value={heroData.nickname}
              onChange={(e) =>
                setHeroData({ ...heroData, nickname: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <p className={cls.label}>Real name:</p>
          <div>
            <input
              className={cls.textField}
              name="realName"
              type="text"
              value={heroData.realName}
              onChange={(e) =>
                setHeroData({ ...heroData, realName: e.target.value })
              }
            />
          </div>
        </div>

        <div>
          <p className={cls.label}>Origin description:</p>
          <div>
            <textarea
              className={cls.textMultField}
              name="originDesc"
              value={heroData.originDesc}
              onChange={(e) =>
                setHeroData({ ...heroData, originDesc: e.target.value })
              }
            ></textarea>
          </div>
        </div>

        <div>
          <p className={cls.label}>Superpowers:</p>
          <div>
            <textarea
              className={cls.textMultField}
              name="superpowers"
              value={heroData.superpowers}
              onChange={(e) =>
                setHeroData({ ...heroData, superpowers: e.target.value })
              }
            ></textarea>
          </div>
        </div>

        <div>
          <p className={cls.label}>Catch phrase:​</p>
          <div>
            <textarea
              className={cls.textMultField}
              name="catchPhrase:​"
              value={heroData.catchPhrase}
              onChange={(e) =>
                setHeroData({ ...heroData, catchPhrase: e.target.value })
              }
            ></textarea>
          </div>
        </div>

        <div>
          <p className={cls.label}>Image:​</p>
          <div className={cls.textField}>
            <FileBase
              name="file"
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setHeroData({ ...heroData, selectedFile: base64 })
              }
            />
          </div>
        </div>

        <div className={cls.btnGroup}>
          <button className={cls.btn} onClick={clear}>Clear</button>
          <button className={cls.btn} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;