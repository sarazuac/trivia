import React , {Component} from 'react';
import { connect } from 'react-redux';
import { questRef } from '../firebase';
import { setQuestions} from '../actions';
import QuestionItem from './QuestionItem';
import './style.css';

class QuestionList extends Component{

  constructor(props){
    super(props);
    this.state ={
      userAnswer:'',
      result:''
    }
  }


  checkAnswer(question){
    console.log('key', question.serverKey);

// console.log('answer', quest.answer);
// questRef.once("value")
//   .then(function(snapshot) {
//     var key = snapshot.key; // "ada"
//     var childKey = snapshot.child("-Khe273psMrQ7no1_0TC/answer").val(); // "last"
//     console.log('ans', childKey);
//   });
let result = this.state.result;
    const ans = question.answer;
    let userAns = this.state.userAnswer;
    console.log('userAnswer', userAns);
    console.log('Correct Answer', ans);

    if(ans === userAns){
      console.log('FF');
      this.setState({userAnswer:'', result:'Correct!'});
      document.getElementById(question.serverKey).style.display = 'none';
      document.getElementById("res").style.color = 'green';
    }else{
      console.log('wrong');
      this.setState({userAnswer:'', result:'Wrong!'});
      document.getElementById(question.serverKey).style.color = 'red';
      document.getElementById("res").style.color = 'red';
      //this.refs.guess.value='';
    }
      return result;
  }


componentDidMount(){
  questRef.on('value',snap =>{
    let questions =[];
    snap.forEach( quest =>{

      const {email, question, answer} = quest.val();
       const serverKey = quest.key;
      questions.push({email, question, answer, serverKey});
      //console.log('quest', quest);
    })
  //  console.log('questions',questions);
    this.props.setQuestions(questions);
  })
}


  render(){
    //console.log('this.props.questions', this.props.questions);
    return(<div >
          <div className="Result" id="res">{this.state.result}</div>
      {

            this.props.questions.map((quest, index) =>{
              return(
                <div key={index} id={quest.serverKey} className="Question">

              <QuestionItem question={quest} />
              <input type="text" placeholder="Answer here.." onChange={event => this.setState({userAnswer: event.target.value})}/>
              <button onClick={()=>this.checkAnswer(quest)}>Check Answer</button>

              </div>
              )
            })
          }

        </div>
    )
  }
}

function mapStateToProps(state){
  const { questions } = state;
  return {
    questions
  }
}

export default connect(mapStateToProps, { setQuestions })(QuestionList);
