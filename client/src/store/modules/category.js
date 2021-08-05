import { dbService, storageService } from "firebase.js";
import lodash from "lodash";
//actions
const GET_CATEGORY_START = "category/GET_CATEGORY_START";
const GET_CATEGORY_SUCCESS = "category/GETCATEGORY_SUCCESS";
const GET_CATEIMAGE_SUCCESS = "category/GETCATEIMAGE_SUCCESS";
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
    case GET_CATEIMAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        photo: action.photo,
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
      const res = await dbService.collection("post").get();
      const resArray = [];
      res.forEach((res) => {
        if (res.data().post_photo.length > 0) {
          const random = Math.floor(
            Math.random() * res.data().post_photo.length
          );
          resArray.push({
            religion: res.data().post_religion.toLowerCase().trim(),
            photo: res.data().post_photo[random],
          });
        } else {
          resArray.push({
            religion: res.data().post_religion.toLowerCase().trim(),
            photo: "",
          });
        }
      });

      const data = lodash.uniqBy(resArray, "religion");
      dispatch(getCategorySuccess(data));
    } catch (e) {
      dispatch(getCategoryFail(e));
    }
  };
}
