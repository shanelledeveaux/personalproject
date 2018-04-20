import axios from "axios";

const initialState = {
  hud: "",
  snap: "",
  wic: "",
  tanf: "",

  demo: [],

  familyId: ""
};

const UPDATE_HUD = "UPDATE_HUD";
const UPDATE_SNAP = "UPDATE_SNAP";
const UPDATE_WIC = "UPDATE_WIC";
const UPDATE_TANF = "UPDATE_TANF";
const SUBMIT_DEMO = "SUBMIT_DEMO";
const GET_DEMO = "GET_DEMO";
const REMOVE_DEMO = "REMOVE_DEMO";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_HUD:
      return Object.assign({}, state, { hud: action.payload });

    case UPDATE_SNAP:
      return Object.assign({}, state, { snap: action.payload });

    case UPDATE_WIC:
      return Object.assign({}, state, { wic: action.payload });

    case UPDATE_TANF:
      return Object.assign({}, state, { tanf: action.payload });

    case `${SUBMIT_DEMO}_FULFILLED`:
      return Object.assign({}, state, { demo: action.payload.data });

    case `${GET_DEMO}_FULFILLED`:
      return Object.assign({}, state, { demo: action.payload.data });

    case `${REMOVE_DEMO}_FULFILLED`:
      return Object.assign({}, state, { demo: action.payload.data });

    default:
      return state;
  }
}

export default reducer;

export function updateHUD(hud) {
  return {
    type: UPDATE_HUD,
    payload: hud
  };
}

export function updateSNAP(snap) {
  return {
    type: UPDATE_SNAP,
    payload: snap
  };
}

export function updateWIC(wic) {
  return {
    type: UPDATE_WIC,
    payload: wic
  };
}

export function updateTANF(tanf) {
  return {
    type: UPDATE_TANF,
    payload: tanf
  };
}

export function submitDemo(hud, snap, wic, tanf, familyid) {
  return {
    type: SUBMIT_DEMO,
    payload: axios.post("/api/demo", { hud, snap, wic, tanf, familyid })
  };
}

export function getDemo(familyId) {
  return {
    type: GET_DEMO,
    payload: axios.get(`/api/demo/${familyId}`)
  };
}

export function removeDemo(id) {
  return {
    type: REMOVE_DEMO,
    payload: axios.delete(`/api/demo/${id}`)
  };
}
