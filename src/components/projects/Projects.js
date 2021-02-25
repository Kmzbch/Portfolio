import React, { Component } from 'react';
import './Projects.scss';
// materia-ui
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProjectItems from './ProjectItems';
import { ButtonGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default class Projects extends Component {
	/** Life Cycle Methods */
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div className={'page'}>
				<section id="" className="project" data-section="">
					<div className="view main content">
						{/* HEADER */}

						{/* CAPTION */}
						<Typography className="header" variant="h4">
							PROJECTS
						</Typography>

						{/* DIVIDER */}
						<hr className={'divider center'} />

						{/* PROJECTS */}
						{ProjectItems.map((item, index) => {
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
						})}
					</div>
				</section>
			</div>
		);
	}
}
