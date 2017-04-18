import React, {Component} from 'react';
import { firebaseApp} from '../firebase';
import {Link, browserHistory } from 'react-router';
import './signup.css';
import { scoreRef } from '../firebase';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      score:0,
      error:{
        message:''
      }
    }
  }

  signUp(){
    console.log('this.state',this.state);
    const { email, password, score } = this.state;



    firebaseApp.auth().createUserWithEmailAndPassword(email, password).then(success =>{

      scoreRef.push({email, score});
      var s = 0;
      sessionStorage.setItem("Score",s);
      sessionStorage.setItem("Email",email);
        browserHistory.push('/');

    }).catch(error => {

      this.setState({error})
    });

  }


  render(){
    return (

      <div className="container sign">
    <div className="row main-sign">
      <div className="main-login main-center">
      <h3>Sign up to play!</h3>
          <div className="form-group">

            <div className="cols-sm-10">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                <input className="form-control" type="text" name="email" id="email" placeholder="Enter your Email"
                            onChange={event =>this.setState({email:event.target.value})}/>
              </div>
            </div>
          </div>

          <div className="form-group">

            <div className="cols-sm-10">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-lock fa" aria-hidden="true"></i></span>

                     <input className="form-control" type="password" name="password" id="password" placeholder="Enter a Password"
                             onChange={event =>this.setState({password:event.target.value})}/>

              </div>
            </div>
          </div>


          <div className="form-group ">
          <button className="btn btn-primary btn-lg btn-block login-button" type="button" id="button"
                     onClick={()=>this.signUp()}>Sign Up</button>

          </div>

          <div>{this.state.error.message}</div>
          <div><Link to={'/signin'}>Already a member? Sign In!</Link></div>
      </div>
    </div>
  </div>











    )
  }
}


export default SignUp;
