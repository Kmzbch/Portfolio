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
			<div>
				<section id="about" className="about" data-section="">
					<div className={'view main content'}>
						{/* HEADER */}
						<div className="header">ABOUT</div>

						{/* DIVIDER */}
						<hr className={'divider center'} />

						<Typography className="caption" variant="h5">
							Have a question or want to work together?
						</Typography>

						{/* PANEL */}
						<Paper className={'panel'}>
							{/* ABOUT ME */}
							<Grid container spacing={3} justify="center">
								<Grid item xs={7} sm={7}>
									<Typography style={{ margin: '3vh auto' }} variant="h4">
										Hi, my name is Kei Mizubuchi. Nice to meet you!
									</Typography>
									<Typography>
										My path in software engineering began in 2017. I majored in software
										engineering, graduated with high honours, and gained professional experience in
										both the private and public sectors to broaden my horizons. I am currently
										seeking a software engineering/full-stack developer position in the Greater
										Toronto Area where dependability is valued.{' '}
									</Typography>
								</Grid>
								<Grid style={{ textAlign: 'center' }} item xs={5} sm={5}>
									<img className={'profile-image'} src="./images/about/profile.jpg" alt="profile" />
								</Grid>
							</Grid>

							{/* ABOUT TECH  */}
							<Grid container spacing={2} justify="center">
								<Grid item xs={5} sm={5}>
									<img
										className={'about-tech-image l'}
										src={'./images/about/roma-exterior.jpg'}
										alt={'Engine room of Ferrari Roma'}
									/>
								</Grid>
								<Grid item xs={7} sm={7}>
									<Typography variant="h4">Languages</Typography>
									<Typography>
										I'm a Full-Stack developer based in Toronto, ON. I majored in Software
										Engineering and gained professional experiences in. I have a serious passion for
										X Y and Z. I am currently seeking a software engineering/full-stack developer
										position where ???? is valued.
									</Typography>
								</Grid>
							</Grid>

							<Grid container spacing={2} justify="center">
								<Grid item xs={7} sm={7}>
									<Typography variant="h4">Languages</Typography>
									<Typography>
										I'm a Full-Stack developer based in Toronto, ON. I majored in Software
										Engineering and gained professional experiences in. I have a serious passion for
										X Y and Z. I am currently seeking a software engineering/full-stack developer
										position where ???? is valued.
									</Typography>
								</Grid>
								<Grid item xs={5} sm={5}>
									<img
										className={'about-tech-image l'}
										src={'./images/about/roma-exterior.jpg'}
										alt={'Engine room of Ferrari Roma'}
									/>
								</Grid>
							</Grid>

							<Grid container spacing={2} justify="center">
								<Grid item xs={5} sm={5}>
									<img
										className={'about-tech-image l'}
										src={'./images/about/roma-exterior.jpg'}
										alt={'Engine room of Ferrari Roma'}
									/>
								</Grid>
								<Grid item xs={7} sm={7}>
									<Typography variant="h4">Languages</Typography>
									<Typography>
										I'm a Full-Stack developer based in Toronto, ON. I majored in Software
										Engineering and gained professional experiences in. I have a serious passion for
										X Y and Z. I am currently seeking a software engineering/full-stack developer
										position where ???? is valued.
									</Typography>
								</Grid>
							</Grid>
						</Paper>
					</div>
				</section>
			</div>
		);
	}
}
