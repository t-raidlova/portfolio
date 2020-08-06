import React from 'react';
import styled from 'styled-components';
import Background from '../assets/wave.svg';

const Styles = styled.div`
	.pattern {
		transform: translateY(-5px);
		background-image: url(${Background});
		background-repeat: no-repeat;
		background-size: cover;
		min-height: 50vh;

		/* height: 70vh; */
	}
	@media screen and (max-width: 1000px) {
		.pattern {
			height: 40vh;
		}
	}
`;

export const HeroPattern = ({ pttrn, children }) => (
	<Styles>
		<div className={pttrn}>{children}</div>
	</Styles>
);
