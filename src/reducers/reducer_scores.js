import {SET_SCORES} from '../constants';

export default ( state = [], action) => {
  switch(action.type){
    case SET_SCORES:
      const {scores} = action;
      return scores;
    default:
      return state;
  }
}
