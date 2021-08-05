import { combineReducers } from "redux";
import user from "./user";
import board from "./board";
import comment from "./comment";
import category from "./category";

const rootReducer = combineReducers({
  user,
  board,
  comment,
  category,
});

export default rootReducer;
