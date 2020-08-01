import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
	.content {
		min-height: 50vh;
	}
`;

export const About = () => (
	<Styles>
		<h1 className="display-1 font-weight-bolder p-0 py-3">About</h1>
		<p>Hello, I'm a front end developer & UI Designer.</p>
		<p className="content">
			I'm constantly learning new things. Currently those things include gaining
			more experience with <mark>React</mark> and Typescript.
		</p>
	</Styles>
);
