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
        browserHistory.push('/app');

    }).catch(error => {

      this.setState({error})
    });

  }

  // <div className="form-inline sign-up-wrapper" style={{margin:'5%'}}>
  //   <h2>Sign Up</h2>
  //   <div className="form-group">
  //   <div className="">
  //     <input className="form-control" type="text"  style={{width:'100%'}} placeholder="email"
  //             onChange={event =>this.setState({email:event.target.value})}/>
  //   </div>
  //   <div className="">
  //     <input className="form-control" type="password" style={{width:'100%'}} placeholder="password"
  //             onChange={event =>this.setState({password:event.target.value})}/>
  //   </div>
  //   <div className="">
  //     <button className="btn btn-primary sign-up-btn" type="button"
  //             onClick={()=>this.signUp()}>Sign Up</button>
  //   </div>
  //   </div>
  //     <div>{this.state.error.message}</div>
  //     <div><Link to={'/signin'}>Already a user? Sign in instead</Link></div>
  // </div>


Name

  render(){
    return (

      <div className="container sign">
    <div className="row main main-sign">
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
