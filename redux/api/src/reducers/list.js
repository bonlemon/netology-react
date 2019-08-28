import nanoid from "nanoid";
import {
  ADD_SERVICE,
  UPDATE_SERVICES,
  REMOVE_SERVICE,
  FETCH_SUCCESS
} from "../actions/actionTypes";
const initialState = [
  // { id: nanoid(), name: "Замена стекла", price: 21000 },
  // { id: nanoid(), name: "Замена дисплея", price: 25000 }
];
export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SUCCESS:
      return [...action.payload.items];

    case ADD_SERVICE:
      const { name, price } = action.payload;
      return [...state, { id: nanoid(), name, price: Number(price) }];

    case UPDATE_SERVICES:
      const { service } = action.payload;
      return state.map(s => (s.id === service.id ? { ...service } : s));

    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter(service => service.id !== id);

    default:
      return state;
  }
}
