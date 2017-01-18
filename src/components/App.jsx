import React, { Component } from 'react';
import {Link} from 'react-router'; 

export default class App extends Component {

    render() {

    return (	
        <div>
        	<div className="pillar-container">
        		<i className="symbol fa fa-home" aria-hidden="true"></i>
      			<div className="home">Welcome Home </div>	
        	</div>
        	<div className="pillar-container">
        		<Link to="/login"><i className="symbol fa fa-key" aria-hidden="true"></i></Link>
      			<Link to="/login"><div className="pillar">Log In</div></Link>
        	</div>
      		<div className="pillar-container">
      			<Link to="/log"><img className="symbol-img" src={require("../../assets/media/stock/arm.png")}/></Link>
      			<Link to="/log"><div className="pillar">Keep Track of Your Workouts</div></Link>
      		</div>
      		<div className="pillar-container">
      			<Link to="/log"><i className=" symbol fa fa-cutlery" aria-hidden="true"></i></Link>
      			<Link to="/log"><div className="pillar">Track Your Diet</div></Link>
      		</div>
      		<div className="pillar-container">
      			<Link to="/compare"><i className="symbol fa fa-male" aria-hidden="true"></i></Link>
      			<Link to="/compare"><div className="pillar">Compare With Friends</div></Link>	
      		</div>
      	 </div>
    );
  }

  componentDidMount(){
  
  }
}
