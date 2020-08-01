import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => (
	<>
		<Jumbotron className="bg-transparent jumbotron-fluid p-0">
			<Container fluid>
				<Row className="py-3">
					<Col>
						<h1 className="display-1 font-weight-bolder">
							Front-end <br /> & UI Design
						</h1>
						<h3 className="display-4 font-weight-light">blah</h3>
						<h3 className="lead font-weight-light">muheh</h3>
						<p>Checkout my projects below</p>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
	</>
);
