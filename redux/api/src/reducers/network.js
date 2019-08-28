import {
  FETCH_REQUEST,
  FETCH_FAILURE,
  FETCH_SUCCESS,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_SUCCESS,
  REMOVE_SERVICE_FAILURE,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_FAILURE
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  error: null
};

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true, error: null };

    case FETCH_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case FETCH_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case REMOVE_SERVICE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case REMOVE_SERVICE_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case REMOVE_SERVICE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    case ADD_SERVICE_REQUEST:
      return { ...state, isLoading: true, error: null };

    case ADD_SERVICE_SUCCESS:
      return { ...state, isLoading: false, error: null };

    case ADD_SERVICE_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    default:
      return state;
  }
}
