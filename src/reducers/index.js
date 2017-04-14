import {combineReducers} from 'redux';
import user from './reducer_user';
import questions from './reducer_questions';

export default combineReducers({
  user,
  questions
})
