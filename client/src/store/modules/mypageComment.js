import { produce } from 'immer';
import { getMypageCommentAPI } from 'store/apis/comment';

// Actions
const GET_COMMENT = 'mypageComment/GET_COMMENT';


// Action 생성자
export const getComment = payload => {
  return {
    type : GET_COMMENT,
    payload,
  }
}


let arr = [];
//thunk
export const mypageCommentMiddleware = (id) => async dispatch => {
  try{
    const response = await getMypageCommentAPI(id);
    response.forEach(doc => {
      arr.push(doc.data());
    })
    let array = Object.assign([], arr);
    console.log('bookmark', array);
    dispatch(getComment(array));
  }catch(error){
    console.log(error);
  }
};

// Reducer
const initialState = {
  data : [],
};

const reducer = (prevState=initialState, action) => {
  return produce(prevState, (draft) => {
    switch(action.type){
      case GET_COMMENT :
        draft.data = action.payload;
        break;
      default :
          return prevState;
    }
  })
}

export default reducer;


