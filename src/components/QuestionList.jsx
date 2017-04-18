import React , {Component} from 'react';
import { connect } from 'react-redux';
import { questRef } from '../firebase';
import { scoreRef } from '../firebase';
import { setQuestions} from '../actions';
import QuestionItem from './QuestionItem';
import './style.css';


class QuestionList extends Component{

  constructor(props){
    super(props);
    this.state ={
      userAnswer:'',
      userScore: 0,
      result:''
    }
 //var sss = '';
    scoreRef.orderByChild("scores/email").on("child_added", function(snapshot) {

      if(snapshot.val().email === sessionStorage.getItem('Email') ){

          let newScore = snapshot.val().score;

          //sss = newScore;
          //console.log('sss1', sss);
          scoreRef.child(snapshot.key).set({email: snapshot.val().email, score : newScore});
          sessionStorage.setItem('Score', newScore);
          //if(newScore==null){
        //    document.getElementById("score").innerHTML = '0';
        //  }else{
        //    document.getElementById("score").innerHTML = newScore;
        //  }
      }
    });
//console.log('sss', sss);

  }


  checkAnswer(question){

  let result = this.state.result;
  const ans = question.answer;
  let userAns = this.state.userAnswer;

scoreRef.orderByChild("scores/email").on("child_added", function(snapshot) {

  if(snapshot.val().email === sessionStorage.getItem('Email') ){

    if(ans.toLowerCase() === userAns.toLowerCase()){
      //console.log('Correct');

       document.getElementById(question.serverKey).style.display = 'none';
       document.getElementById("res").innerHTML = 'Correct!';
       document.getElementById("res").style.color = 'green';

       let newScore = snapshot.val().score +4;

      scoreRef.child(snapshot.key).set({email: snapshot.val().email, score : newScore});

      document.getElementById("score").innerHTML = newScore;

      return result;
    }else{

        document.getElementById("res").innerHTML = 'Wrong!';
        document.getElementById("res").style.color = 'red';

        let newScore = snapshot.val().score -1;
        scoreRef.child(snapshot.key).set({email: snapshot.val().email, score : newScore});
        document.getElementById("score").innerHTML = newScore;

        return result;
    }

  }
});

  }


componentDidMount(){
  questRef.on('value',snap =>{
    let questions =[];
    snap.forEach( quest =>{

      const {email, question, answer, category} = quest.val();
       const serverKey = quest.key;
      questions.push({email, question, answer, category, serverKey});
      //console.log('quest', quest);
    })
  //  console.log('questions',questions);
    this.props.setQuestions(questions);
  });



}


  render(){

    return(<div className="stage">
            <div className="Result" id="res">{this.state.result}</div>
            <div className="Score" id="res">Score: <span id="score">{this.state.userScore}</span></div>
            {
                  this.props.questions.map((quest, index) =>{
                    return(
                      <div key={index} id={quest.serverKey} className="Question">

                        <QuestionItem question={quest} />
                        <input className="question-guess" type="text" placeholder="Answer here.." onChange={event => this.setState({userAnswer: event.target.value})}/>
                        <button onClick={()=>this.checkAnswer(quest)}>Check Answer</button>

                      </div>
                    )
                  })//.map
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
