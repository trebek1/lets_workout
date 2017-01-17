import React, { Component } from 'react';
import {getRecordsAndSession, getSession} from '../utils/routes'; 

export default class History extends Component {
  	
constructor(props){
	super(props); 
	this.mapDaysToPage = this.mapDaysToPage.bind(this); 
  	this.state = {records: [], loggedIn: false, id: null}
}

componentWillMount(){
	var data = getRecordsAndSession.bind(this);
	data();
	
}

mapDaysToPage(){
	var records = this.state.records; 
	return(<tbody>
			{records.map((item, i)=>{
			return(
			<tr key={i}>
		    	<td>{item.date}</td>
		    	<td>{item.weight}</td>
			 	<td>{item.miles}</td>
			 	<td>{item.coffee}</td>
			 	<td>{item.alcohol}</td>
			 	<td>{item.workoutNotes}</td>
			 	<td>{item.foodNotes}</td>
			</tr>
			)
		})}
		</tbody>
	)
}

render() {
  		console.log("this.state ", this.state);
    return (	
        <div className="">
      		<table>
                <thead>
				  <tr>
				    <th>Date</th>
				    <th>Weight</th>
				    <th>Miles</th>
				    <th>Coffee</th>
				    <th>Drinks</th>
				    <th> Workout Notes</th>
				    <th> Food Notes </th>
				  </tr>
              	</thead>
              	
				  {this.mapDaysToPage()}
            	
			</table>
      	 </div>
    );
  }
}
