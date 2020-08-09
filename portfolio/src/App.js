import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, About, NoMatch } from './pages';
import { Layout, NavigationBar, Footer } from './components';

function App() {
	return (
		<>
			<Router>
				<Layout>
					<NavigationBar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/about" component={About} />
						{/* <Route path="/contact" component={Contact} /> */}
						<Route component={NoMatch} />
					</Switch>

					<Footer />
				</Layout>
			</Router>
		</>
	);
}

export default App;
