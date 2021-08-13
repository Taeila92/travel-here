import { getLikeAPI } from 'store/apis/like';
import { dbService } from 'firebase.js';
const { produce } = require('immer');


// Actions
const GET_LIKE = 'like/GET_LIKE';
const LIKE_LIKE  = 'like/LIKE_LIKE';
const LIKE_NONLIKE = 'like/LIKE_NONLIKE'

// Action 생성자
export const getLike = (payload) => {
  return {
    type: GET_LIKE,
    payload,
  }
};

export const onLike = (payload) => {
  return {
    type: LIKE_LIKE,
    payload,
  }
};

export const onNoneLike = (payload) => {
  return {
    type: LIKE_NONLIKE,
    payload,
  }
};

// Reducer
const initialState = {
  likeNum: 0,
};

const reducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case GET_LIKE:
        draft.likeNum = action.payload.num;
        break;
      case LIKE_LIKE:
        draft.likeNum = action.payload.num+1;
        dbService.collection('post').doc(action.payload.id).update({
          post_like: draft.likeNum,
        });
        break;
      case LIKE_NONLIKE:
        draft.likeNum = action.payload.num-1;
        dbService.collection('post').doc(action.payload.id).update({
          post_like: draft.likeNum,
        });
        break;
      default:
        return prevState;
    }
  });
};

// thunk
export const likeMiddleware = (id, type) => async dispatch => {
  try{
    const response = await getLikeAPI(id);
    let arr = {num: 0, id: ''};
    response.forEach(doc => {
      arr.num = doc.data().post_like;
      arr.id = id;
    })
    if(type === 'init'){
      dispatch(getLike(arr));
      return;
    }
    if(type === 'like'){
      dispatch(onLike(arr));
    } else {
      dispatch(onNoneLike(arr));
    }
  }catch(error){
    console.log(error);
  }
}

export default reducer;


