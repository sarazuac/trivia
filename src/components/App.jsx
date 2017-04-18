import React, {Component} from 'react';
//import {firebaseApp} from '../firebase';
import { connect } from 'react-redux';
// import AddQuestion from './AddQuestion';
import QuestionList from './QuestionList';

import Navbar from './Navbar';
import './style.css';


class App extends Component{
  // signOut(){
  //   firebaseApp.auth().signOut();
  // }
//   <AddQuestion />
// <button className="btn btn-danger"
//         onClick={() => this.signOut()}
// >Sign Out</button>
  render(){
    return (
      <div className="main">
      <Navbar />
      <h3>Play Trivia!</h3>

      <hr/>
      <h4>Questions</h4>
      <QuestionList />
      <hr/>

      </div>
    )
  }
}

function mapStateToProps(state){
  //console.log('state',state);
  return {}
}

export default connect(mapStateToProps, null)(App);
