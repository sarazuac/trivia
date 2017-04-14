import {SET_QUESTIONS} from '../constants';

export default(state =[], action) =>{
  switch(action.type){
    case SET_QUESTIONS:
      const {questions} = action;
        return questions;
      default:
        return state;
  }
}
