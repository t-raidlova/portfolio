import React from 'react';
import styled from 'styled-components';

import { Carousel } from '../components';

const Styles = styled.div`
	.checkout {
		text-align: center;
		margin: 5rem 0 5rem 0;
		padding: 5rem 0 5rem 0;
		h4 {
			margin-bottom: 2rem;
		}
	}
`;

export const Home = () => {
	return (
		<Styles>
			<div className="jumbo">
				<div>
					<h1>Front-end Developer</h1>
					<h2>& Web Designer</h2>
				</div>
			</div>
			<div className="checkout">
				<h4>Checkout my projects below</h4>
				<svg
					aria-hidden="true"
					focusable="false"
					width="1.5rem"
					viewBox="0 0 320 512"
				>
					<path
						fill="currentColor"
						d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"
					></path>
				</svg>
			</div>
			<Carousel />
		</Styles>
	);
};
