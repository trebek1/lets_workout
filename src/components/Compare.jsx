import React, { Component } from 'react';

export default class Compare extends Component {
	constructor(props){
  		super(props); 
        this.checkHeadings = this.checkHeadings.bind(this);
  	}

	checkHeadings(){
      var path = location.pathname; 
      if(path !== '/'){
        var route = path.slice(path.indexOf('/') + 1);
        document.getElementsByClassName("selected")[0].className = ""; 
        document.getElementsByName(route)[0].className = "selected";
      }
    }
  	
  	render() {
    return (	
        <div className="">
      		Coming Soon!
      	 </div>
    );
  }
   componentDidMount(){
    this.checkHeadings();
  }
}
