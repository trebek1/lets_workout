import React, { Component } from 'react';
import {login, getSession, logout} from '../utils/routes.jsx'; 

export default class LogIn extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
      this.logout = this.logout.bind(this);
      this.state = {loggedIn : false, logMessage: ''}
  	}	

  	handleSubmit(e){
  		e.preventDefault(); 

      var username = document.getElementsByName('username')[0];
      var password = document.getElementsByName('password')[0];
      var thisLogin = login.bind(this); 

      thisLogin(username.value,password.value); 

      this.setState({
        loggedIn: true
      })

  		username.value = ""; 
  		password.value = ""; 
  	}

    logout(){
      var thisLogout = logout.bind(this); 
      thisLogout(); 
    }

    componentWillMount(){
      var sessionHere = getSession.bind(this); 
      sessionHere(); 
    }

  	render() {

      if(!this.state.loggedIn){
        return (  
        <div className="form-container">
        <div className="form-title"> Log In </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="password" name="password" />
            <input type="submit" placeholder="submit"/>
          </form>
         </div>
    );    
      }else{
        return (
          <div> 
            <button onClick={this.logout}> Click Here to log out </button>
          </div>

        )
      }

    
  }
}
