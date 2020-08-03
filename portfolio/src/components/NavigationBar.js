import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Styles = styled.div`
	/* .navbar {
		background-color: #652cdd;
	} */
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar className="border-bottom" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link className="navbar-brand" to="/">
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
			</Container>
		</Navbar>
	</Styles>
);
