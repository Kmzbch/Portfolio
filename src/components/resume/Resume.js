import React, { Component } from 'react';

import './Resume.scss';
import { Typography, Grid, Paper, List, ListItem } from '@material-ui/core';

import ResumeItems from './ResumeItems';

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
						<Typography
							style={{
								color: '#3f4e67'
							}}
							className="header"
							variant="h3"
						>
							RESUME
						</Typography>

						<hr className={'divider center'} />

						<div>
							<ul className="resume-body">
								{ResumeItems.map((item, index) => {
									return (
										<li key={index} className={'timeline-event timeline-event' + (index + 1)}>
											{/* EVENT ICON */}
											<div className={'timeline-event-icon' + (index + 1)}>
												<label className={'timeline-event-icon'} />
											</div>
											<div className="timeline-event-copy">
												{/* DATE RANGE */}
												<p className={'resume-date-range'}>{item.dateRange}</p>
												{/* JOB TITLE */}
												<div className={'line-wrap'}>
													<h3 className={'color timeline-title' + (index + 1)}>
														{item.title}
													</h3>
												</div>
												{/* COMPANY */}
												<div className={'line-wrap'}>
													<h4 className={'color timeline-company' + (index + 1)}>
														{item.company}
													</h4>
												</div>
												{/* DUTIES */}
												<List className={'resume-duties'}>
													{item.duties.map((item, index) => {
														return <ListItem>- {item}</ListItem>;
													})}
												</List>
												{/* TECH STACK  */}
												{/* <div
													className={'timeline-tech-stack timeline-tech-stack' + (index + 1)}
												>
													{item.techStacks.map((item, index) => {
														return (
															<div key={index} className={'tech-stack-wrapper'}>
																<img
																	className={'tech-stack-image'}
																	src={item.link}
																	title={item.altTxt}
																	alt={'Logo of ' + item.altTxt}
																/>
																<div className="middle-wrapper translate middle">
																	<span>{item.altTxt}</span>
																</div>
															</div>
														);
													})}
												</div> */}
											</div>
										</li>
									);
								})}
							</ul>
						</div>
						<br />
					</div>
				</section>
			</div>
		);
	}

	// render() {
	// 	return (
	// 		<div className={'page'}>
	// 			<section id="" className="resume" data-section="">
	// 				<div className="view main content">
	// 					<Typography className="header" variant="h3">
	// 						RESUME
	// 					</Typography>

	// 					<hr className={'divider center'} />

	// 					<div className={'resume-body'}>
	// 						<Typography
	// 							style={{
	// 								width: 'inherit',
	// 								backgroundColor: '#df777b',
	// 								color: 'white'
	// 							}}
	// 							variant="h6"
	// 						>
	// 							Sep. 2020 - Dec. 2020
	// 						</Typography>
	// 						<Typography variant="h4">Student Researcher</Typography>
	// 						<Typography variant="h5">Centennial College: WIMTACH</Typography>
	// 						<ul>
	// 							<li>Implemented REST APIs of Java EMR app back-end with Spring Boot</li>
	// 							<li>Built and maintained a JUnit automated test suite with REST Assured</li>
	// 							<li>Resolved technical issues arising during development in an Agile manner</li>
	// 							<li>Maintained internal documents and Confluence API documentation </li>
	// 						</ul>

	// 						<Grid style={{ backgroundColor: '#CCC' }} item xs={8} sm={8}>
	// 							<Grid item xs={6} sm={6}>
	// 								<img
	// 									className={'tech-stack-image'}
	// 									src={'./images/techStacks/javascript.png'}
	// 									alt={'Logo of '}
	// 								/>
	// 								<img
	// 									className={'tech-stack-image'}
	// 									src={'./images/techStacks/javascript.png'}
	// 									alt={'Logo of '}
	// 								/>
	// 								<img
	// 									className={'tech-stack-image'}
	// 									src={'./images/techStacks/javascript.png'}
	// 									alt={'Logo of '}
	// 								/>
	// 								<img
	// 									className={'tech-stack-image'}
	// 									src={'./images/techStacks/javascript.png'}
	// 									alt={'Logo of '}
	// 								/>
	// 							</Grid>
	// 						</Grid>
	// 					</div>

	// 					{/* {ProjectItems.map((item, index) => {
	// 						return (
	// 							// PANEL
	// 							<Paper className={'panel'}>
	// 								<Grid container spacing={2} justify="center">
	// 									<Grid item xs={6} sm={6}>
	// 										<Typography className={'project-title'} variant="h3">
	// 											{item.title}
	// 										</Typography>
	// 										<Typography>{item.description}</Typography>
	// 										<Button
	// 											className={'view-button'}
	// 											size="large"
	// 											variant="outlined"
	// 											color="secondary"
	// 										>
	// 											View Demo
	// 										</Button>
	// 										<Button
	// 											className={'view-button'}
	// 											size="large"
	// 											variant="outlined"
	// 											color="secondary"
	// 										>
	// 											View Code
	// 										</Button>
	// 									</Grid>
	// 									<Grid className={'sub-panel b'} item xs={6} sm={6}>
	// 										<img
	// 											className={'project-image'}
	// 											src={item.imageLink}
	// 											alt={'screenshots of ' + item.title}
	// 										/>
	// 									</Grid>
	// 								</Grid>
	// 							</Paper>
	// 						);
	// 					})} */}
	// 				</div>
	// 			</section>
	// 		</div>
	// 	);
	// }
}
