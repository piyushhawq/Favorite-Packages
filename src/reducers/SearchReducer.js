import {
  SEARCH_RESULT_ERROR,
  SEARCH_RESULT_START,
  SEARCH_RESULT_SUCCESS,
} from "../actions/action_type";

let initialState = {
  data: [],
  error: null,
  inProgress: false,
};

export function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_RESULT_START: {
      return {
        ...state,
        inProgress: true,
        error: null,
      };
    }
    case SEARCH_RESULT_ERROR: {
      return {
        ...state,
        inProgress: false,
        data: [],
        error: action.mssg,
      };
    }
    case SEARCH_RESULT_SUCCESS: {
      return {
        ...state,
        data: action.data,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}
