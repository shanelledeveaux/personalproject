import axios from "axios";

const initialState = {
  hud: "",
  snap: "",
  wic: "",
  tanf: "",

  demo: []
};

const UPDATE_HUD = "UPDATE_HUD";
const UPDATE_SNAP = "UPDATE_SNAP";
const UPDATE_WIC = "UPDATE_WIC";
const UPDATE_TANF = "UPDATE_TANF";

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
