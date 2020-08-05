import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { CardInfo } from '../components';

const calc = (x, y) => [
	-(y - window.innerHeight / 2) / 40,
	(x - window.innerWidth / 2) / 40,
	1.05,
];
const trans = (x, y, s) =>
	`perspective(700px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Styles = styled.div`
	.t-card {
		box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
		border-radius: 8px;
		transition: box-shadow 0.5s;
		will-change: transform;
		margin: 2rem 0 2rem 0;
	}

	.card:hover {
		box-shadow: 0px 30px 100px -10px rgba(0, 0, 0, 0.4);
	}

	.t-card-image {
		width: 300px;
		/* background-size: cover; */
		/* background-position: center center; */
		border-radius: 3px;
	}
`;

export const Card = (props) => {
	const [anim, set] = useSpring(() => ({
		xys: [0, 0, 1],
		config: { mass: 1, tension: 280, friction: 120 },
	}));
	return (
		<Styles>
			<animated.div
				className=" t-card"
				onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
				onMouseLeave={() => set({ xys: [0, 0, 1] })}
				style={{ transform: anim.xys.interpolate(trans) }}
				onClick={(e) => props.click(props.item)}
			>
				<img
					className="t-card-image"
					src={props.item.imgSrc}
					alt={props.item.imgSrc}
				/>
				{props.item.selected && (
					<CardInfo
						title={props.item.title}
						subTitle={props.item.subTitle}
						link={props.item.link}
					/>
				)}
			</animated.div>
		</Styles>
	);
};
