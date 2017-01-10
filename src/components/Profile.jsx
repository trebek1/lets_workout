import React, { Component } from 'react';

export default class Profile extends Component {
  	render() {
    return (
    	<div className="profile-page">
    	<div className="profile-page-container">	
	        <div className="profile-container">
	      		<div className="picture">
	      			<div className="img-wrapper">
	      				<img href="/home"  className="profile-picture" src={require("../../assets/media/stock/robotron.png")}></img>
	      			</div>
	      		<div className="profile-information">
	      			<div className="field-container"> <div className="title">Name: </div> <div className="field"> Alex Trzeciak</div></div>
	      			<div className="field-container"> <div className="title">Work: </div> <div className="field"> Software Engineer</div></div>
	      			<div className="field-container"><div className="title"> Age: </div> <div className="field"> 26</div> </div>
	      		</div>
	      		</div>
	      	
	      	</div>

      		<div className="profile-content-container-right">
      	 		Some Content here
      	 	</div>	
      	 </div>
      	 	<div class="bottom-container">
	      	 	<div className="metrics">
	      	 		Metrics 
	      	 	</div>
	      	 	<div className="graph">
	      	 	Graph of Metrics  
	      	 	</div>
      	 	</div>
	      		
	      	 
	    </div>
    );
  }
}
