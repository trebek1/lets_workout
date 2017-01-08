import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

//components 
import App from './components/App';
import Login from './components/Login';
import Wrapper from './components/Wrapper';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" pageId="wrapper" component={Wrapper}>
			<IndexRoute pageId="index" component={App}/>
			<Route path="/login" pageId="Login" component={Login}/>
		</Route>

	</Router>), document.getElementById('root'));
