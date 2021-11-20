import {
  GET_STUDENTS_FETCHING,
  GET_STUDENTS_FULFILLED,
  GET_STUDENTS_REJECTED,
} from '../types/studentActionTypes';

const URL = process.env.REACT_APP_BACKEND_URL;

export const getStudentsFetching = () => ({
  type: GET_STUDENTS_FETCHING,
});

export const getStudentsFulfilled = (payload) => ({
  type: GET_STUDENTS_FULFILLED,
  payload,
});

export const getStudentsRejected = () => ({
  type: GET_STUDENTS_REJECTED,
});

export const getStudents = () => (dispatch) => {
  dispatch(getStudentsFetching());
  return fetch(`${URL}/students`)
    .then((data) => data.json())
    .then((response) => {
      dispatch(getStudentsFulfilled(response));
    })
    .catch(() => {
      dispatch(getStudentsRejected());
    });
};
