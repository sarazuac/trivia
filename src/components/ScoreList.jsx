import React , {Component} from 'react';
import { connect } from 'react-redux';
import { scoreRef } from '../firebase';
import './style.css';
import { setScores } from '../actions';
import Navbar from './Navbar';

class ScoreList extends Component{

  constructor(props){

    super(props);
    this.state ={

    }
  }



componentDidMount(){
  scoreRef.on('value',snap =>{
    let scores =[];
    snap.forEach( s =>{
    //  let ScoreObject = s.val();
      const {email, score} = s.val();

        scores.push({email, score});
    })
      //console.log('ScoreObject', scores);
      this.props.setScores(scores);
  });
}


  render(){
    //console.log('this.props.scores', this.props.scores);
    return(<div ><Navbar />
      <h3 className="score-main">Scores</h3>
<ul className="list-group score-list">
      {
          this.props.scores.map( (sc,index) => {
              return (

                <li key={index} className="list-group-item">User: {sc.email} <span className="badge">Points: {sc.score}</span></li>

            )
          })

        }
          </ul>
      </div>  )

  }
}

function mapStateToProps(state){
  const { scores } = state;
  //console.log('state in Scorelsit', state);
  return {
    scores
  }
}

export default connect(mapStateToProps, {setScores})(ScoreList);
