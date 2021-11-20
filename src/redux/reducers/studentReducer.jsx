import {
  GET_STUDENTS_FETCHING,
  GET_STUDENTS_FULFILLED,
  GET_STUDENTS_REJECTED,
  ADD_STUDENT_FETCHING,
  ADD_STUDENT_FULFILLED,
  ADD_STUDENT_REJECTED,
} from '../types/studentActionTypes';

const initialState = {
  isLoading: false,
  list: [],
  error: false,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_STUDENTS_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };
    case GET_STUDENTS_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case ADD_STUDENT_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_STUDENT_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [...state.list, action.payload],
      };
    case ADD_STUDENT_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default studentReducer;
