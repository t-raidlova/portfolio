import React from 'react';
// import styled from 'styled-components';

import Container from 'react-bootstrap/Container';

// const Styles = styled.div`
// 	.container {
// 		width: 80%;
// 		margin: auto;
// 	}
// `;

export const Layout = (props) => (
	<>
		<Container>{props.children}</Container>;
	</>
);
