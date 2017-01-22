import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

//components 
import Landing from './components/Landing';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Log from './components/Log';
import Compare from './components/Compare';
import Profile from './components/Profile';
import Eat from './components/Eat';
import Exercises from './components/Exercises';
import History from './components/History';
import Wrapper from './components/Wrapper';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" pageId="wrapper" component={Wrapper}>
			<IndexRoute pageId="index" component={Landing}/>
			<Route path="/login" pageId="Login" component={Login}/>
			<Route path="/signup" pageId="SignUp" component={SignUp}/>
			<Route path="/log" pageId="Log" component={Log}/>
			<Route path="/compare" pageId="Compare" component={Compare}/>
			<Route path="/profile" pageId="Profile" component={Profile}/>
			<Route path="/eat" pageId="Eat" component={Eat}/>
			<Route path="/exercises" pageId="Exercises" component={Exercises}/>
			<Route path="/history" pageId="History" component={History}/>
		</Route>

	</Router>), document.getElementById('root'));
