import React, { Component } from 'react';

export default class Header extends Component {
  	render() {
    return (
    	<div>	
    		<a href="/"><img href="/home" className="icon home-button" src={require("../../assets/media/stock/barbell.png")}></img></a>
	        <div className="header">
	      		<div className="title">Let&apos;s Workout!</div>
	      		<ul className="nav clearfix">
		      	 	<li className="item"><a href="/login">Login</a></li>
		      	 	<li className="item"><a href="/signup">Sign Up</a></li>
		      	 	<li className="item"><a className=" selected" href="/">Home</a></li>
		      	 	<li className="item"><a href="/log">Log</a></li>
		      	 	<li className="item"><a href="/compare">Compare</a></li>
		      	 	<li className="item"><a href="/profile">Profile</a></li>
		      	 	<li className="item"><a href="/eat">What to Eat</a></li>
	      	 	</ul>
	      	 </div>
	      	 
      	</div>

    );
  }
}
