import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Styles = styled.div`
	/* .navbar {
		background-color: #cfe8f7;
	} */
	/* .navbar-brand {
		font-size: 2rem;
	} */
	svg {
		filter: drop-shadow(16px 16px 20px #333);
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar className="font-weight-bold py-5 mb-4" expand="lg">
			<Navbar.Brand>
				<Link className="navbar-brand" to="/">
					<svg fill="var(--secondary)" width="2rem" viewBox="0 0 20 25">
						<path
							d="M7.54601227,0 L7.54601227,0 L0,0 L0,24 L15,24 L9.20245399,14.6769231 C12.5153374,13.8461538 15,10.9846154 15,7.38461538 L15,7.38461538 L15,7.38461538 C15,3.32307692 11.6871166,0 7.54601227,0"
							opacity=".9"
						></path>
						<polygon points="0 24 15 24 0 0"></polygon>
					</svg>
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
