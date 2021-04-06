import React, { Component } from 'react';
import { Typography, Paper, Grid, Button, Link } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import gsap from 'gsap';
import ProjectItems from './ProjectItems';
import './Projects.scss';

class ProjectDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const paragraphs = this.props.src.split(/\n+/);

		return (
			<div>
				{paragraphs.map((item, index) => {
					return (
						<div className="project-detail">
							{item.match(/^https?:\/\//) ? (
								<Link href={item} target="_blank">
									{item}
								</Link>
							) : (
								<Typography component="span">{item}</Typography>
							)}
						</div>
					);
				})}
			</div>
		);
	}
}

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

										{/* {item.details === '' ? <div /> : <ProjectDetail src={item.details} />} */}

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
								</Grid>
							</Paper>
						);
					})}
				</div>
			</div>
		);
	}
}
