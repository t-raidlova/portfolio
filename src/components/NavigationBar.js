import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const Styles = styled.div`
	.navbar {
		background-color: #222;
		a {
			color: #bbb;
			&:hover {
				color: white;
			}
		}
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/">logo</Link>
				</Navbar.Brand>
				<Navbar.Toggle
					className="navbar-dark"
					aria-controls="basic-navbar-nav"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Item>
							<Nav.Link>
								<Link to="/">Home</Link>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link>
								<Link to="/about">About</Link>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link>
								<Link to="/contact">Contact</Link>
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</Styles>
);
