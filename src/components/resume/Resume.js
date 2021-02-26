import React, { Component } from 'react';

import './Resume.scss';
import { Typography, Grid, Paper } from '@material-ui/core';

export default class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div className={'page'}>
				<section id="" className="resume" data-section="">
					<div className="view main content">
						{/* CAPTION */}
						<Typography className="header" variant="h3">
							RESUME
						</Typography>

						{/* DIVIDER */}
						<hr className={'divider center'} />

						<Grid container spacing={2} justify="center">
							<Grid item xs={4} sm={4}>
								<Typography variant="h5">WIMTACH</Typography>
								<Typography variant="h6">Sep. 2020 - Dec. 2020</Typography>
							</Grid>
							<Grid item xs={8} sm={8}>
								<Grid item xs={6} sm={6}>
									<Typography variant="h5">Student Researcher</Typography>
									<ul>
										<li>Implemented REST APIs of Java EMR app back-end with Spring Boot</li>
										<li>Built and maintained a JUnit automated test suite with REST Assured</li>
										<li>Resolved technical issues arising during development in an Agile manner</li>
										<li>Maintained internal documents and Confluence API documentation </li>
									</ul>
								</Grid>
								<Grid item xs={6} sm={6}>
									<img
										className={'tech-stack-image'}
										src={'./images/techStacks/javascript.png'}
										alt={'Logo of '}
									/>
									<img
										className={'tech-stack-image'}
										src={'./images/techStacks/javascript.png'}
										alt={'Logo of '}
									/>
									<img
										className={'tech-stack-image'}
										src={'./images/techStacks/javascript.png'}
										alt={'Logo of '}
									/>
									<img
										className={'tech-stack-image'}
										src={'./images/techStacks/javascript.png'}
										alt={'Logo of '}
									/>
								</Grid>
							</Grid>
						</Grid>

						<Grid container spacing={2} justify="center">
							<Grid item xs={4} sm={4}>
								<Typography variant="h5">WIMTACH</Typography>
								<Typography variant="h6">Sep. 2020 - Dec. 2020</Typography>
							</Grid>
							<Grid item xs={8} sm={8}>
								<Grid item xs={6} sm={6}>
									<Typography variant="h5">Student Researcher</Typography>
									<ul>
										<li>Implemented REST APIs of Java EMR app back-end with Spring Boot</li>
										<li>Built and maintained a JUnit automated test suite with REST Assured</li>
										<li>Resolved technical issues arising during development in an Agile manner</li>
										<li>Maintained internal documents and Confluence API documentation </li>
									</ul>
								</Grid>
								<Grid item xs={6} sm={6}>
									<img
										className={'tech-stack-image'}
										src={'./images/techStacks/javascript.png'}
										alt={'Logo of '}
									/>
									<img
										className={'tech-stack-image'}
										src={'./images/techStacks/javascript.png'}
										alt={'Logo of '}
									/>
									<img
										className={'tech-stack-image'}
										src={'./images/techStacks/javascript.png'}
										alt={'Logo of '}
									/>
									<img
										className={'tech-stack-image'}
										src={'./images/techStacks/javascript.png'}
										alt={'Logo of '}
									/>
								</Grid>
							</Grid>
						</Grid>

						{/* {ProjectItems.map((item, index) => {
							return (
								// PANEL
								<Paper className={'panel'}>
									<Grid container spacing={2} justify="center">
										<Grid item xs={6} sm={6}>
											<Typography className={'project-title'} variant="h3">
												{item.title}
											</Typography>
											<Typography>{item.description}</Typography>
											<Button
												className={'view-button'}
												size="large"
												variant="outlined"
												color="secondary"
											>
												View Demo
											</Button>
											<Button
												className={'view-button'}
												size="large"
												variant="outlined"
												color="secondary"
											>
												View Code
											</Button>
										</Grid>
										<Grid className={'sub-panel b'} item xs={6} sm={6}>
											<img
												className={'project-image'}
												src={item.imageLink}
												alt={'screenshots of ' + item.title}
											/>
										</Grid>
									</Grid>
								</Paper>
							);
						})} */}
					</div>
				</section>
			</div>
		);
	}
}
