import { getLikeAPI } from 'store/apis/like';
import { dbService } from 'firebase.js';
const { produce } = require('immer');


// Actions
const LIKE_LIKE  = 'like/LIKE_LIKE';
const LIKE_NONLIKE = 'like/LIKE_NONLIKE'

// Action 생성자
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
      case LIKE_LIKE:
        // console.log('action.payload', action.payload);
        // console.log('action.payload.num', action.payload.num);
        draft.likeNum = action.payload.num+1;
        // console.log('action.payload.id', action.payload.id);
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
    if(type === 'render'){
      // console.log('render');
      return;
    }
    let arr = {num: 0, id: ''};
    response.forEach(doc => {
      arr.num = doc.data().post_like;
      arr.id = id;
    })
    if(type === 'like'){
      // console.log('like');
      dispatch(onLike(arr));
    } else {
      // console.log('nonelike');
      dispatch(onNoneLike(arr));
    }
  }catch(error){
    console.log(error);
  }
}

export default reducer;


