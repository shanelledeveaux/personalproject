import axios from "axios";

const initialState = {
  firstName: "",
  lastName: "",
  role: "",
  birthday: "",
  work: "",
  income: null,
  race: "",
  ethnicity: "",
  firstChild: null,
  education: "",
  record: "",
  active: true,

  member: [],

  date: "",
  notes: "",
  caseNotes: [],

  familyId: ""
};
console.log(initialState);

const UPDATE_FIRST = "UPDATE_FIRST";
const UPDATE_LAST = "UPDATE_LAST";
const UPDATE_ROLE = "UPDATE_ROLE";
const UPDATE_BIRTHDAY = "UPDATE_BIRTHDAY";
const UPDATE_WORK = "UPDATE_WORK";
const UPDATE_INCOME = "UPDATE_INCOME";
const UPDATE_RACE = "UPDATE_RACE";
const UPDATE_ETHNICITY = "UPDATE_ETHNICITY";
const UPDATE_FIRSTCHILD = "UPDATE_FIRSTCHILD";
const UPDATE_EDUCATION = "UPDATE_EDUCATION";
const UPDATE_RECORD = "UPDATE_RECORD";

const GET_MEMBER = "GET_MEMBER";
const SUBMIT_MEMBER = "SUBMIT_MEMBER";
const REMOVE_MEMBER = "REMOVE_MEMBER";
const EDIT_ACTIVE = "EDIT_ACTIVE";

const UPDATE_DATE = "UPDATE_DATE";
const UPDATE_NOTES = "UPDATE_NOTES";

const GET_CASENOTES = "UPDATE_CASENOTES";
const SUBMIT_CASENOTES = "UPDATE_CASENOTES";
const REMOVE_NOTES = "REMOVE_NOTES";

function reducer(state = initialState, action) {
  // console.log("action", action.payload);
  switch (action.type) {
    case UPDATE_FIRST:
      return Object.assign({}, state, { firstname: action.payload });

    case UPDATE_LAST:
      return Object.assign({}, state, { lastname: action.payload });

    case UPDATE_ROLE:
      return Object.assign({}, state, { role: action.payload });

    case UPDATE_BIRTHDAY:
      return Object.assign({}, state, { birthday: action.payload });

    case UPDATE_WORK:
      return Object.assign({}, state, { work: action.payload });

    case UPDATE_INCOME:
      return Object.assign({}, state, { income: action.payload });

    case UPDATE_RACE:
      return Object.assign({}, state, { race: action.payload });

    case UPDATE_ETHNICITY:
      return Object.assign({}, state, { ethnicity: action.payload });

    case UPDATE_FIRSTCHILD:
      return Object.assign({}, state, { firstChild: action.payload });

    case UPDATE_EDUCATION:
      return Object.assign({}, state, { education: action.payload });

    case UPDATE_RECORD:
      return Object.assign({}, state, { record: action.payload });

    case `${SUBMIT_MEMBER}_FULFILLED`:
      return Object.assign({}, state, { member: action.payload.data });

    case `${GET_MEMBER}_FULFILLED`:
      return Object.assign({}, state, { member: action.payload.data });

    case `${REMOVE_MEMBER}_FULFILLED`:
      return Object.assign({}, state, { member: action.payload.data });

    case `${EDIT_ACTIVE}_FULFILLED`:
      console.log(action.payload);
      return Object.assign({}, state, { member: action.payload.data });

    case UPDATE_DATE:
      return Object.assign({}, state, { date: action.payload });

    case UPDATE_NOTES:
      return Object.assign({}, state, { notes: action.payload });

    case `${SUBMIT_CASENOTES}_FULFILLED`:
      return Object.assign({}, state, { caseNotes: action.payload.data });

    case `${GET_CASENOTES}_FULFILLED`:
      return Object.assign({}, state, { caseNotes: action.payload.data });

    case `${REMOVE_NOTES}_FULFILLED`:
      return Object.assign({}, state, { caseNotes: action.payload.data });

    default:
      return state;
  }
}

export default reducer;

export function updateFirst(firstName) {
  // console.log(firstName);
  return {
    type: UPDATE_FIRST,
    payload: firstName
  };
}

export function updateLast(lastName) {
  return {
    type: UPDATE_LAST,
    payload: lastName
  };
}

export function updateRole(role) {
  return {
    type: UPDATE_ROLE,
    payload: role
  };
}

export function updateBirthday(birthday) {
  return {
    type: UPDATE_BIRTHDAY,
    payload: birthday
  };
}

export function updateWork(work) {
  return {
    type: UPDATE_WORK,
    payload: work
  };
}

export function updateIncome(income) {
  return {
    type: UPDATE_INCOME,
    payload: income
  };
}

export function updateRace(race) {
  return {
    type: UPDATE_RACE,
    payload: race
  };
}

export function updateEthnicity(ethnicity) {
  return {
    type: UPDATE_ETHNICITY,
    payload: ethnicity
  };
}

export function updateFirstChild(firstChild) {
  return {
    type: UPDATE_FIRSTCHILD,
    payload: firstChild
  };
}

export function updateEducation(education) {
  return {
    type: UPDATE_EDUCATION,
    payload: education
  };
}

export function updateRecord(record) {
  return {
    type: UPDATE_RECORD,
    payload: record
  };
}

export function submitMember(
  firstName,
  lastName,
  role,
  birthday,
  work,
  income,
  race,
  ethnicity,
  firstChild,
  education,
  record,
  familyId
) {
  console.log("submitting", work);
  return {
    type: SUBMIT_MEMBER,
    payload: axios.post("/api/person", {
      firstName,
      lastName,
      role,
      birthday,
      work,
      income,
      race,
      ethnicity,
      firstChild,
      education,
      record,
      familyId
    })
  };
}

export function getMember(familyId) {
  return {
    type: GET_MEMBER,
    payload: axios.get(`api/person/${familyId}`)
  };
}

export function removeMember(id, familyId) {
  console.log("deleting", id);
  return {
    type: REMOVE_MEMBER,
    payload: axios.delete(`/api/person/${id}/${familyId}`)
  };
}

export function editActive(id, familyId, val) {
  return {
    type: EDIT_ACTIVE,
    payload: axios.put(`/api/person/${id}/${familyId}`, { val })
  };
}

export function updateDate(date) {
  return {
    type: UPDATE_DATE,
    payload: date
  };
}

export function updateNotes(notes) {
  return {
    type: UPDATE_NOTES,
    payload: notes
  };
}

export function submitCaseNotes(date, notes, familyId) {
  return {
    type: SUBMIT_CASENOTES,
    payload: axios.post("/api/notes", { date, notes, familyId })
  };
}

export function getCaseNotes(familyId) {
  return {
    type: GET_CASENOTES,
    payload: axios.get(`/api/notes/${familyId}`)
  };
}

export function removeNote(id, familyId) {
  return {
    type: REMOVE_NOTES,
    payload: axios.delete(`/api/notes/${id}/${familyId}`)
  };
}
