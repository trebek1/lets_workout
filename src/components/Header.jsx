import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Header extends Component {

    componentWillMount(){
    
    }
  	
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
		      	 	<li className="item left"><Link onClick={this.selectCategory} name="home" to="/" className="selected">Home</Link></li>
		      	 	<li className="item left"><Link onClick={this.selectCategory} name="log" to="/log">Log</Link></li>
              <li className="item left"><Link onClick={this.selectCategory} name="history" to="/history">History</Link></li>
		      	 	<li className="item left"><Link onClick={this.selectCategory} name="compare" to="/compare">Compare</Link></li>
		      	 	<li className="item left"><Link onClick={this.selectCategory} name="eat" to="/eat">What to Eat</Link></li>
              <li className="item left"><Link onClick={this.selectCategory} name="exercises" to="/exercises">Exercises</Link></li>
		      	 	<li className="item right"><Link onClick={this.selectCategory} name="login" to="/login">Login</Link></li>
		      	 	<li className="item right"><Link onClick={this.selectCategory} name="signup" to="/signup">Sign Up</Link></li>
              <li className="item right"><Link onClick={this.selectCategory} name="profile" to="/profile">Profile</Link></li>
	      	 	</ul>
	      	 </div>
	      	 
      	</div>

    );
  }

  componentDidMount(){
    console.log("this is hte cookie ", document.cookie);
    var path = location.pathname; 
    if(path !== '/'){
      var route = path.slice(path.indexOf('/') + 1);
      document.getElementsByClassName("selected")[0].className = ""; 
      document.getElementsByName(route)[0].className = "selected";
    }
  }
}
