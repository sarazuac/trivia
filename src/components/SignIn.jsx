import React, {Component} from 'react';
import { firebaseApp} from '../firebase';
import {Link, browserHistory } from 'react-router';

class SignIn extends Component {
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

  signIn(){
  //  console.log('this.state',this.state);
    const { email, password, score } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password).then(success =>{
      sessionStorage.setItem('Email', email);
      sessionStorage.setItem('Score', score);

      //console.log('ss', sessionStorage.getItem('Score'));
        browserHistory.push('/app');
    }).catch(error => {
      this.setState({error})
    });
  }


  render(){
    return (
      <div className="container sign">
    <div className="row main main-sign">
      <div className="main-login main-center">
      <h5>Sign In to play!</h5>
          <div className="form-group">
            <div className="cols-sm-10">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                <input className="form-control" type="text" name="email" id="email"  style={{marginRight:'5%'}} placeholder="Enter your Email"
                        onChange={event =>this.setState({email:event.target.value})}/>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="cols-sm-10">
              <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-lock fa" aria-hidden="true"></i></span>
                <input className="form-control" type="password" placeholder="password" name="password" id="password"
                        onChange={event =>this.setState({password:event.target.value})}/>
              </div>
            </div>
          </div>
          <div className="form-group ">
          <button className="btn btn-primary btn-lg btn-block login-button" type="button" id="button"
                  onClick={()=>this.signIn()}>Sign In</button>
          </div>

        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Sign Up</Link></div>
      </div>
    </div>
  </div>


    )
  }
}

////
// <div className="form-inline" style={{margin:'5%'}}>
//   <h2>Sign In</h2>
//   <div className="form-group">
//     <input className="form-control" type="text"  style={{marginRight:'5%'}} placeholder="email"
//             onChange={event =>this.setState({email:event.target.value})}/>
//
//     <input className="form-control" type="password" placeholder="password"
//             onChange={event =>this.setState({password:event.target.value})}/>
//
//     <button className="btn btn-primary btn-lg btn-block login-button" type="button" id="button"
//             onClick={()=>this.signIn()}>Sign In</button>
//   </div>
//     <div>{this.state.error.message}</div>
//     <div><Link to={'/signup'}>Sign Up</Link></div>
// </div>


export default SignIn;
