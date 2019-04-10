import { combineReducers } from 'redux';

import questionReducer from './questionReducer';

const rootReducer = combineReducers({
  questionsState: questionReducer,
});

export default rootReducer;
