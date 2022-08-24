import { SEARCH_PACKAGE_URL } from "../helper/url";
import {
  ADD_FAV_PACKAGE,
  DEL_FAV_PACKAGE,
  SEARCH_RESULT_ERROR,
  SEARCH_RESULT_START,
  SEARCH_RESULT_SUCCESS,
} from "./action_type";

export function searchResultStart() {
  return {
    type: SEARCH_RESULT_START,
  };
}

export function searchResultError(mssg) {
  return {
    type: SEARCH_RESULT_ERROR,
    mssg: mssg,
  };
}
export function searchResultSuccess(data) {
  return {
    type: SEARCH_RESULT_SUCCESS,
    data: data,
  };
}

export function deleteFavPackage(name) {
  return {
    type: DEL_FAV_PACKAGE,
    name: name,
  };
}

export function addFavPackage(data) {
  return {
    type: ADD_FAV_PACKAGE,
    data: data,
  };
}

export function searchResult(query) {
  return (dispatch) => {
    dispatch(searchResultStart());
    const url = SEARCH_PACKAGE_URL + "?q=" + query;
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("data", data);
        if (data.total && data.results) {
          dispatch(searchResultSuccess(data));
        } else {
          dispatch(searchResultError(data));
        }
      })
      .catch((err) => {
        dispatch(searchResultError(err));
      });
  };
}
