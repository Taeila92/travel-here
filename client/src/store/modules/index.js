import { combineReducers } from "redux";
import user from "./userLike";
import board from "./board";
import comment from "./comment";
import category from "./category";
import nav from './nav';
import postLike from './postLike';
import userLike from './userLike';

const rootReducer = combineReducers({
  user,
  board,
  comment,
  category,
  nav,
  postLike,
  userLike,
});

export default rootReducer;
