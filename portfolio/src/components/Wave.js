import React from 'react';
import styled from 'styled-components';
import Background from '../assets/wave.svg';

const Styles = styled.div`
	.pattern {
		background-image: url(${Background});
		background-repeat: no-repeat;
	}
`;

export const HeroPattern = ({ pttrn, children }) => (
	<Styles>
		<div className={pttrn}>{children}</div>
	</Styles>
);
