import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  students: studentReducer,
  modal: modalReducer,
});

export default rootReducer;
