import React, { Component } from 'react';
import gsap from 'gsap';
import AboutMe from './AboutMe';
import AboutTech from './AboutTech';
import AboutSkills from './AboutSkills';
import './About.scss';

export default class About extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const header = document.querySelector('.about .header');
		const divider = document.querySelector('.about .divider');

		// const about = document.querySelector('#about');
		// gsap.from([ about ], {
		// 	delay: 4.8,
		// 	duration: 0.8,
		// 	display: 'none',
		// 	opacity: 0
		// });

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
				trigger: [ header ],
				start: 'top 75%'
			}
		});
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
