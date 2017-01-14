import React, { Component } from 'react';
import {test, test2} from '../utils/routes.jsx'; 

export default class SignUp extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
  	}	

  	handleSubmit(e){
  		e.preventDefault(); 
      var username = document.getElementsByName('username')[0];
      var password = document.getElementsByName('password')[0];
      var confirm = document.getElementsByName('confirm')[0];
      console.log(username.value,password.value,confirm.value);
  		test2(username.value,password.value,confirm.value);
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
	        	<input type="text" placeholder="password" name="password" />
            <input type="text" placeholder="confirm password" name="confirm" />
	        	<input type="submit" placeholder="submit"/>
        	</form>
      	 </div>
    );
  }
}
