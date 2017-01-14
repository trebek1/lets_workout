import React, { Component } from 'react';
import {test} from '../utils/routes.jsx'; 

export default class App extends Component {

    render() {

    return (	
        <div>
        	<div className="pillar-container">
        		<i className="symbol fa fa-home" aria-hidden="true"></i>
      			<div className="pillar">Welcome Home </div>	
        	</div>
        	<div className="pillar-container">
        		<i className="symbol fa fa-key" aria-hidden="true"></i>
      			<div className="pillar">Log In</div>
        	</div>
      		<div className="pillar-container">
      			<img className="symbol-img" src={require("../../assets/media/stock/arm.png")}/>
      			<div className="pillar">Keep Track of Your Workouts</div>
      		</div>
      		<div className="pillar-container">
      			<i className=" symbol fa fa-cutlery" aria-hidden="true"></i>
      			<div className="pillar">Track Your Diet</div>
      		</div>
      		<div className="pillar-container">
      			<i className="symbol fa fa-male" aria-hidden="true"></i>
      			<div className="pillar">Compare With Friends</div>	
      		</div>
      	 </div>
    );
  }

  componentDidMount(){
    test().then((response)=>{
      console.log('response ', response);
    }).catch((error)=>{
      console.log("error! ", error);
    })
  }
}
