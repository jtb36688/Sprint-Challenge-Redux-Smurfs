import {
  SET_UPDATE,
  GET_SMURFS_START,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  UPDATE_SMURF_START,
  UPDATE_SMURF_SUCCESS,
  UPDATE_SMURF_FAILURE,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from "../actions/";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updateId: "",
  deletingSmurf: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        fetchingSmurfs: false,
        smurfs: action.payload,
        updateId: ''
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        smurfs: action.payload
      };
    case UPDATE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        deletingSmurf: false,
        smurfs: action.payload
      };
    case SET_UPDATE:
      return {
        ...state,
        updateId: action.payload
      }
    default:
      return state;
  }
};

export default reducer