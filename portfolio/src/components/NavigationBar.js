import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavigationBar = () => (
	<Navbar expand="lg">
		<Navbar.Brand>
			<Link style={{ color: 'var(--primary)' }} className="logo" to="/">
				Tereza Raidlová
			</Link>
		</Navbar.Brand>
		<Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
		<Navbar.Collapse id="navbar-toggle">
			<Nav className="ml-auto">
				<Link className="nav-link" to="/">
					Home
				</Link>
				<Link className="nav-link" to="/about">
					About
				</Link>
				{/* <Link className="nav-link" to="/contact">
						Contact
					</Link> */}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);
