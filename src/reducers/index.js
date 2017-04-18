import {combineReducers} from 'redux';
import user from './reducer_user';
import questions from './reducer_questions';
import scores from './reducer_scores';

export default combineReducers({
  user,
  questions,
  scores
})
