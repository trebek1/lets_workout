import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

//components 
import App from './components/App';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Log from './components/Log';
import Compare from './components/Compare';
import Profile from './components/Profile';
import Eat from './components/Eat';

import Wrapper from './components/Wrapper';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" pageId="wrapper" component={Wrapper}>
			<IndexRoute pageId="index" component={App}/>
			<Route path="/login" pageId="Login" component={Login}/>
			<Route path="/signup" pageId="SignUp" component={SignUp}/>
			<Route path="/log" pageId="Log" component={Log}/>
			<Route path="/compare" pageId="Compare" component={Compare}/>
			<Route path="/profile" pageId="Profile" component={Profile}/>
			<Route path="/eat" pageId="Eat" component={Eat}/>
		</Route>

	</Router>), document.getElementById('root'));
