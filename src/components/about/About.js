import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import AboutMe from './AboutMe';
import AboutTech from './AboutTech';
import AboutSkills from './AboutSkills';
import './About.scss';

// import { TweenMax, TimelineMax, gsap } from 'gsap';

export default class About extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// let header = document.querySelector('.header');
		// let divider = document.querySelector('.divider');
		// let tm = new TimelineMax();
		// gsap.from([ header ], {
		// 	delay: 0.5,
		// 	duration: 0.8,
		// 	ease: 'ease.out',
		// 	x: -100,
		// 	// y: 200,
		// 	opacity: 0,
		// 	stagger: {
		// 		amount: 0.15
		// 	},
		// 	scrollTrigger: {
		// 		trigger: [ header ],
		// 		start: 'top 50%',
		// 		end: 'bottom 5%',
		// 		toggleActions: 'restart reverse restart reverse'
		// 	}
		// });
	}

	render() {
		return (
			<div id="about" className="page about">
				<div className="content">
					<div className="header">ABOUT</div>

					<hr className="divider pink center" />

					{/* <Typography className="caption" variant="h5">
						Let's find out who he is.
					</Typography> */}

					<AboutMe />
					<AboutSkills />
					<AboutTech />
				</div>
			</div>
		);
	}
}
