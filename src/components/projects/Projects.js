import React, { Component } from 'react';
import { Typography, Paper, Grid, Button } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import ProjectItems from './ProjectItems';
import ProjectDetails from './ProjectDetails';
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

										{item.techStack === '' ? (
											<div />
										) : (
											<div variant="h3" className={'project-techstack'}>
												{item.techStack}
											</div>
										)}

										<Typography className="project-description">{item.description}</Typography>

										{/* {item.details === '' ? <div /> : <ProjectDetails src={item.details} />} */}

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
													View Demo
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
													View Demo
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
									{/* <Grid item className="sub-panel right" xs={12} sm={12} md={6}>
										<Link href={'/'} target="_blank">
											<div className="overlay">
												<p className="overlay-text">test</p>
												<img
													className="project-image"
													src={item.imageLink}
													alt={'screenshots of ' + item.title}
												/>
											</div>
										</Link>
									</Grid> */}
								</Grid>
							</Paper>
						);
					})}
				</div>
			</div>
		);
	}
}
