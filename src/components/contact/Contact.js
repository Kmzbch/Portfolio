import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Typography, Link, Grid } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ContactItems from './ContactItems';
import './Contact.scss';
import { Done, DoneOutline, ErrorOutline } from '@material-ui/icons';

export default class Contact extends Component {
	emailServiceApi = 'https://formspree.io/f/mnqokoqj';

	constructor(props) {
		super(props);
	}

	resetFormMessage = (ev) => {
		const formMessage = document.querySelector('.form-message');
		const formButton = document.querySelector('.form-button');
		const formMessageError = document.querySelector('.form-message-error');

		ReactDOM.findDOMNode(formButton).classList.remove('hidden');

		if (!formMessage.classList.contains('hidden')) {
			ReactDOM.findDOMNode(formMessage).classList.add('hidden');
		}
		if (!formMessageError.classList.contains('hidden')) {
			ReactDOM.findDOMNode(formMessageError).classList.add('hidden');
		}
	};

	submitForm = (ev) => {
		ev.preventDefault();

		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();

		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			const formMessage = document.querySelector('.form-message');
			const formButton = document.querySelector('.form-button');
			const formMessageError = document.querySelector('.form-message-error');

			if (xhr.readyState !== XMLHttpRequest.DONE) {
				return;
			}

			if (xhr.status === 200) {
				form.reset();
				ReactDOM.findDOMNode(formMessage).classList.remove('hidden');
				ReactDOM.findDOMNode(formButton).classList.add('hidden');
				ReactDOM.findDOMNode(formMessageError).classList.add('hidden');
			} else {
				ReactDOM.findDOMNode(formMessageError).classList.remove('hidden');
			}
		};

		xhr.send(data);
	};

	render() {
		return (
			<div id="contact" className="page contact">
				<div className="content">
					<div className="header white">CONTACT</div>

					<hr className="divider center" />

					<Typography className="caption white" variant="h5">
						Have a question or want to work together?
					</Typography>

					<Grid className="panel" container spacing={2}>
						<Grid item xs={6} sm={6}>
							<div className="contact-items">
								<List>
									{ContactItems.map((item, index) => {
										return (
											<ListItem key={item.link}>
												<ListItemIcon>{item.icon}</ListItemIcon>
												<ListItemText
													primary={
														<Link
															className={
																item.link.match(/^https?:\/\/(www\.)?|mailto:/i) ? (
																	'contact-links'
																) : (
																	'contact-links disabled'
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
							</div>
						</Grid>
						<Grid item xs={6} sm={6}>
							<div className="contact-form">
								<form onSubmit={this.submitForm} action={this.emailServiceApi} method="POST">
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

									<Button className="form-button" type="submit" size="large" variant="outlined">
										Send
									</Button>
									<div className="form-message hidden">
										<Done className="form-message-icon" />
										Thank you! Your message has been successfully sent.
									</div>
									<div className="form-message-error hidden">
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
