import React, {Component} from 'react';
import {firebaseApp} from '../firebase';
import { connect } from 'react-redux';
//import AddQuestion from './AddQuestion';
//import QuestionList from './QuestionList';
import {Link} from 'react-router';


class Navbar extends Component{
  signOut(){
    sessionStorage.clear();
    firebaseApp.auth().signOut();

  }
//   <AddQuestion />
  render(){
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Trivia App!</a>
          </div>
          <ul className="nav navbar-nav">
            <li><Link to={'/'}>App</Link></li>
            <li><Link to={'/addquestion'}>Add a Question</Link></li>
            <li><Link to={'/scorelist'}>Score List</Link></li>

          </ul>
          <ul className="nav navbar-nav navbar-right pull-right">
            <li onClick={() => this.signOut()}><Link to={'/signup'}>Sign Out</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state){
  //console.log('state',state);
  return {}
}

export default connect(mapStateToProps, null)(Navbar);
