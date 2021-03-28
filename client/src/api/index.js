import axios from "axios";

const url = "http://localhost:5000/heroes";

export const fetchHeroes = () => axios.get(url);
export const fetchHero = (id) => axios.get(`${url}/${id}`);
export const createHero = (newHero) => axios.post(url, newHero);
export const updateHero = (id, updatedHero) => axios.patch(`${url}/${id}`, updatedHero);
export const deleteHero = (id) => axios.delete(`${url}/${id}`);