import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import modalReducer from './modalReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  students: studentReducer,
  modal: modalReducer,
  auth: authReducer,
});

export default rootReducer;
