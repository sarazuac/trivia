import React , {Component} from 'react';
import { connect } from 'react-redux';
//import { questRef } from '../firebase';
//import { setQuestions} from '../actions';


class QuestionItem extends Component {




  render(){

    const { email, question, answer} = this.props.question;
    return (
      <div style={{margin:'5px'}}>
        <span><strong>{question}</strong></span>
        <span> submmited by <em>{email}</em></span>
        <input type="hidden" value={answer}/>

      </div>
    )
  }
}

function mapStateToProps(state){
  const { user } = state;
  return {
    user
  }
}


export default connect(mapStateToProps,null)(QuestionItem);
