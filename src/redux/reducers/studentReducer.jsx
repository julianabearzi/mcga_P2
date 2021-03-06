import {
  GET_STUDENTS_FETCHING,
  GET_STUDENTS_FULFILLED,
  GET_STUDENTS_REJECTED,
  ADD_STUDENT_FETCHING,
  ADD_STUDENT_FULFILLED,
  ADD_STUDENT_REJECTED,
  UPDATE_STUDENT_FETCHING,
  UPDATE_STUDENT_FULFILLED,
  UPDATE_STUDENT_REJECTED,
  DELETE_STUDENT_FETCHING,
  DELETE_STUDENT_FULFILLED,
  DELETE_STUDENT_REJECTED,
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
    case UPDATE_STUDENT_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_STUDENT_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: state.list.map((student) => {
          if (student._id === action.payload._id) {
            const studentUpdated = action.payload;
            return studentUpdated;
          }
          return student;
        }),
      };
    case UPDATE_STUDENT_REJECTED:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case DELETE_STUDENT_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case DELETE_STUDENT_FULFILLED:
      return {
        ...state,
        isLoading: false,
        list: [
          ...state.list.filter((student) => student._id !== action.payload),
        ],
      };
    case DELETE_STUDENT_REJECTED:
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
