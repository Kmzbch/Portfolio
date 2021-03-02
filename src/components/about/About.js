import { Typography } from '@material-ui/core';
import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GitHubIcon from '@material-ui/icons/GitHub';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

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

						{/* ABOUT ME */}
						<Grid
							container
							spacing={3}
							justify="center"
							style={{
								width: '70%',
								padding: '5vh 5vw',
								margin: '3vh auto'
							}}
						>
							<Grid item xs={7} sm={7}>
								<Typography style={{ margin: '5vh auto' }} variant="h4">
									Hi, I'm Kei Mizubuchi. I'm a software engineer.
								</Typography>
								<Typography>
									With 5+ years of experience in on-site IT work with direct clients seeking a
									position where reliability is valued; Specialized in full-stack development,
									experienced in scripting, detail-oriented and collaborative problem-solver
								</Typography>
							</Grid>
							<Grid style={{ textAlign: 'center' }} item xs={5} sm={5}>
								<img className={'profile-image'} src="./images/about/profile.jpg" alt="profile" />
							</Grid>
						</Grid>

						<Typography className="caption" variant="h4">
							What can I offer?
						</Typography>

						<Grid
							container
							spacing={3}
							justify="center"
							style={{
								width: '70%',
								padding: '5vh 5vw',
								margin: '3vh auto'
							}}
						>
							<ListItem>
								<ListItemIcon
									style={{
										margin: 'auto'
									}}
								>
									<GitHubIcon
										style={{
											fontSize: '80px',
											color: '#40bdae'
										}}
									/>
								</ListItemIcon>
								<ListItemIcon
									style={{
										margin: 'auto'
									}}
								>
									<GitHubIcon
										style={{
											fontSize: '80px',
											color: '#40bdae'
										}}
									/>
								</ListItemIcon>
								<ListItemIcon
									style={{
										margin: 'auto'
									}}
								>
									<GitHubIcon
										style={{
											fontSize: '80px',
											color: '#40bdae'
										}}
									/>
								</ListItemIcon>

								<ListItemIcon
									style={{
										margin: 'auto'
									}}
								>
									<GitHubIcon
										style={{
											fontSize: '80px',
											color: '#40bdae'
										}}
									/>
								</ListItemIcon>
							</ListItem>
						</Grid>

						<Typography className="caption" variant="h4">
							SKILLS
						</Typography>

						{/* ABOUT TECH  */}
						<Grid
							container
							spacing={2}
							justify="center"
							style={{
								width: '70%',
								padding: '5vh 5vw',
								margin: '3vh auto'
							}}
						>
							<Grid container direction="row">
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
							<Grid container direction="row-reverse">
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
							<Grid container direction="row">
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
						</Grid>
					</div>
				</section>
			</div>
		);
	}
}
