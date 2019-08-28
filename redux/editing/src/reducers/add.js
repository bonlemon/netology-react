import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  CANCEL_UPDATE,
  UPDATE_SERVICES,
  ADD_SERVICE
} from "../actions/actionTypes";

const initialState = {
  name: "",
  price: "",
  id: null
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };

    case EDIT_SERVICE:
      return { ...state, ...action.payload.service };

    case CANCEL_UPDATE:
    case UPDATE_SERVICES:
    case ADD_SERVICE:
      return { ...initialState };

    default:
      return state;
  }
}
