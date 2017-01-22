import React, { Component } from 'react';
import {getRecords} from '../utils/routes'; 

export default class History extends Component {
  	
constructor(props){
	super(props); 
	this.mapDaysToPage = this.mapDaysToPage.bind(this); 
  	this.state = {records: []}
}

componentWillMount(){
	if(this.props.loggedIn && this.props.id){
		var data = getRecords.bind(this);
		data(this.props.id);
	}
}

mapDaysToPage(){
	var records = this.state.records; 
	return(<tbody>
			{records.map((item, i)=>{
			return(
			<tr key={i}>
		    	<td>{item.date}</td>
		    	<td>{item.weight.toFixed(2)}</td>
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
	if(this.props.loggedIn){
		return (	
        <div className="dataHistory">
      		<table className="results-table">
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
	}else{
		return(
			<div> Please Log In to See Your Logged Historical Data</div>
		)
	}
    
  }
}
