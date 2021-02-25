import { Typography } from '@material-ui/core';
import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './About.scss';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div className={'page'}>
				<section id="" className="about" data-section="">
					<div className={'view main content'}>
						{/* HEADER */}

						{/* CAPTION */}
						<Typography className="header" variant="h4">
							ABOUT
						</Typography>

						{/* DIVIDER */}
						<hr className={'divider center'} />

						{/* PANEL */}
						<Paper className={'panel'}>
							{/* ABOUT ME */}
							<Grid container spacing={3} justify="center">
								<Grid item xs={7} sm={7}>
									<Typography variant="h4">
										Hi, my name is Kei Mizubuchi. Nice to meet you!
									</Typography>
									<Typography>
										I'm a Full-Stack developer based in Toronto, ON. I majored in Software
										Engineering and gained professional experiences in. I have a serious passion for
										X Y and Z. I am currently seeking a software engineering/full-stack developer
										position where XXXXX is valued.
									</Typography>
								</Grid>
								<Grid item xs={5} sm={5}>
									<img className={'profile-image'} src="./images/about/profile.jpg" alt="profile" />
								</Grid>
							</Grid>
							<hr className={'divider center'} />
							<hr className={'divider center'} />
							<hr className={'divider center'} />

							{/* ABOUT TECH  */}
							<Grid container spacing={2} justify="center">
								<Grid item xs={7} sm={7}>
									<Typography variant="h4">Languages</Typography>
									<Typography>
										I'm a Full-Stack developer based in Toronto, ON. I majored in Software
										Engineering and gained professional experiences in. I have a serious passion for
										X Y and Z. I am currently seeking a software engineering/full-stack developer
										position where XXXXX is valued.
									</Typography>
								</Grid>
								<Grid item xs={5} sm={5}>
									<img className={'profile-image'} src="./images/about/profile.jpg" alt="profile" />
								</Grid>
							</Grid>
						</Paper>
					</div>
				</section>
			</div>
		);
	}
}
