import React, { Component } from 'react';
import Header from "./Header.jsx"; 
import Footer from "./Footer.jsx";

export default class Wrapper extends Component {
  render() {
    return (
        <div className="app-wrapper">
	      	<Header/>
	      		<div className="content">
	      			{this.props.children}
	      		</div>
	      	<Footer/>
      	</div>
    );
  }
}
