import React, { Component } from 'react';

import './Resume.scss';
import { Typography, Grid, Paper, List, ListItem } from '@material-ui/core';

import ResumeItems from './ResumeItems';

export default class Resume extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div id="resume" className={'page resume'}>
				<div className="content">
					<div className="header">RESUME</div>

					<hr className={'divider center'} />

					<div>
						<ul className="resume-body">
							{ResumeItems.map((item, index) => {
								return (
									<li key={index} className={'timeline-event timeline-event' + (index + 1)}>
										{/* EVENT ICON */}
										<div className={'timeline-event-icon' + (index + 1)}>
											<label className={'timeline-event-icon'} />
										</div>
										<div className="timeline-event-copy">
											{/* DATE RANGE */}
											<p className={'resume-date-range'}>{item.dateRange}</p>
											{/* JOB TITLE */}
											<div className={'line-wrap'}>
												<h3 className={'color timeline-title' + (index + 1)}>{item.title}</h3>
											</div>
											{/* COMPANY */}
											<div className={'line-wrap'}>
												<h4 className={'color timeline-company' + (index + 1)}>
													{item.company}
												</h4>
											</div>
											{/* DUTIES */}
											<List className={'resume-duties'}>
												{item.duties.map((item, index) => {
													return <ListItem>- {item}</ListItem>;
												})}
											</List>
											{/* TECH STACK  */}
											{/* <div
													className={'timeline-tech-stack timeline-tech-stack' + (index + 1)}
												>
													{item.techStacks.map((item, index) => {
														return (
															<div key={index} className={'tech-stack-wrapper'}>
																<img
																	className={'tech-stack-image'}
																	src={item.link}
																	title={item.altTxt}
																	alt={'Logo of ' + item.altTxt}
																/>
																<div className="middle-wrapper translate middle">
																	<span>{item.altTxt}</span>
																</div>
															</div>
														);
													})}
												</div> */}
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<br />
				</div>
			</div>
		);
	}
}
