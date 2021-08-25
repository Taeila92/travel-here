import { getPostAPI } from 'store/apis/post';
const { produce } = require('immer');


// Actions
const GET_POST = 'mypagePost/GET_POST';

// Action 생성자
export const getPost = (payload) => {
  return {
    type: GET_POST,
    payload,
  }
};

// Reducer
const initialState = {
  data: [],
};

const reducer = (prevState = initialState, action) => {
  return produce(prevState, (draft) => {
    switch (action.type) {
      case GET_POST:
        draft.data = action.payload;
        break;
      default:
        return prevState;
    }
  });
};

// thunk
export const mypagePostMiddleware = (email) => async dispatch => {
  try{
    const response = await getPostAPI(email);
    let arr = [];
    response.forEach(doc => {
      arr.push(doc.data());
    })
    dispatch(getPost(arr));
  }catch(error){
    console.log(error);
  }
}

export default reducer;