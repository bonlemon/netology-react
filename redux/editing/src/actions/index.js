import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  UPDATE_SERVICES
} from "./actionTypes";

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}
export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}
export function editService(service) {
  return { type: EDIT_SERVICE, payload: { service } };
}
export function updateServices(service) {
  return { type: UPDATE_SERVICES, payload: { service } };
}
export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
