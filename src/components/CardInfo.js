import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const Styles = styled.div`
	.t-card {
		&-info {
			margin-top: 10px;
			min-height: 100px;
		}

		&-title {
			font-size: 1.8rem;
			margin: 0px;
		}

		&-sub-title {
			font-size: 1rem;
			margin: 0px;
		}
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
