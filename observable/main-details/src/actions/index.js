import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  UPDATE_SERVICES,
  CANCEL_UPDATE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  REMOVE_SERVICE_REQUEST,
  REMOVE_SERVICE_SUCCESS,
  REMOVE_SERVICE_FAILURE,
  ADD_SERVICE_REQUEST,
  ADD_SERVICE_SUCCESS,
  ADD_SERVICE_FAILURE,
} from "./actionTypes";

export const fetchItems = () => async dispatch => {
  dispatch(fetchItemsRequest());
  try {
    const response = await fetch("http://localhost:7070/api/services");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    dispatch(fetchItemsSuccess(data));
  } catch (e) {
    dispatch(fetchItemsFailure(e.message));
  }
};
function fetchItemsRequest() {
  return { type: FETCH_REQUEST };
}
function fetchItemsSuccess(items) {
  return { type: FETCH_SUCCESS, payload: { items: items || [] } };
}
function fetchItemsFailure(error) {
  return { type: FETCH_FAILURE, payload: { error } };
}

export const addService = service => async dispatch => {
  dispatch(addServiceRequest());
  try {
    const response = await fetch("http://localhost:7070/api/services/", {
      method: "POST",
      body: JSON.stringify(service)
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    dispatch(addServiceSuccess(data));
    dispatch(fetchItems());
  } catch (e) {
    dispatch(addServiceFailure(e.message));
  }
};
function addServiceRequest() {
  return { type: ADD_SERVICE_REQUEST };
}
function addServiceSuccess() {
  return { type: ADD_SERVICE_SUCCESS };
}
function addServiceFailure(error) {
  return { type: ADD_SERVICE_FAILURE, payload: { error } };
}

export const removeService = id => async dispatch => {
  dispatch(removeServiceRequest());
  try {
    const response = await fetch("http://localhost:7070/api/services/" + id, {
      method: "DELETE"
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();

    dispatch(removeServiceSuccess(data));
    dispatch(fetchItems());
  } catch (e) {
    dispatch(removeServiceFailure(e.message));
  }
};
function removeServiceRequest() {
  return { type: REMOVE_SERVICE_REQUEST };
}
function removeServiceSuccess(items) {
  return { type: REMOVE_SERVICE_SUCCESS, payload: { items: items || [] } };
}
function removeServiceFailure(error) {
  return { type: REMOVE_SERVICE_FAILURE, payload: { error } };
}

export function editService(service) {
  return { type: EDIT_SERVICE, payload: { service } };
}
export function updateServices(service) {
  return { type: UPDATE_SERVICES, payload: { service } };
}
export function cancelUpdate() {
  return { type: CANCEL_UPDATE };
}
export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}
