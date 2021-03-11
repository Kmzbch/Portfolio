import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import gsap from 'gsap';
import TimelineItems from './TimelineItems';
import TechStack from '../shared/techstack/TechStack';
import './Timeline.scss';

export default class Timeline extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const header = document.querySelector('.timeline .header');
		const divider = document.querySelector('.timeline .divider');

		const panel = document.querySelectorAll('.timeline .panel');

		const timelineEvents = document.querySelectorAll('.timeline .timeline-event');

		gsap.from([ header, divider ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			x: -100,
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: '.timeline .header',
				start: 'top 75%'
			}
		});

		gsap.from([ panel ], {
			delay: 0.5,
			duration: 0.8,
			ease: 'ease.out',
			opacity: 0,
			stagger: {
				amount: 0.15
			},
			scrollTrigger: {
				trigger: [ panel ],
				start: 'top 75%'
			}
		});

		for (let i = 0; i < timelineEvents.length; i++) {
			gsap.from([ timelineEvents[i] ], {
				delay: 0.5,
				duration: 0.8,
				// ease: 'Linear.easeNone',
				// scaleY: 0.8,

				ease: 'ease.out',
				y: 50,
				opacity: 0,
				stagger: {
					amount: 0.15
				},
				scrollTrigger: {
					trigger: [ timelineEvents[i] ],
					start: 'top 75%'
				}
			});

			const techStackImages = timelineEvents[i].querySelectorAll('.tech-stack-image');
			gsap.from(techStackImages, {
				delay: 1.5,
				duration: 0.6,
				ease: 'ease.out',
				y: 50,
				opacity: 0,
				stagger: {
					amount: 0.3
				},
				scrollTrigger: {
					trigger: techStackImages,
					start: 'top 100%'
				}
			});
		}
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
