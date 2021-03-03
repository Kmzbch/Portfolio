import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export default class AboutMe extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}
	render() {
		return (
			<div>
				<Typography className="caption" variant="h5">
					Have a question or want to work together?
				</Typography>

				<Grid className={'about-me'} container spacing={3} justify="center">
					<Grid item xs={7} sm={7}>
						<Typography style={{ margin: '5vh auto' }} variant="h4">
							Hi, I'm Kei Mizubuchi. I'm a software engineer.
						</Typography>
						<Typography>
							With 5+ years of experience in on-site IT work with direct clients seeking a position where
							reliability is valued; Specialized in full-stack development, experienced in scripting,
							detail-oriented and collaborative problem-solver
						</Typography>
					</Grid>
					<Grid style={{ textAlign: 'center' }} item xs={5} sm={5}>
						<img className={'profile-image'} src="./images/about/profile.jpg" alt="profile" />
					</Grid>
				</Grid>
			</div>
		);
	}
}
