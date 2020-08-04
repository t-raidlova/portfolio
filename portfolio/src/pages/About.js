import React from 'react';
import { HeroPattern } from '../components';

import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Styles = styled.div`
	.content {
		min-height: 50vh;
	}
`;

export const About = () => {
	const anim = useSpring({
		marginLeft: 0,
		from: { marginLeft: -20 },
		config: { duration: 200 },
	});

	return (
		<Styles>
			<HeroPattern pttrn={'pattern'}>
				<Container>
					<animated.h1
						style={anim}
						className="display-1 font-weight-bolder p-0 py-3"
					>
						About
					</animated.h1>
					<p>Hello, I'm a front end developer & UI Designer.</p>
					<p className="content">
						I'm constantly learning new things. Currently those things include
						gaining more experience with React and Typescript.
					</p>
				</Container>
			</HeroPattern>
		</Styles>
	);
};
