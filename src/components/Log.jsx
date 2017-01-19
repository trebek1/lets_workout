import React, { Component } from 'react';
import {addDay, getSession, getSessionAndPostCheck} from '../utils/routes.jsx'; 

export default class Log extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
      this.state = {submitted: false, id: null, posted: false}
      this.checkHeadings = this.checkHeadings.bind(this);
  	}

    componentWillMount(){
      var data = getSessionAndPostCheck.bind(this);
      data(); 
      // var thisSession = getSession.bind(this); 
      // thisSession(); 
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
      var weight = document.getElementsByName('weight')[0].value; 
          document.getElementsByName('weight')[0].value = ""; 
      document.getElementsByClassName('dateDetail')[0].innerHTML = date;
  		document.getElementsByClassName('drinksDetail')[0].innerHTML = drink;
  		document.getElementsByClassName('coffeeDetail')[0].innerHTML = coffee;
  		document.getElementsByClassName('milesDetail')[0].innerHTML = miles;
  		document.getElementsByClassName("weightDetail")[0].innerHTML = weight; 
      document.getElementById('workoutDetail').innerHTML = wNotes;
      document.getElementById('foodDetail').innerHTML = fNotes;

      if(this.state.posted && this.state.id){
        addDay(date, weight, drink, coffee, miles, wNotes, fNotes, this.state.id, 'patch'); 
      }else if(this.state.id){
        addDay(date, weight, drink, coffee, miles, wNotes, fNotes, this.state.id, 'post'); 
      }

      this.setState({
        submitted: true
      });
  	}

  	componentDidMount(){
    
  		(function setDate(){
  			var date = new Date(); 
  			var today = date.getMonth() + 1 + '/' + date.getDate() + "/" + date.getFullYear();
  			document.getElementsByName("date")[0].value = today; 
  		})(); 
  		(function setButtonName(){
  			document.getElementsByClassName("daily-submit")[0].value="submit data for today";
  		})(); 
      this.checkHeadings();
  	}

    checkHeadings(){
      var path = location.pathname; 
      if(path !== '/'){
        var route = path.slice(path.indexOf('/') + 1);
        document.getElementsByClassName("selected")[0].className = ""; 
        document.getElementsByName(route)[0].className = "selected";
      }
    }

  	render() {
      var styles; 
      if(this.state.submitted){
        styles = {
          'display': 'block'
        }
      }else{
        styles = {
          'display': 'none'
        }
      }
    return (	
      <div className="form-container">
        <div className="form-title"> Add Information for Today </div>
        	<form onSubmit={this.handleSubmit}>

        		<div className="input-header">Today&apos;s Date</div>
	        	<input className="solid-date" type="text" placeholder="Date" name="date" readOnly />
	        	<div className="input-header">Weight</div>
		        	<input type="number" placeholder="Weight" name="weight" />
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
		        		<option disaled>Coffee</option>
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
	        	<div className="input-split">
		        	<div className="input-header">Miles Ran</div>
		        	<input type="number" placeholder="Miles" name="run" />
		        	<input className="daily-submit" placeholder="submit" type="submit"></input>	
		        </div>
        	</form>
        	<div className="today-results-container" style={styles}>
        		<div className="results-header input-header"> Today&apos;s Results</div>
        			<table className="table">
                <thead>
      					  <tr>
      					    <th>Date</th>
      					    <th>Weight</th>
      					    <th>Miles</th>
      					    <th>Coffee</th>
      					    <th>Drinks</th>
      					  </tr>
              </thead>
              <tbody>
    					  <tr>
    					    <td className="dateDetail"></td>
    					    <td className="weightDetail"></td>
      					 	<td className="milesDetail"></td>
      					 	<td className="coffeeDetail"></td>
      					 	<td className="drinksDetail"></td>
    					  </tr>
            </tbody>
					</table>
       				<div className="more-detail"> 
       				 <div className="notesTitle">  Workout Notes </div>
       				 <div id="workoutDetail"></div>
       				</div>
       				<div className="more-detail"> 
       					<div className="notesTitle">Food Notes </div>
       					<div id="foodDetail"></div>
       				</div>	
        	</div>
      </div>
    );
  }
}
