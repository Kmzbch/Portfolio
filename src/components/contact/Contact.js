import React, { Component } from 'react';
import { Typography, Paper, Grid, FormControl, InputLabel, Input, FormHelperText, TextField } from '@material-ui/core';
import './Contact.scss';

export default class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div className={'page'}>
				<section id="" className="contact" data-section="">
					<div className={'view main content'}>
						{/* HEADER */}

						{/* CAPTION */}
						<Typography className="header" variant="h4">
							CONTACT
						</Typography>

						{/* DIVIDER */}
						<hr className={'divider center'} />

						{/* PANEL */}
						<Paper className={'panel'}>
							<Grid container spacing={3} justify="center">
								<Grid item xs={7} sm={7}>
									<Typography variant="h4">
										Hi, my name is Kei Mizubuchi. Nice to meet you!
									</Typography>
								</Grid>
							</Grid>
							<hr className={'divider center'} />
							<hr className={'divider center'} />
							<hr className={'divider center'} />
							<FormControl component="fieldset">
								<InputLabel htmlFor="contact-form">Email Address</InputLabel>
								<Input id="contact-form" />
								<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
							</FormControl>
							<FormControl component="fieldset">
								<InputLabel htmlFor="contact-form">Name</InputLabel>
								<Input id="contact-form" />
								<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
							</FormControl>
							{/* <FormControl component="fieldset">
								<TextField id="contact-form" />
								<FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
							</FormControl> */}
						</Paper>
					</div>
				</section>
			</div>
		);
	}
}
