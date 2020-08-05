import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Styles = styled.div`
	.t-card {
		&-info {
			margin: 1rem 1rem 1rem 2rem;
			min-height: 13rem;
		}

		&-title {
			font-size: 2.5rem;
			margin: 1rem 0;
		}

		&-sub-title {
			font-size: 1.6rem;
		}
	}
	a {
		color: var(--primary);
		font-size: 2.2rem;
	}
`;

export const CardInfo = (props) => {
	const anim = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<Styles>
			<animated.div className="t-card-info" style={anim}>
				<p className="t-card-title">{props.title}</p>
				<p className="t-card-sub-title">{props.subTitle}</p>
				<a href={props.link} target="_blank" rel="noopener noreferrer">
					View
				</a>
			</animated.div>
		</Styles>
	);
};
