import { FETCH_ALL, FETCH_ONE, CREATE, DELETE, UPDATE } from "../actions/actionTypes";

export default (heroes = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_ONE:
      return heroes;
    case CREATE:
      return [...heroes, action.payload];
    case DELETE:
      return heroes.filter((hero) => hero._id !== action.payload);
    case UPDATE:
      return heroes.map((hero) =>
        hero._id === action.payload._id ? action.payload : hero
      );
    default:
      return heroes;
  }
};