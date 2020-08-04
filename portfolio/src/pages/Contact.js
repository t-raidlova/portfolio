import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import { Content, HeroPattern } from '../components';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Styles = styled.div`
	.success-msg {
		color: #57a773;
		padding: 10px 15px;
	}

	.err-msg {
		color: #ee6352;
		padding: 10px 15px;
	}
`;

export class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
			disabled: false,
			emailSent: null,
		};
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		//prevents from submitting multiple times
		this.setState({
			disabled: true,
		});

		Axios.post('/email', this.state)
			.then((res) => {
				if (res.data.success) {
					this.setState({
						disabled: false,
						emailSent: true,
					});
				} else {
					this.setState({
						disabled: false,
						emailSent: false,
					});
				}
			})
			.catch((err) => {
				console.log(err);

				this.setState({
					disabled: false,
					emailSent: false,
				});
			});
	};

	render() {
		return (
			<Styles>
				<HeroPattern pttrn={'pattern'}>
					<Container>
						<Content>
							<h1 className="display-4 font-weight-bolder p-0 py-5 text-center">
								Let's Talk!
							</h1>
							<Form onSubmit={this.handleSubmit}>
								<Form.Group>
									<Form.Label htmlFor="full-name">Full Name</Form.Label>
									<Form.Control
										id="full-name"
										name="name"
										type="text"
										value={this.state.name}
										onChange={this.handleChange}
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label htmlFor="email">Email</Form.Label>
									<Form.Control
										id="email"
										name="email"
										type="email"
										value={this.state.email}
										onChange={this.handleChange}
									/>
								</Form.Group>

								<Form.Group>
									<Form.Label htmlFor="message">Message</Form.Label>
									<Form.Control
										id="message"
										name="message"
										as="textarea"
										rows="2"
										value={this.state.message}
										onChange={this.handleChange}
									/>
								</Form.Group>

								<Button
									className="d-inline-block"
									variant="primary"
									type="submit"
									disabled={this.state.disabled}
								>
									Send
								</Button>

								{this.state.emailSent === true && (
									<p className="d-inline success-msg">Email Sent</p>
								)}
								{this.state.emailSent === false && (
									<p className="d-inline err-msg">Email Not Sent</p>
								)}
							</Form>
						</Content>
					</Container>
				</HeroPattern>
			</Styles>
		);
	}
}
