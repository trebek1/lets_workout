import React, { Component } from 'react';

export default class Log extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
  	}	

  	handleSubmit(e){
  		e.preventDefault(); 
  		var date = document.getElementsByClassName('solid-date')[0].value;

  		var miles = document.getElementsByName("run")[0].value; 
  					document.getElementsByName("run")[0].value = ""; 
  		
  		var drinks = document.getElementsByClassName('drinks-list')[0],
  			drink = drinks.options[drinks.selectedIndex].text;	 
  					 document.getElementsByClassName('drinks-list')[0].selectedIndex = 0; 

  		var coffees = document.getElementsByClassName('coffee')[0],
  			coffee = coffees.options[coffees.selectedIndex].text;	 
  					 document.getElementsByClassName('coffee')[0].selectedIndex = 0; 

  		var wNotes = document.getElementsByClassName('w-notes')[0].value;
  					 document.getElementsByClassName('w-notes')[0].value = "";
  		var fNotes = document.getElementsByClassName('f-notes')[0].value;
  					 document.getElementsByClassName('f-notes')[0].value = ""; 
  			document.getElementsByClassName('dateDetail')[0].innerHTML = date;
  			document.getElementsByClassName('drinksDetail')[0].innerHTML = drink;
  			document.getElementsByClassName('coffeeDetail')[0].innerHTML = coffee;
  			document.getElementsByClassName('milesDetail')[0].innerHTML = miles;
  			document.getElementById('workoutDetail').innerHTML = wNotes;
  			document.getElementById('foodDetail').innerHTML = fNotes;

  	}

  	componentDidMount(){

  		(function setDate(){
  			var date = new Date(); 
  			var today = date.getMonth() + 1 + '/' + date.getDate() + "/" + date.getFullYear();
  			console.log("is this today ", today)
  			document.getElementsByName("date")[0].value = today; 
  		})(); 

  		(function setButtonName(){
  			document.getElementsByClassName("daily-submit")[0].value="submit data for today";
  		})(); 

  	}

  	render() {

    return (	
        <div className="form-container">
        <div className="form-title"> Add Information for Today </div>
        	<form onSubmit={this.handleSubmit}>

        		<div className="input-header">Today&apos;s Date</div>
	        	<input className="solid-date" type="text" placeholder="Date" name="date" readOnly />
	        	<div className="drinks">
		        	<div className="input-header">Beverages</div>
		        	<select className="drinks-list">
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
		        	<select className="coffee">
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
	        	<div className="areas">
	        		<textarea className="w-notes" placeholder="workout Notes"/>
	        		<textarea className="f-notes" placeholder="Food Notes"/>
	        	</div>
	        	<div className="input-header">Miles Run</div>
	        	<input type="number" placeholder="Miles" name="run" />
	        	<input className="daily-submit" placeholder="submit" type="submit"></input>	
        	</form>
        	<div className="today-results-container">
        		<div className="results-header input-header"> Today&apos;s Results</div>
        			<div className="block-header"> 
        				<div>Date</div>
        				<div className="dateDetail"></div>
        			</div> 
        			<div className="block-header"> 
        				<div>Drinks</div>
        				<div className="drinksDetail"></div>
        			</div>
        			<div className="block-header">  
        				<div>Coffee</div>
        				<div className="coffeeDetail"></div>
        			</div> 
        			<div className="block-header"> 
        			<div>Miles </div>
        			<div className="milesDetail"></div>
        			</div>
       				<div className="more-detail"> 
       					<div>  Workout Notes </	div>
       					<div id="workoutDetail"></div>
       				</div>
       				<div className="more-detail"> 
       					<div>Food Notes </div>
       					<div id="foodDetail"></div>
       				</div>
        			
        	</div>
      	 </div>
    );
  }
}
