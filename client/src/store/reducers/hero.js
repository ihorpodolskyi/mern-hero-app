import { FETCH_ONE } from "../actions/actionTypes";

export default (hero = [], action) => {
  switch (action.type) {
    case FETCH_ONE: 
      return action.payload;
    default:
      return hero;
  }
};