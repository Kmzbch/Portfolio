import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import TimelineItems from './TimelineItems';
import TechStack from '../shared/components/techstack/TechStack';
import './Timeline.scss';

export default class Timeline extends Component {
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
									<div className="event-icon" />
									<div className="event-item">
										<div className="date-range">{item.dateRange}</div>

										<Typography className="job-title" variant={'h3'}>
											{item.title}
										</Typography>

										<Typography className="company" variant={'h4'}>
											{item.company}
										</Typography>

										<List className="duties">
											{item.duties.map((subItem, subIndex) => {
												return (
													<ListItem key={subIndex}>
														<ListItemIcon className="duty-icon">{'\u25aa'}</ListItemIcon>
														<ListItemText className="duty-item">{subItem}</ListItemText>
													</ListItem>
												);
											})}
										</List>

										<div className="techstack">
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
