import React, { Component } from 'react';
import Header from "./Header"; 
import Footer from "./Footer";

export default class Wrapper extends Component {

  constructor(props){
    super(props); 
    this.successLog = this.successLog.bind(this); 
    this.state = {loggedIn: false, id: null, username: null};
    this.clearState = this.clearState.bind(this); 
  }

  successLog(id, username){
    this.setState({
      loggedIn: true, 
      id: id,
      username: username
    });
  }

  clearState(){
    this.setState({
      loggedIn: false, 
      id: null, 
      username: null
    });
  }

  render() {
    return (
        <div className="app-wrapper">
	      	<Header clearState={this.clearState} loggedIn={this.state.loggedIn} id={this.state.id} username={this.state.username}/>
	      		<div className="content smooth">
	      			 {React.cloneElement(this.props.children, { id: this.state.id, username: this.state.username, loggedIn: this.state.loggedIn, successLog: this.successLog, clearState: this.clearState })}
	      		</div>
	      	<Footer/>
      	</div>
    );
  }
}
