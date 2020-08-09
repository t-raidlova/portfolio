import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { Content } from '../components';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Styles = styled.div`
	h2 {
		text-align: center;
		padding-bottom: 2rem;
	}
	.button {
		font-size: 1.8rem;
		margin: 2rem 0;
	}

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

		axios
			.post('https://api.sendgrid.com/v3/mail/send', this.state)
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
				<Container>
					<Content>
						<h2>Let's Talk!</h2>
						<Form className="form" onSubmit={this.handleSubmit}>
							<Form.Group>
								<Form.Label htmlFor="full-name">
									<h4>Full Name</h4>
								</Form.Label>
								<Form.Control
									className="form-control-lg"
									id="full-name"
									name="name"
									type="text"
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor="email">
									<h4>Email</h4>
								</Form.Label>
								<Form.Control
									className="form-control-lg"
									id="email"
									name="email"
									type="email"
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor="message">
									<h4>Message</h4>
								</Form.Label>
								<Form.Control
									className="form-control-lg"
									id="message"
									name="message"
									as="textarea"
									rows="4"
									value={this.state.message}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Button
								className="button"
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
								<p className="d-inline err-msg">
									Something went wrong, the sadness..you can email me at
									terezaraidlova@gmail.com
								</p>
							)}
						</Form>
					</Content>
				</Container>
			</Styles>
		);
	}
}
