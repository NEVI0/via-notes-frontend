import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../screens/Home';

const Routes: React.FC = () => {
	return (
		<Switch>
			<Route path="/" component={ Home } exact />
			<Route component={ Home } />
		</Switch>
	);
}

export default Routes;
