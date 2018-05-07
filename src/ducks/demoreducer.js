import axios from "axios";

const initialState = {
  goal: "",
  step1: "",
  step2: "",
  step3: "",
  slider: "",

  demo: [],

  familyId: ""
};

const UPDATE_GOAL = "UPDATE_GOAL";
const UPDATE_STEP1 = "UPDATE_STEP1";
const UPDATE_STEP2 = "UPDATE_STEP2";
const UPDATE_STEP3 = "UPDATE_STEP3";
const SUBMIT_GOAL = "SUBMIT_GOAL";
const GET_GOALS = "GET_GOALS";
const REMOVE_GOAL = "REMOVE_GOAL";
const EDIT_SLIDER = "EDIT_SLIDER";

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GOAL:
      return Object.assign({}, state, { goal: action.payload });

    case UPDATE_STEP1:
      return Object.assign({}, state, { step1: action.payload });

    case UPDATE_STEP2:
      return Object.assign({}, state, { step2: action.payload });

    case UPDATE_STEP3:
      return Object.assign({}, state, { step3: action.payload });

    case `${SUBMIT_GOAL}_FULFILLED`:
      return Object.assign({}, state, { demo: action.payload.data });

    case `${GET_GOALS}_FULFILLED`:
      return Object.assign({}, state, { demo: action.payload.data });

    case `${REMOVE_GOAL}_FULFILLED`:
      return Object.assign({}, state, { demo: action.payload.data });

    case `${EDIT_SLIDER}_FULFILLED`:
      return Object.assign({}, state, { slider: action.payload.data });

    default:
      return state;
  }
}

export default reducer;

export function updateGoal(goal) {
  return {
    type: UPDATE_GOAL,
    payload: goal
  };
}

export function updateStep1(step1) {
  return {
    type: UPDATE_STEP1,
    payload: step1
  };
}

export function updateStep2(step2) {
  return {
    type: UPDATE_STEP2,
    payload: step2
  };
}

export function updateStep3(step3) {
  return {
    type: UPDATE_STEP3,
    payload: step3
  };
}

export function submitGoal(goal, step1, step2, step3, familyid) {
  return {
    type: SUBMIT_GOAL,
    payload: axios.post("/api/goal", { goal, step1, step2, step3, familyid })
  };
}

export function getGoals(familyId) {
  return {
    type: GET_GOALS,
    payload: axios.get(`/api/goal/${familyId}`)
  };
}

export function removeGoal(id, familyId) {
  return {
    type: REMOVE_GOAL,
    payload: axios.delete(`/api/goal/${id}/${familyId}`)
  };
}

// export function updateSliderPercentage(percent) {
//   return {
//     type: UPDATE_SLIDER_PERCENTAGE,
//     payload: axios.put()
//   };
// }

export function editSlider(id, familyId, slider) {
  return {
    type: EDIT_SLIDER,
    payload: axios.put(`/api/goal/${id}/${familyId}`, { slider })
  };
}
