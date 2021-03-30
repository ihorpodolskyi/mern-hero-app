import { FETCH_ALL, FETCH_ONE, CREATE, DELETE, UPDATE } from "../actions/actionTypes";
import * as api from "../../api";


export const getHeroes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchHeroes();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getHero = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchHero(id);
    dispatch({ type: FETCH_ONE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createHero = (hero) => async (dispatch) => {
  try {
    const { data } = await api.createHero(hero);
    dispatch({ type: CREATE, payload: data })
  } catch (error) {
    console.log(error);
  }
};

export const updateHero = (id, hero) => async (dispatch) => {
  try {
    const { data } = await api.updateHero(id, hero);
    console.log(data);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteHero = (id) => async (dispatch) => {
  console.log(id);
  try {
    await api.deleteHero(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
