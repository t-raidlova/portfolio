import React from 'react';
import styled from 'styled-components';

import { CardInfo } from '../components';

const Styles = styled.div`
	.t-card {
		margin: 20px;
	}

	.t-card-image {
		border-radius: 6px;
		width: 300px;
		box-shadow: 0px 0px 3px 1px #ccc;
	}
`;

export const Card = (props) => {
	return (
		<Styles>
			<div
				className="d-inline-block t-card"
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
			</div>
		</Styles>
	);
};
