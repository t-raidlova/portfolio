import React from 'react';
import styled from 'styled-components';
import Background from '../assets/wave.svg';

const Styles = styled.div`
	.pattern {
		transform: translateY(-5px);
		background-image: url(${Background});
		background-repeat: no-repeat;
		background-size: cover;
	}
	/* @media screen and (min-width: 0px) {
		.pattern {
			height: 20vh;
		}
	} */
	@media screen and (min-width: 400px) {
		.pattern {
			height: 60vh;
		}
	}
	@media screen and (min-width: 1000px) {
		.pattern {
			height: 70vh;
		}
	}
`;

export const HeroPattern = ({ pttrn, children }) => (
	<Styles>
		<div className={pttrn}>{children}</div>
	</Styles>
);
