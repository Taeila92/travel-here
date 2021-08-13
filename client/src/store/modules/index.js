import { combineReducers } from "redux";
import user from "./user";
import board from "./board";
import comment from "./comment";
import category from "./category";
import nav from './nav';
import like from './like';

const rootReducer = combineReducers({
  user,
  board,
  comment,
  category,
  nav,
  like,
});

export default rootReducer;
