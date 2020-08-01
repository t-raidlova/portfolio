import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Content = (props) => {
	return (
		<Row className="justify-content-center">
			<Col md={8}>{props.children}</Col>
		</Row>
	);
};
