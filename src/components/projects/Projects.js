import React, { Component } from 'react';
// material-ui
import { Link, Typography, Paper, Grid, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';

// custom components and scss
import ProjectItems from './ProjectItems';
import './Projects.scss';

export default class Projects extends Component {
	/** Life Cycle Methods */
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	/** Render */
	render() {
		return (
			<div className={'page'}>
				<section id="" className="project" data-section="">
					<div className="view main content">
						{/* <h3 className="header">
						PROJECTS
						</h3> */}
						<Typography className="header" variant="h3">
							PROJECTS
						</Typography>

						<hr className={'divider center'} />

						{/* PROJECTS */}
						{ProjectItems.map((item, index) => {
							return (
								<Paper className={'panel'}>
									<Grid container spacing={2} justify="center">
										{/* Project Information */}
										<Grid item className={'sub-panel left'} xs={6} sm={6}>
											{/* Title */}
											<Typography className={'project-title line-wrap'} variant="h3">
												{item.title}
											</Typography>
											{/* Description */}
											<Typography className={'project-description'}>
												{item.description}
											</Typography>
											{/* Links */}
											<Grid container direction="column">
												<Button
													className={'view-button'}
													size="large"
													variant="outlined"
													color="secondary"
													startIcon={<DesktopWindowsIcon />}
													href={item.projectLink}
													target="_blank"
												>
													View Demo
												</Button>
												<Button
													className={'view-button'}
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
										</Grid>
										{/* Screenshots */}
										<Grid item className={'sub-panel right'} xs={6} sm={6}>
											<img
												className={'project-image'}
												src={item.imageLink}
												alt={'screenshots of ' + item.title}
											/>
										</Grid>
									</Grid>
								</Paper>
							);
						})}
					</div>
				</section>
			</div>
		);
	}
}
