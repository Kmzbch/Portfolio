import React, { Component } from 'react';
import { Typography, Paper, Grid, FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import './Contact.scss';

import ContactItems from './ContactItems';
export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div className={'page'}>
				<section id="" className="contact" data-section="">
					<div className="view main content">
						<Typography className="header" variant="h3" style={{ color: 'white' }}>
							CONTACT
						</Typography>
						<hr className={'divider center'} />
						<Typography className="caption" variant="h5">
							Have a question or want to work together?
						</Typography>
						<Grid
							container
							spacing={2}
							justify="center"
							style={{
								textAlign: 'center',
								margin: '0 auto',
								width: '80%'
							}}
						>
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
								{/* Right side */}
								<div className="contact-form vertical-middle">
									<form
										onSubmit={this.submitForm}
										action="https://formspree.io/f/xaylarqb"
										method="POST"
									>
										<input type="text" name="_gotcha" style={{ display: 'none' }} />
										<input
											className={'contact-form-input'}
											type={'email'}
											name="email"
											placeholder="Email"
											required={true}
										/>
										<input
											className={'contact-form-input'}
											type={'text'}
											name="name"
											placeholder="Name"
											required={true}
										/>
										<textarea
											className={'contact-form-input message'}
											name="message"
											placeholder="Message"
											required={true}
										/>
										<br />
										<p className={'form-message'}>Thanks, talk soon!</p>
										<button className={'form-button'}>Send</button>
										<p className={'form-message-error'}>Ooops! There was an error.</p>
									</form>
								</div>
							</Grid>
						</Grid>
					</div>
				</section>
			</div>
		);
	}

	// render() {
	// 	return (
	// 		<div className={'page'}>
	// 			<section id="" className="contact" data-section="">
	// 				<div className={'view main content'}>
	// 					{/* HEADER */}

	// 					{/* CAPTION */}
	// 					<Typography className="header" variant="h3">
	// 						CONTACT
	// 					</Typography>

	// 					{/* DIVIDER */}
	// 					<hr className={'divider center'} />

	// 					{/* PANEL */}
	// 					<Paper className={'panel'}>
	// 						<Grid container spacing={3} justify="center">
	// 							<Grid item xs={7} sm={7}>
	// 								<Typography variant="h4">
	// 									Hi, my name is Kei Mizubuchi. Nice to meet you!
	// 								</Typography>
	// 							</Grid>
	// 						</Grid>
	// 						<hr className={'divider center'} />
	// 						<hr className={'divider center'} />
	// 						<hr className={'divider center'} />
	// 						<FormControl component="fieldset">
	// 							<InputLabel htmlFor="contact-form">Email Address</InputLabel>
	// 							<Input id="contact-form" />
	// 							<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
	// 						</FormControl>
	// 						<FormControl component="fieldset">
	// 							<InputLabel htmlFor="contact-form">Name</InputLabel>
	// 							<Input id="contact-form" />
	// 							<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
	// 						</FormControl>
	// 						{/* <FormControl component="fieldset">
	// 							<TextField id="contact-form" />
	// 							<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
	// 						</FormControl> */}
	// 					</Paper>
	// 				</div>
	// 			</section>
	// 		</div>
	// 	);
	// }
}
