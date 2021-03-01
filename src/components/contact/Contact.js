import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import './Contact.scss';
import ContactItems from './ContactItems';

import { TextField, Button } from '@material-ui/core';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	submitForm = (ev) => {
		console.log('!!!!!!');
		ev.preventDefault();

		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		const formMessageStyle = document.querySelector('.form-message').style;
		const formButtonStyle = document.querySelector('.form-button').style;
		const formMessageErrorStyle = document.querySelector('.form-message-error').style;

		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');

		console.log(xhr);
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) {
				return;
			}
			if (xhr.status === 200) {
				form.reset();
				formMessageStyle.display = 'block';
				formButtonStyle.display = 'none';
			} else {
				formMessageErrorStyle.display = 'block';
			}
		};

		xhr.send(data);
	};

	render() {
		return (
			<div className={'page contact'}>
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
												<ListItemIcon
													style={{
														marginLeft: 'auto',
														marginRight: '0'
													}}
												>
													{item.icon}
												</ListItemIcon>
												<ListItemText>{item.link}</ListItemText>
											</ListItem>
										);
									})}
								</List>
							</div>
						</Grid>
						<Grid item xs={6} sm={6}>
							<div className="contact-form">
								<form onSubmit={this.submitForm} action="https://formspree.io/f/mnqokoqj" method="POST">
									<input type="text" name="_gotcha" style={{ display: 'none' }} />
									<TextField
										className="contact-form-input"
										id="email"
										type="email"
										name="email"
										label="Email"
										variant="filled"
										size="small"
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
										required
									/>
									<TextField
										className="contact-form-input message"
										id="message"
										name="message"
										label="Message"
										variant="outlined"
										multiline={true}
										rows={8}
										required
									/>
									<br />
									<p className={'form-message'}>Thanks, talk soon!</p>
									<Button type="submit" className={'form-button'} size="large" variant="outlined">
										Submit
									</Button>
									<p className={'form-message-error'}>Ooops! There was an error.</p>
								</form>
							</div>
						</Grid>
					</Grid>
				</div>
			</div>
		);
	}
}
