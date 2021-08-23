import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import board from "store/modules/board";
import comment from "store/modules/comment";
import category from "store/modules/category";
import nav from "store/modules/nav";
import postLike from "store/modules/postLike";
import userLike from "store/modules/userLike";
import bookmark from "store/modules/bookmark";
import user from "store/modules/user";
import mypagePost from "store/modules/mypagePost";
import mypageBookmark from "store/modules/mypageBookmark";
import mypageComment from "store/modules/mypageComment";
import view from "store/modules/view";
import del from "store/modules/delete";

const reducer = combineReducers({
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

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(
        // 배포할 때
        applyMiddleware(thunk)
      )
    : composeWithDevTools(
        //개발환경일 때
        applyMiddleware(thunk)
      );

const store = createStore(reducer, enhancer);

export default store;
