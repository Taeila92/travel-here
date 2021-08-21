import { combineReducers } from "redux";
import user from "./userLike";
import board from "./board";
import comment from "./comment";
import category from "./category";
import nav from "./nav";
import postLike from "./postLike";
import userLike from "./userLike";
import bookmark from "./bookmark";
import mypagePost from "./mypagePost";
import mypageBookmark from "./mypageBookmark";
import mypageComment from "./mypageComment";
import view from "./view";
import del from "./delete";




const rootReducer = combineReducers({
  user,
  board,
  comment,
  category,
  nav,
  postLike,
  userLike,
  bookmark,
  mypagePost,
  mypageBookmark,
  mypageComment,
  view,
  del,
});

export default rootReducer;
