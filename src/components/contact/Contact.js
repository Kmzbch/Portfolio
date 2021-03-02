import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Typography, Link, Grid } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import './Contact.scss';
import ContactItems from './ContactItems';

export default class Contact extends Component {
	emailServiceApi = 'https://formspree.io/f/mnqokoqj';

	// life cycle methods
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	resetContactForm = (ev) => {
		const formMessage = document.querySelector('.form-message');
		const formButton = document.querySelector('.form-button');
		// reset validation message
		if (!formMessage.classList.contains('hidden')) {
			ReactDOM.findDOMNode(formMessage).classList.add('hidden');
			ReactDOM.findDOMNode(formButton).classList.remove('hidden');
		}
	};

	submitForm = (ev) => {
		ev.preventDefault();

		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		const formMessage = document.querySelector('.form-message');
		const formButton = document.querySelector('.form-button');
		const formMessageError = document.querySelector('.form-message-error');

		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
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

	// renderer
	render() {
		return (
			<div id="contact" className={'page contact'}>
				<div className="content">
					<div className="header white">CONTACT</div>

					<hr className={'divider center'} />

					<Typography className="caption white" variant="h5">
						Have a question or want to work together?
					</Typography>

					<Grid className={'panel'} container spacing={2}>
						<Grid item xs={6} sm={6}>
							<div className={'contact-items'}>
								<List>
									{ContactItems.map((item, index) => {
										return (
											<ListItem>
												<ListItemIcon>{item.icon}</ListItemIcon>
												<ListItemText
													primary={
														<Link
															className={
																item.link.match(/^https?:\/\/(www\.)?|mailto:/i) ? (
																	'contact-links'
																) : (
																	'contact-links disabled-link'
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
										className="contact-form-input"
										id="email"
										type="email"
										name="email"
										label="Email"
										variant="filled"
										size="small"
										onFocus={this.resetContactForm}
										required
									/>
									<TextField
										className="contact-form-input"
										id="name"
										type="text"
										name="name"
										label="Name"
										variant="filled"
										size="small"
										onFocus={this.resetContactForm}
										required
									/>
									<TextField
										className="contact-form-input"
										id="message"
										name="message"
										label="Message"
										variant="filled"
										multiline={true}
										rows={8}
										onFocus={this.resetContactForm}
										required
									/>
									<br />
									<p className={'form-message hidden'}>Thank you. Your message has been sent.</p>
									<Button type="submit" className={'form-button'} size="large" variant="outlined">
										Send
									</Button>
									<p className={'form-message-error hidden'}>
										Ooops! There was an error trying to send your message.
									</p>
								</form>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}
