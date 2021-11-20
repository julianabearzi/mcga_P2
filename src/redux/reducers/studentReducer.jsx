import {
  GET_STUDENTS_FETCHING,
  GET_STUDENTS_FULFILLED,
  GET_STUDENTS_REJECTED,
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
    default:
      return state;
  }
};

export default studentReducer;
