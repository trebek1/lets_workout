import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Header extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.selectCategory = this.selectCategory.bind(this); 
  	}

  	selectCategory(event){
  		document.getElementsByClassName('selected')[0].className = ""; 
  		if(event.target.className === 'icon home-button'){	
  			document.getElementsByName('home')[0].className = "selected";   			
  		}else{
  			event.target.className += " selected"; 	
  		}
  	}

  	render() {
    return (
    	<div>	
    		<Link onClick={this.selectCategory} to="/"><img href="/home" className="icon home-button" src={require("../../assets/media/stock/barbell.png")}></img></Link>
	        <div className="header">
	      		<div className="title">Let&apos;s Workout!</div>
	      		<ul className="nav">
		      	 	<li className="item left"><Link onClick={this.selectCategory} name="home" className="selected" to="/">Home</Link></li>
		      	 	<li className="item left"><Link onClick={this.selectCategory} to="/log">Log</Link></li>
              <li className="item left"><Link onClick={this.selectCategory} to="/history">History</Link></li>
		      	 	<li className="item left"><Link onClick={this.selectCategory} to="/compare">Compare</Link></li>
		      	 	<li className="item left"><Link onClick={this.selectCategory} to="/profile">Profile</Link></li>
		      	 	<li className="item left"><Link onClick={this.selectCategory} to="/eat">What to Eat</Link></li>
              <li className="item left"><Link onClick={this.selectCategory} to="/exercises">Exercises</Link></li>
		      	 	<li className="item right"><Link onClick={this.selectCategory} to="/login">Login</Link></li>
		      	 	<li className="item right"><Link onClick={this.selectCategory} to="/signup">Sign Up</Link></li>
	      	 	</ul>
	      	 </div>
	      	 
      	</div>

    );
  }
}
