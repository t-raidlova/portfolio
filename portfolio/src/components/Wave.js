import React from 'react';
import styled from 'styled-components';
import Background from '../assets/wave.svg';

const Styles = styled.div`
	.pattern {
		background-image: url(${Background});
		background-repeat: no-repeat;
		background-size: cover;
		height: 70vh;
	}
	@media screen and (max-width: 1000px) {
		.pattern {
			min-height: 20vh;
		}
	}
`;

export const HeroPattern = ({ pttrn, children }) => (
	<Styles>
		<div className={pttrn}>{children}</div>
	</Styles>
);
