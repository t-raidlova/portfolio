import React from 'react';

import Row from 'react-bootstrap/Row';

import { Card } from '../components';
import card1 from '../assets/card1.png';
import card2 from '../assets/card2.png';
import card3 from '../assets/card3.png';

export class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: [
				{
					id: 0,
					title: 'Fretboard Notes',
					subTitle: 'Visualizing Standard Tuning',
					imgSrc: card1,
					link: 'https://fretboard.digital',
					selected: false,
				},
				{
					id: 1,
					title: 'SVG demos',
					subTitle: 'learning SVG',
					imgSrc: card2,
					link: 'https://t-raidlova.github.io/svg-demos/',
					selected: false,
				},
				{
					id: 2,
					title: 'Minolta website',
					subTitle: 'minolta',
					imgSrc: card3,
					link: 'https://t-raidlova.github.io/minolta-website/',
					selected: false,
				},
			],
		};
	}

	handleCardClick = (id) => {
		let items = [...this.state.items];

		items[id].selected = items[id].selected ? false : true;

		items.forEach((item) => {
			if (item.id !== id) {
				item.selected = false;
			}
		});

		this.setState({
			items,
		});
	};

	makeItems = (items) => {
		return items.map((item) => {
			return (
				<Card
					item={item}
					click={(e) => this.handleCardClick(item.id, e)}
					key={item.id}
				/>
			);
		});
	};

	render() {
		return (
			<Row className="justify-content-between">
				{this.makeItems(this.state.items)}
			</Row>
		);
	}
}
