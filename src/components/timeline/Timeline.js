import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import TimelineItems from './TimelineItems';
import TechStack from '../shared/techstack/TechStack';
import './Timeline.scss';

export default class Timeline extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="timeline" className="page timeline">
				<div className="content">
					<div className="header">TIMELINE</div>

					<hr className="divider pink center" />

					<ul className="panel">
						{TimelineItems.map((item, index) => {
							return (
								<li key={index} className="timeline-event">
									<div className="timeline-event-icon" />
									<div className="timeline-event-item">
										<div className="timeline-date-range">{item.dateRange}</div>

										<Typography className="timeline-title" variant={'h3'}>
											{item.title}
										</Typography>

										<Typography className="timeline-company" variant={'h4'}>
											{item.company}
										</Typography>

										<List className="timeline-duties">
											{item.duties.map((subItem, subIndex) => {
												return (
													<ListItem key={subIndex}>
														<ListItemIcon className="duty-icon">{'\u25aa'}</ListItemIcon>
														<ListItemText className="duty-item">{subItem}</ListItemText>
													</ListItem>
												);
											})}
										</List>

										<div className="timeline-tech-stack">
											{item.techStacks.map((subItem, subIndex) => {
												return (
													<TechStack
														key={subIndex}
														src={subItem.link}
														title={subItem.altTxt}
														alt={subItem.altTxt}
													/>
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
