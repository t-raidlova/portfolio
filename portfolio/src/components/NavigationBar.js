import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Styles = styled.div`
	.logo {
		font-family: 'LoveloBlack', 'Helvetica', sans-serif;
		text-decoration: none;
		font-size: 2rem;
		color: var(--primary);
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar className="font-weight-bold py-5 mb-3" expand="lg">
			<Navbar.Brand>
				<Link style={{ color: '' }} className="logo" to="/">
					TEREZA RAIDLOVÁ
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
	</Styles>
);
