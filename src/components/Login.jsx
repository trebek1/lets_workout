import React, { Component } from 'react';
import {login, getSession, logout} from '../utils/routes.jsx'; 

export default class LogIn extends Component {
  	
  	constructor(props){
  		super(props); 
  		this.handleSubmit = this.handleSubmit.bind(this); 
      this.logout = this.logout.bind(this);
      this.checkHeadings = this.checkHeadings.bind(this);
      this.checkLogin = this.checkLogin.bind(this);
      this.success = this.success.bind(this); 
      this.state = {loggedIn : false, logMessage: '', username: null}
  	}


    success(){
      console.log("success fired.");
    }

  	handleSubmit(e){
  		e.preventDefault(); 

      var username = document.getElementsByName('username')[0];
      var password = document.getElementsByName('password')[0];
      var thisLogin = login.bind(this); 

      thisLogin(username.value,password.value); 

      this.setState({
        loggedIn: true, 
        username: username.value
      }); 

  		username.value = ""; 
  		password.value = ""; 
  	}

    logout(){
      var thisLogout = logout.bind(this); 
      thisLogout(); 
    }

    componentWillMount(){
      var sessionHere = getSession.bind(this); 
      sessionHere(); 
    }

    checkHeadings(){
      var path = location.pathname; 
      if(path !== '/'){
        var route = path.slice(path.indexOf('/') + 1);
        document.getElementsByClassName("selected")[0].className = ""; 
        document.getElementsByName(route)[0].className = "selected";
      }
    }

    checkLogin(){
      console.log("this.state.loggedin ", this.state.loggedIn)
      if(this.state.loggedIn !== false){
        var login = document.getElementsByName('login')[0].className +=  "login";
        var signup = document.getElementsByName('signup')[0].className += "login";
      }
    }

  	render() {
      console.log("this is props ", this.props);

      if(!this.state.loggedIn){
        return (  
        <div className="form-container">
        <div className="form-title"> Log In </div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="username" name="username" />
            <input type="password" placeholder="password" name="password" />
            <input type="submit" placeholder="submit"/>
          </form>
         </div>
    );    
      }else{
        return (
          <div > 
            <h3> Hello {this.state.username}! Login Successful!</h3>
            <button onClick={this.logout}> Click Here to log out </button>
          </div>

        )
      }
  }
  componentDidMount(){
    this.checkHeadings();
    this.checkLogin();
  }
}
