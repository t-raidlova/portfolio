import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, About, Contact, NoMatch } from './pages';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';

function App() {
	return (
		<>
			<Router>
				<NavigationBar />
				<Layout>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route component={NoMatch} />
					</Switch>
				</Layout>
			</Router>
		</>
	);
}

export default App;
