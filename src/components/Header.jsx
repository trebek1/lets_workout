import React, { Component } from 'react';
import {Link} from 'react-router';
import {logout } from '../utils/routes.jsx'; 

export default class Header extends Component {

    componentWillMount(){
    
    }
  	
  	constructor(props){
  		super(props); 
      this.selectCategory = this.selectCategory.bind(this); 
      this.out = this.out.bind(this);
  	}

    out(e){
      e.preventDefault(); 
      let thisOut = logout.bind(this);
      thisOut();
      this.props.clearState();   
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
      var styles; 
      var logoutStyle; 
      if(this.props.loggedIn){
        styles = {display: 'none'};
        logoutStyle = {display: 'inline'};
      }else{
        styles = {display: 'inline'};
        logoutStyle = {display: 'none'};
      }

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
		      	 	<li style={styles} className="item right"><Link onClick={this.selectCategory} name="login" to="/login">Login</Link></li>
		      	 	<li style={styles} className="item right"><Link onClick={this.selectCategory} name="signup" to="/signup">Sign Up</Link></li>
              <li className="item right"><Link onClick={this.selectCategory} name="profile" to="/profile">Profile</Link></li>
              <li style={logoutStyle} className="item right"><a onClick={this.out}>Logout</a></li>
	      	 	</ul>
	      	 </div>
      	</div>

    );
  }

  componentDidMount(){
    var path = location.pathname; 
    if(path !== '/'){
      var route = path.slice(path.indexOf('/') + 1);
      document.getElementsByClassName("selected")[0].className = ""; 
      document.getElementsByName(route)[0].className = "selected";
    }
  }
}
