import React , {Component} from 'react';
import { connect } from 'react-redux';
import { questRef } from '../firebase';
import Navbar from './Navbar';
import {browserHistory} from 'react-router';

class AddQuestion extends Component {

  constructor(props){
    super(props);
    this.state ={
      question:'',
      answer:'',
      category:''
    }
  }

    addQuestion(){
      // console.log('this', this);
      const { question } = this.state;
      const { answer } = this.state;
      const { category } = this.state;
      const { email } = this.props.user;
      questRef.push({email, question, answer, category});
      document.getElementById("callback").innerHTML += "Success!";
      setTimeout(function(){
        browserHistory.push('/');
    }, 2000);

    }

    render(){
      return(
        <div >
        <Navbar />
        <div className="form-inline">
        <div id="callback"></div>
        <h3>Add a Trivia Question</h3>
        <hr/>
        <div className="form-group">
        <input type="text"
              className="form-control"
              style={{marginRight:'5px'}}
              onChange={event => this.setState({question: event.target.value})}
              placeholder="Question"/>
        <input type="text"
                    className="form-control"
                    style={{marginRight:'5px'}}
                    onChange={event => this.setState({answer: event.target.value})}
                    placeholder="Answer"/>


                    <input type="text"
                                className="form-control"
                                style={{marginRight:'5px'}}
                                onChange={event => this.setState({category: event.target.value})}
                                placeholder="Category"/>
        <button className="btn btn-success"
                type="button"
                onClick={()=> this.addQuestion()}>Submit</button>
        </div>
        </div>
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


export default connect(mapStateToProps)(AddQuestion);
