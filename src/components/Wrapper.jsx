import React, { Component } from 'react';
import Header from "./Header"; 
import Footer from "./Footer";

export default class Wrapper extends Component {

  constructor(props){
    super(props); 
    this.successLog = this.successLog.bind(this); 
    this.state = {loggedIn: false}
  }

  successLog(id, username){
    console.log("top level ",id, username)
    this.setState({
      loggedIn: true, 
      id: id,
      username: username

    })
  }

  render() {
    return (
        <div className="app-wrapper">
	      	<Header/>
	      		<div className="content smooth">
	      			 {React.cloneElement(this.props.children, { log: this.state.loggedIn, successLog: this.successLog })}
	      		</div>
	      	<Footer/>
      	</div>
    );
  }
}
