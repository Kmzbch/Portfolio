import React, { Component } from 'react';
import { Typography, Grid, Paper, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import './Resume.scss';
import ResumeItems from './ResumeItems';

export default class Resume extends Component {
	// Life cycle methods
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	// renderer
	render() {
		return (
			<div id="resume" className={'page resume'}>
				<div className="content">
					<div className="header">RESUME</div>

					<hr className={'divider center'} />

					<Typography className="caption white" variant="h5">
						Have a question or want to work together?
					</Typography>

					<ul className="resume-body">
						{ResumeItems.map((item, index) => {
							return (
								<li key={index} className={'resume-event'}>
									<div className={'resume-event-icon' + (index + 1)}>
										<label className={'resume-event-icon'} />
									</div>
									<div className="resume-event-item">
										{/* <p className={'resume-date-range'}>{item.dateRange}</p> */}
										<div className={'resume-date-range'}>{item.dateRange}</div>

										<Typography className={'resume-title'} variant={'h3'}>
											{item.title}
										</Typography>

										<Typography className={'resume-company'} variant={'h4'}>
											{item.company}
										</Typography>

										<List className={'resume-duties'}>
											{item.duties.map((subItem, index) => {
												return (
													<ListItem key={subItem}>
														<ListItemIcon>{'\u25aa'} </ListItemIcon>
														<ListItemText>{subItem}</ListItemText>
													</ListItem>
												);
											})}
										</List>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}
