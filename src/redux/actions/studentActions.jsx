import {
  GET_STUDENTS_FETCHING,
  GET_STUDENTS_FULFILLED,
  GET_STUDENTS_REJECTED,
  ADD_STUDENT_FETCHING,
  ADD_STUDENT_FULFILLED,
  ADD_STUDENT_REJECTED,
  DELETE_STUDENT_FETCHING,
  DELETE_STUDENT_FULFILLED,
  DELETE_STUDENT_REJECTED,
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

export const addStudentFetching = () => ({
  type: ADD_STUDENT_FETCHING,
});

export const addStudentFulfilled = (payload) => ({
  type: ADD_STUDENT_FULFILLED,
  payload,
});

export const addStudentRejected = () => ({
  type: ADD_STUDENT_REJECTED,
});

export const addStudent = (student) => (dispatch) => {
  dispatch(addStudentFetching());
  return fetch(`${URL}/students`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(student),
  })
    .then((data) => data.json())
    .then((response) => {
      dispatch(addStudentFulfilled(response));
    })
    .catch(() => {
      dispatch(addStudentRejected());
    });
};

export const deleteStudentFetching = () => ({
  type: DELETE_STUDENT_FETCHING,
});

export const deleteStudentFulfilled = (payload) => ({
  type: DELETE_STUDENT_FULFILLED,
  payload,
});

export const deleteStudentRejected = () => ({
  type: DELETE_STUDENT_REJECTED,
});

export const deleteStudent = (id) => (dispatch) => {
  dispatch(deleteStudentFetching());
  return fetch(`${URL}/students/${id}`, {
    method: 'DELETE',
  })
    .then((data) => data.json())
    .then(() => {
      dispatch(deleteStudentFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteStudentRejected());
    });
};
