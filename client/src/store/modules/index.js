import { combineReducers } from "redux";
import user from "./user";
import board from "./board";
import category from "./category";

const reducer = combineReducers({
  user,
  board,
  category,
});

export default reducer;
