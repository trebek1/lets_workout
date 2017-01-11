import React, { Component } from 'react';

export default class SignUp extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
  	}	

  	handleSubmit(e){
  		e.preventDefault(); 
  		console.log('submitted!');
  		document.getElementsByName('username')[0].value = ""; 
  		document.getElementsByName('password')[0].value = ""; 
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
