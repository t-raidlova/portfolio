import React from 'react';
import { Carousel } from '../components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => (
	<>
		<Jumbotron className="bg-transparent p-0">
			<Container>
				<Row className="py-3">
					<Col>
						<h1 className="display-1 font-weight-bolder">
							Front-end <br /> & UI Design
						</h1>
						<h3 className="display-4 font-weight-light">blah</h3>
						<h3 className="lead font-weight-light mt-3">
							Checkout my projects below
						</h3>
					</Col>
				</Row>
			</Container>
		</Jumbotron>
		<Carousel />
	</>
);
