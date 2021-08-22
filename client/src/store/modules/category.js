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
      let resArray = [
        {
          region: "asia",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/crRFxLmkyLQY3MIQ4mQt9nVinpd2%2F7305586a-308c-41bf-a3b4-0f5c5028deb5?alt=media&token=3a0f89f0-f1cd-4877-a46c-2150a949c465",
        },
        {
          region: "north_america",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/crRFxLmkyLQY3MIQ4mQt9nVinpd2%2F7305586a-308c-41bf-a3b4-0f5c5028deb5?alt=media&token=3a0f89f0-f1cd-4877-a46c-2150a949c465",
        },
        {
          region: "south_america",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/crRFxLmkyLQY3MIQ4mQt9nVinpd2%2F7305586a-308c-41bf-a3b4-0f5c5028deb5?alt=media&token=3a0f89f0-f1cd-4877-a46c-2150a949c465",
        },
        {
          region: "africa",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/crRFxLmkyLQY3MIQ4mQt9nVinpd2%2F7305586a-308c-41bf-a3b4-0f5c5028deb5?alt=media&token=3a0f89f0-f1cd-4877-a46c-2150a949c465",
        },
        {
          region: "europe",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/crRFxLmkyLQY3MIQ4mQt9nVinpd2%2F7305586a-308c-41bf-a3b4-0f5c5028deb5?alt=media&token=3a0f89f0-f1cd-4877-a46c-2150a949c465",
        },
        {
          region: "australia",
          photo:
            "https://firebasestorage.googleapis.com/v0/b/travel-here-36a2e.appspot.com/o/crRFxLmkyLQY3MIQ4mQt9nVinpd2%2F7305586a-308c-41bf-a3b4-0f5c5028deb5?alt=media&token=3a0f89f0-f1cd-4877-a46c-2150a949c465",
        },
      ];
      res.forEach((res) => {
        if (res.data().post_region !== "" && res.data().post_photo.length > 0) {
          const random = Math.floor(
            Math.random() * res.data().post_photo.length
          );
          for (let i = 0; i < resArray.length; i++) {
            if (resArray[i].region === res.data().post_region) {
              resArray[i].photo = res.data().post_photo[random];
            }
          }
        }
      });

      // const data = lodash.uniqBy(resArray, "region");
      dispatch(getCategorySuccess(resArray));
    } catch (e) {
      dispatch(getCategoryFail(e));
    }
  };
}
