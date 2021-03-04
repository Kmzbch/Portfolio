import React, { Component } from 'react';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ProjectItems from './ProjectItems';
import './Projects.scss';

export default class Projects extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="project" className="page project">
				<div className="content">
					<div className="header">PROJECTS</div>

					<hr className="divider yellow center" />

					{ProjectItems.map((item, index) => {
						return (
							<Paper className="panel" key={item.title}>
								<Grid container spacing={2} justify="center">
									<Grid item className="sub-panel left" xs={6} sm={6}>
										<Typography className="project-title" variant="h3">
											{item.title}
										</Typography>

										<Typography className="project-description">{item.description}</Typography>

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
									</Grid>
									<Grid item className="sub-panel right" xs={6} sm={6}>
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
