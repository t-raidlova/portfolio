import React from 'react';

import { Carousel, HeroPattern } from '../components';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {
	return (
		<>
			<HeroPattern pttrn={'pattern'}>
				<Container>
					<Jumbotron fluid className="bg-transparent py-4">
						<Row>
							<Col>
								<div className="py-4 mb-5">
									<h1 className="display-2 font-weight-bolder">
										Front-end Developer
									</h1>
									<h3 className="display-3 font-weight-bold">& UI Designer</h3>
								</div>
								<div className="mt-5 pt-5 text-center">
									<h4 className="mb-3 text-center">
										Checkout my projects below
									</h4>

									<svg
										aria-hidden="true"
										focusable="false"
										width="1.5rem"
										viewBox="0 0 320 512"
									>
										<path
											fill="currentColor"
											d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
										></path>
									</svg>
								</div>
							</Col>
						</Row>
					</Jumbotron>
				</Container>
			</HeroPattern>
			<Carousel />
		</>
	);
};
