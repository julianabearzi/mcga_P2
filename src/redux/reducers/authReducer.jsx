import {
  LOG_IN_FETCHING,
  LOG_IN_FULFILLED,
  LOG_IN_REJECTED,
  SIGN_UP_FETCHING,
  SIGN_UP_REJECTED,
  LOG_OUT,
} from '../types/authTypes';

const initialState = {
  isLoading: false,
  authenticated: false,
  username: null,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_FETCHING:
      return {
        ...state,
        isLoading: true,
        authenticated: false,
        username: null,
        error: false,
      };
    case LOG_IN_FULFILLED:
      return {
        ...state,
        isLoading: false,
        authenticated: true,
        username: action.payload,
        error: false,
      };
    case LOG_IN_REJECTED:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        username: null,
        error: true,
      };
    case SIGN_UP_FETCHING:
      return {
        ...state,
        isLoading: true,
        authenticated: false,
        username: null,
        error: false,
      };
    case SIGN_UP_REJECTED:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        username: null,
        error: true,
      };
    case LOG_OUT:
      return {
        ...state,
        isLoading: false,
        authenticated: false,
        username: null,
        error: false,
      };

    default:
      return state;
  }
};

export default authReducer;
