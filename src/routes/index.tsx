import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/app/Home';
import Signin from '../screens/auth/Signin';
import Signup from '../screens/auth/Signup';

import UserContext, { UserContextType } from '../contexts/UserContext';

const Routes: React.FC = () => {
	const { user } = useContext<UserContextType>(UserContext);
	return user ? <AppFlow /> : <AuthFlow />;
}

const AuthFlow: React.FC = () => {
	return (
		<Switch>
			<Route path="/" component={ Signin } exact />
			<Route path="/signup" component={ Signup } />
			<Route component={ Signin } />
		</Switch>
	)
}

const AppFlow: React.FC = () => {
	return (
		<Switch>
			<Route path="/" component={ Home } exact />
			<Route component={ Home } />
		</Switch>
	)
}

export default Routes;
