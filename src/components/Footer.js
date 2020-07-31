import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => (
	<footer className="mt-5 border-top ">
		<Container>
			<Row className="d-flex justify-content-between p-3">
				<Col className="p-0">© 2020-present Tereza Raidlová.</Col>
				<Col className="p-0 d-flex justify-content-end">some icons</Col>
			</Row>
		</Container>
	</footer>
);
