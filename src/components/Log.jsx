import React, { Component } from 'react';

export default class Log extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
  	}	

  	handleSubmit(e){
  		e.preventDefault(); 
  	}

  	componentDidMount(){

  		(function setDate(){
  			var date = new Date(); 
  			var today = date.getMonth() + 1 + '/' + date.getDate() + "/" + date.getFullYear();
  			console.log("is this today ", today)
  			document.getElementsByName("date")[0].value = today; 
  		})(); 

  	}

  	render() {

    return (	
        <div className="form-container">
        <div className="form-title"> Add Information for Today </div>
        	<form onSubmit={this.handleSubmit}>

        		<div className="input-header">Today&apos;s Date</div>
	        	<input type="text" placeholder="Date" name="date" readOnly />
	        	<div className="drinks">
		        	<div>Beverages</div>
		        	<select>
		        		<option disaled>Number of Drinks</option>
		        		<option>0</option>
		        		<option>1</option>
		        		<option>2</option>
		        		<option>3</option>
		        		<option>4</option>
		        		<option>5</option>
		        		<option>6</option>
		        		<option>7</option>
		        		<option>8</option>
		        		<option>9</option>
		        		<option>10+</option>
		        	</select>
		        	<select>
		        		<option disaled>Number of Coffee</option>
		        		<option>0</option>
		        		<option>1</option>
		        		<option>2</option>
		        		<option>3</option>
		        		<option>4</option>
		        		<option>5</option>
		        		<option>6</option>
		        		<option>7</option>
		        		<option>8</option>
		        		<option>9</option>
		        		<option>10+</option>
		        	</select>
	        	</div>
	        	<div className="input-header">Notes for Workout and Eating</div>
	        	<textarea placeholder="workout Notes"/>
	        	
	        	<textarea placeholder="Food Notes"/>
	        	<div className="input-header">Miles Run</div>
	        	<input type="text" placeholder="Miles" name="run" />
	        	<input type="submit" placeholder="submit"/>	
        	</form>
      	 </div>
    );
  }
}
