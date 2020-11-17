import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path="/" component={Landing} exact={true} />
					{/* <Route path="/" component={About} /> */}
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
