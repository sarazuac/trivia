import { SIGNED_IN} from '../constants';
import {SET_QUESTIONS} from '../constants';
import {SET_SCORES} from '../constants';

export function logUser(email){
  const action ={
    type: SIGNED_IN,
    email
  }
  return action;
}

export function setQuestions(questions){
  const action = {
    type: SET_QUESTIONS,
    questions
  }
  return action;
}

export function setScores(scores){
  const action = {
    type: SET_SCORES,
    scores
  }
  return action;
}
