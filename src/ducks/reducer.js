import axios from "axios";

const initialState = {
  name: "",
  address1: "",
  address2: "",
  city: "",
  stateName: "",
  zip: "",
  casemgr: "",

  currentFamID: 5,
  family: [],

  loading: false,
  didError: false
};

const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_ADDRESS1 = "UPDATE_ADDRESS1";
const UPDATE_ADDRESS2 = "UPDATE_ADDRESS2";
const UPDATE_CITY = "UPDATE_CITY";
const UPDATE_STATE = "UPDATE_STATE";
const UPDATE_ZIP = "UPDATE_ZIP";
const UPDATE_CASEMGR = "UPDATE_CASEMGR";

const GET_FAMILY = "GET_FAMILY";
const SUBMIT_FAMILY = "SUBMIT_FAMILY";
const REMOVE_FAMILY = "REMOVE_FAMILY";

function reducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case UPDATE_NAME:
      return Object.assign({}, state, { name: action.payload });

    case UPDATE_ADDRESS1:
      return Object.assign({}, state, { address1: action.payload });

    case UPDATE_ADDRESS2:
      return Object.assign({}, state, { address2: action.payload });

    case UPDATE_CITY:
      return Object.assign({}, state, { city: action.paylaod });

    case UPDATE_STATE:
      return Object.assign({}, state, { stateName: action.payload });

    case UPDATE_ZIP:
      return Object.assign({}, state, { zip: action.payload });

    case UPDATE_CASEMGR:
      return Object.assign({}, state, { casemgr: action.payload });

    case `${SUBMIT_FAMILY}_FULFILLED`:
      // console.log(action);
      return Object.assign({}, state, { family: action.payload.data });

    case `${GET_FAMILY}_FULFILLED`:
      return Object.assign({}, state, { family: action.payload.data });

    case `${REMOVE_FAMILY}_FULFILLED`:
      return Object.assign({}, state, { family: action.payload.data });

    default:
      return state;
  }
}

export default reducer;

export function updateName(name) {
  return {
    type: UPDATE_NAME,
    payload: name
  };
}

export function updateAddress1(address1) {
  return {
    type: UPDATE_ADDRESS1,
    payload: address1
  };
}

export function updateAddress2(address2) {
  return {
    type: UPDATE_ADDRESS2,
    payload: address2
  };
}

export function updateCity(city) {
  return {
    type: UPDATE_CITY,
    payload: city
  };
}

export function updateState(stateName) {
  return {
    type: UPDATE_STATE,
    payload: stateName
  };
}

export function updateZip(zip) {
  return {
    type: UPDATE_ZIP,
    payload: zip
  };
}

export function updateCasemgr(casemgr) {
  return {
    type: UPDATE_CASEMGR,
    payload: casemgr
  };
}

export function submitFamily(
  name,
  address1,
  address2,
  city,
  stateName,
  zip,
  casemgr
) {
  return {
    type: SUBMIT_FAMILY,
    payload: axios.post("/api/family", {
      name,
      address1,
      address2,
      city,
      stateName,
      zip,
      casemgr
    })
  };
}

export function getFamily() {
  return {
    type: GET_FAMILY,
    payload: axios.get(`/api/family`)
  };
}

export function removeFamily(id) {
  return {
    type: REMOVE_FAMILY,
    payload: axios.delete(`/api/family/${id}`)
  };
}
