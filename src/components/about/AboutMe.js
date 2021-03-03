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
				<Grid className={'about-me'} container spacing={3} justify="center">
					<Grid item xs={7} sm={7}>
						<Typography style={{ margin: '5vh auto' }} variant="h4">
							Biography
						</Typography>
						<Typography style={{ margin: '5vh auto' }}>
							With 5+ years of experience in on-site IT work with direct clients seeking a position where
							reliability is valued; Specialized in full-stack development, experienced in scripting,
							detail-oriented and collaborative problem-solver
						</Typography>
						<Typography style={{ margin: '5vh auto' }}>
							Previously, I worked at Works Applications, Singapore as a Software Engineer, where I worked
							on delivering central libraries, microservices and distributed multi-tenant architecture to
							thousands of developers inside the company who utilized them to build various products for
							our customers. Aside from work, I am also an open-source enthusiast and have created
							projects that were listed in GitHub trending.
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
