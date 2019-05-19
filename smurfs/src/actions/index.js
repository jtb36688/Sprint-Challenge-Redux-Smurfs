import axios from "axios";

export const SET_UPDATE = "SET_UPDATE"

export const ADD_SMURF_START = 'ADD_SMURF_START'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE'

export const GET_SMURFS_START = 'GET_SMURFS_START'
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS'
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE'

export const UPDATE_SMURF_START = 'UPDATE_SMURF_START'
export const UPDATE_SMURF_SUCCESS = 'UPDATE_SMURF_SUCCESS'
export const UPDATE_SMURF_FAILURE = 'UPDATE_SMURF_FAILURE'

export const DELETE_SMURF_START = 'DELETE_SMURF_START'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS'
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE'

export const addSmurf = (data) => dispatch => {
  dispatch({ type: ADD_SMURF_START });
  axios
  .post(`http://localhost:3333/smurfs`, data)
  .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
  .catch(err => dispatch({ type: ADD_SMURF_FAILURE, payload: err }))
}

export const getSmurfs = () => dispatch => {
  dispatch({ type: GET_SMURFS_START });
  axios
  .get(`http://localhost:3333/smurfs`)
  .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
  .catch(err => dispatch({ type: GET_SMURFS_FAILURE, payload: err }))
}

export const updateSmurf = (data, id) => dispatch => {
  dispatch({ type: UPDATE_SMURF_START });
  axios
  .put(`http://localhost:3333/smurfs/${id}`, data)
  .then(res => dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data }))
  .catch(err => dispatch({ type: UPDATE_SMURF_FAILURE, payload: err }))
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETE_SMURF_START });
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
  .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }))
}

export const setUpdate = (id) => {
  return {
    type: SET_UPDATE,
    payload: id
  }
}