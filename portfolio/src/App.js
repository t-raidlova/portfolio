import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, About, NoMatch } from './pages';
import { Layout, NavigationBar, Footer, HeroPattern } from './components';

function App() {
	return (
		<>
			<Router>
				<HeroPattern pttrn={'pattern'}>
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
				</HeroPattern>
			</Router>
		</>
	);
}

export default App;
