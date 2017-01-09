import React, { Component } from 'react';

export default class Header extends Component {
  	


  	render() {
    return (
    	<div>	
	        <div className="header">
	      		<div className="title">Let&apos;s Workout!</div>
	      		<ul className="nav clearfix">
		      	 	<li className="item"><a href="#">Login</a></li>
		      	 	<li className="item"><a href="#">Sign Up</a></li>
		      	 	<li className="item"><a className=" selected" href="#">Home</a></li>
		      	 	<li className="item"><a href="#">Log</a></li>
		      	 	<li className="item"><a href="#">Compare</a></li>
	      	 	</ul>
	      	 </div>
	      	 
      	</div>

    );
  }
}
