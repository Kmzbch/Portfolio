import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Typography, Link, Grid } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Done, ErrorOutline } from '@material-ui/icons';
import ContactItems from './ContactItems';
import './Contact.scss';

const emailServiceApi = 'https://formspree.io/f/mnqokoqj';

export default class Contact extends Component {
	state = {
		messageSent: false,
		inEditing: false,
		hasError: false
	};

	resetFormMessage = (ev) => {
		if (!this.state.inEditing) {
			this.setState({
				messageSent: false,
				inEditing: true,
				hasError: false
			});
		}

		// const formMessage = document.querySelector('.form-message');
		// const formButton = document.querySelector('.form-button');
		// const formMessageError = document.querySelector('.form-message-error');

		// ReactDOM.findDOMNode(formButton).classList.remove('hidden');

		// if (!formMessage.classList.contains('hidden')) {
		// 	ReactDOM.findDOMNode(formMessage).classList.add('hidden');
		// }
		// if (!formMessageError.classList.contains('hidden')) {
		// 	ReactDOM.findDOMNode(formMessageError).classList.add('hidden');
		// }
	};

	submitForm = (e) => {
		e.preventDefault();

		const form = e.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();

		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			// const formMessage = document.querySelector('.form-message');
			// const formButton = document.querySelector('.form-button');
			// const formMessageError = document.querySelector('.form-message-error');

			if (xhr.readyState !== XMLHttpRequest.DONE) {
				this.setState({
					inEditing: false,
					messageSent: false,
					hasError: true
				});

				return;
			}

			if (xhr.status === 200) {
				this.setState({
					inEditing: false,
					messageSent: true,
					hasError: false
				});

				form.reset();
				// ReactDOM.findDOMNode(formMessage).classList.remove('hidden');
				// ReactDOM.findDOMNode(formButton).classList.add('hidden');
				// ReactDOM.findDOMNode(formMessageError).classList.add('hidden');
			} else {
				this.setState({
					inEditing: false,
					messageSent: false,
					hasError: true
				});

				// ReactDOM.findDOMNode(formMessageError).classList.remove('hidden');
			}
		};

		xhr.send(data);
	};

	render() {
		return (
			<div id="contact" className="page contact">
				<div className="content">
					<div className="header white">CONTACT</div>

					<hr className="divider pink center" />

					<Typography className="caption white" variant="h5">
						Have a question or want to work together?
					</Typography>

					<Grid className="panel" container spacing={2}>
						<Grid item sm={12} md={6}>
							<List className="contact-list">
								{ContactItems.map((item, index) => {
									return (
										<ListItem key={item.link}>
											<ListItemIcon>{item.icon}</ListItemIcon>
											<ListItemText
												primary={
													<Link
														className={
															item.link.match(/^https?:\/\/(www\.)?|mailto:/i) ? (
																'contact-link'
															) : (
																'contact-link disabled'
															)
														}
														href={item.link}
														{...(item.link.match(/^https?:\/\//i)
															? { target: '_blank' }
															: {})}
														variant="h6"
													>
														{item.link.replace(/^https?:\/\/(www\.)?|mailto:/i, '')}
													</Link>
												}
											/>
										</ListItem>
									);
								})}
							</List>
						</Grid>
						<Grid item sm={12} md={6}>
							<div className="contact-form">
								<form onSubmit={this.submitForm} action={emailServiceApi} method="POST">
									<TextField
										className="form-input"
										id="email"
										type="email"
										name="email"
										label="Email"
										variant="filled"
										size="small"
										onFocus={this.resetFormMessage}
										required
									/>
									<TextField
										className="form-input"
										id="name"
										type="text"
										name="name"
										label="Name"
										variant="filled"
										size="small"
										onFocus={this.resetFormMessage}
										required
									/>
									<TextField
										className="form-input"
										id="message"
										name="message"
										label="Message"
										variant="filled"
										multiline={true}
										rows={8}
										onFocus={this.resetFormMessage}
										required
									/>

									<Button
										className="form-button"
										type="submit"
										size="large"
										variant="outlined"
										disabled={this.state.messageSent}
									>
										Send
									</Button>

									<div className="form-message" hidden={!this.state.messageSent}>
										<Done className="form-message-icon" />
										Thank you! Your message has been successfully sent.
									</div>
									<div className="form-message-error" hidden={!this.state.hasError}>
										<ErrorOutline className="form-message-icon" />
										There was an error trying to send your message.
									</div>
								</form>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}
