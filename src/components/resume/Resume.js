import React, { Component } from 'react';
import { Typography, Grid, Paper } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ResumeItems from './ResumeItems';
import TechStack from '../shared/TechStack';
import './Resume.scss';

export default class Resume extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="resume" className="page resume">
				<div className="content">
					<div className="header">RESUME</div>

					<hr className="divider pink center" />

					<ul className="resume-body">
						{ResumeItems.map((item, index) => {
							return (
								<li key={index} className="resume-event">
									<div className={'resume-event-icon' + (index + 1)}>
										<label className="resume-event-icon" />
									</div>
									<div className="resume-event-item">
										<div className="resume-date-range">{item.dateRange}</div>

										<Typography className="resume-title" variant={'h3'}>
											{item.title}
										</Typography>

										<Typography className="resume-company" variant={'h4'}>
											{item.company}
										</Typography>

										<List className="resume-duties">
											{item.duties.map((subItem, index) => {
												return (
													<ListItem key={subItem}>
														<ListItemIcon>{'\u25aa'} </ListItemIcon>
														<ListItemText>{subItem}</ListItemText>
													</ListItem>
												);
											})}
										</List>
										<div className="resume-tech-stack">
											{item.techStacks.map((item, index) => {
												return (
													<TechStack src={item.link} title={item.altTxt} alt={item.altTxt} />
												);
											})}
										</div>
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
