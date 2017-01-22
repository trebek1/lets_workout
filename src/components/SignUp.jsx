import React, { Component } from 'react';
import {test, signup, getSession} from '../utils/routes.jsx'; 

export default class SignUp extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
      this.state = {message: null}
  	}	

  	handleSubmit(e){
  		e.preventDefault(); 
      var username = document.getElementsByName('username')[0];
      var password = document.getElementsByName('password')[0];
      var confirm = document.getElementsByName('confirm')[0];
      var signUpHere = signup.bind(this);

  		signUpHere(username.value,password.value,confirm.value);
  		
      username.value = ""; 
  		password.value = ""; 
      confirm.value = "";
      
  	}

  	render() {

    return (	
        <div className="form-container">
        <div className="form-title"> Sign Up Here! </div>
        	<form onSubmit={this.handleSubmit}>
	        	<input type="text" placeholder="username" name="username" />
	        	<input type="password" placeholder="password" name="password" />
            <input type="password" placeholder="confirm password" name="confirm" />
	        	<input type="submit" placeholder="submit"/>
        	</form>
            <div className="flag">{this.state.message}</div>
      	 </div>
    );
  }

  componentDidUpdate(){
    if(this.state.message){
      document.getElementsByClassName('flag')[0].style.display =  "block";
      if(this.state.message === "Error Username in Database"){
        document.getElementsByClassName('flag')[0].style.color = 'red';
      }else{
        document.getElementsByClassName('flag')[0].style.color = 'green';
      }
    }
  }
}
