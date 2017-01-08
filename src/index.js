import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

//components 
import App from './App';
import Login from './Login';



ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" pageId="home" component={App}>
			<IndexRoute pageId="index" component={App}/>
			<Route path="/login" pageId="Login" component={Login}/>
		</Route>

	</Router>), document.getElementById('root'));
