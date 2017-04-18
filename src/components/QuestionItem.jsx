import React , {Component} from 'react';
import { connect } from 'react-redux';
//import { questRef } from '../firebase';
//import { setQuestions} from '../actions';


class QuestionItem extends Component {


  render(){

    const { email, question, answer, category } = this.props.question;
    //console.log('this.props.question', this.props.question);
    return (
      <div style={{margin:'5px'}}>
        <span className="question-title"><strong>{question}</strong></span>
        <br/>
        <span className="question-category"><em>Category: {category}</em></span>
        <br/>
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
