import { dbService, storageService } from "../../firebase.js";

//actions
const GET_CATEGORY_START = "category/GET_CATEGORY_START";
const GET_CATEGORY_SUCCESS = "category/GETCATEGORY_SUCCESS";
const GET_CATEGORY_FAIL = "category/GET_CATEGORY_FAIL";

//action constructor
export function getCategoryStart() {
  return {
    type: GET_CATEGORY_START,
  };
}

export function getCategorySuccess(data) {
  return {
    type: GET_CATEGORY_SUCCESS,
    data,
  };
}

export function getCategoryFail(error) {
  return {
    type: GET_CATEGORY_FAIL,
    error,
  };
}
// initial
const initialState = {
  loading: false,
  data: [],
  img: [],
  error: null,
};

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case GET_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}

// redux-thunk
export function getCategoryThunk() {
  return async (dispatch, getState) => {
    try {
      dispatch(getCategoryStart());
      //sleep
      const res = await dbService.collection("post").get();
      const postArray = [];

      res.forEach((res) => {
        postArray.push(res.data().post_religion);
      });
      postArray.forEach((data, index) => {
        data = data.toLowerCase().trim();
        if (data === undefined || data === null || data === "") {
          postArray.splice(index, 1);
        }
      });
      const set = new Set(postArray);
      const setArray = [...set];
      dispatch(getCategorySuccess(setArray));
    } catch (e) {
      dispatch(getCategoryFail(e));
    }
  };
}
