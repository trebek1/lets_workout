import React, { Component } from 'react';

export default class LogIn extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
  	}	

  	handleSubmit(e){
  		e.preventDefault(); 
  		document.getElementsByName('username')[0].value = ""; 
  		document.getElementsByName('password')[0].value = ""; 
  	}

  	render() {
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
  }
}
