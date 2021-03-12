import React, { Component } from 'react';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import gsap from 'gsap';
import ProjectItems from './ProjectItems';
import './Projects.scss';

export default class Projects extends Component {
	constructor(props) {
		super(props);
	}

	// componentDidMount() {
	// 	const header = document.querySelector('.project .header');
	// 	const divider = document.querySelector('.project .divider');

	// 	const panels = document.querySelectorAll('.project .panel');

	// 	gsap.from([ header, divider ], {
	// 		delay: 0.5,
	// 		duration: 0.8,
	// 		ease: 'ease.out',
	// 		x: 100,
	// 		opacity: 0,
	// 		stagger: {
	// 			amount: 0.15
	// 		},
	// 		scrollTrigger: {
	// 			trigger: '.project .header',
	// 			start: 'top 75%'
	// 		}
	// 	});

	// 	for (let i = 0; i < panels.length; i++) {
	// 		gsap.from([ panels[i] ], {
	// 			delay: 0.5,
	// 			duration: 0.8,
	// 			ease: 'ease.out',
	// 			y: 50,
	// 			opacity: 0,
	// 			stagger: {
	// 				amount: 0.15
	// 			},
	// 			scrollTrigger: {
	// 				trigger: [ panels[i] ],
	// 				start: 'top 85%'
	// 			}
	// 		});
	// 	}
	// }

	render() {
		return (
			<div id="project" className="page project">
				<div className="content">
					<div className="header">PROJECTS</div>

					<hr className="divider yellow center" />

					{ProjectItems.map((item, index) => {
						return (
							<Paper
								className={item.projectType === 'personal' ? 'panel personal' : 'panel'}
								key={item.title}
							>
								<Grid container spacing={2} justify="center">
									<Grid item className="sub-panel left" xs={12} sm={12} md={6}>
										<Typography className="project-title" variant="h3">
											{item.title}
										</Typography>

										<div
											variant="h3"
											className={
												item.projectType === 'personal' ? (
													'project-type personal'
												) : (
													'project-type'
												)
											}
										>
											{item.projectType + ' project'}
										</div>

										<Typography className="project-description">{item.description}</Typography>

										{item.details === '' ? (
											<div />
										) : (
											// <details className="project-description">
											// 	<summary>View Details</summary>
											// 	{item.details}
											// </details>
											<Typography className="project-description" component="span">
												{item.details}
											</Typography>
										)}

										{item.projectLink === '' ? (
											<Grid container direction="column">
												<Button
													className="view-button"
													size="large"
													variant="outlined"
													color="secondary"
													startIcon={<GitHubIcon />}
													href={item.githubLink}
													target="_blank"
												>
													View Code
												</Button>

												<Button
													style={{
														opacity: '0',
														pointerEvents: 'none'
													}}
													className="view-button"
													size="large"
													variant="outlined"
													color="secondary"
													startIcon={<DesktopWindowsIcon />}
													href={item.projectLink}
													target="_blank"
												>
													View App
												</Button>
											</Grid>
										) : (
											<Grid container direction="column">
												<Button
													className="view-button"
													size="large"
													variant="outlined"
													color="secondary"
													startIcon={<DesktopWindowsIcon />}
													href={item.projectLink}
													target="_blank"
												>
													View App
												</Button>
												<Button
													className="view-button"
													size="large"
													variant="outlined"
													color="secondary"
													startIcon={<GitHubIcon />}
													href={item.githubLink}
													target="_blank"
												>
													View Code
												</Button>
											</Grid>
										)}
									</Grid>
									<Grid item className="sub-panel right" xs={12} sm={12} md={6}>
										<img
											className="project-image"
											src={item.imageLink}
											alt={'screenshots of ' + item.title}
										/>
									</Grid>
								</Grid>
							</Paper>
						);
					})}
				</div>
			</div>
		);
	}
}
