import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Styles = styled.div`
	/* .navbar {
		background-color: #cfe8f7;
	} */
	.navbar-brand {
		font-size: 2rem;
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar className="font-weight-bold py-5" expand="lg">
			<Navbar.Brand>
				<Link style={{ color: '#4433ff' }} className="navbar-brand" to="/">
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
					<Link className="nav-link" to="/contact">
						Contact
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
);
