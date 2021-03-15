import React, { Component } from 'react';
import AboutMe from './AboutMe';
import AboutTech from './AboutTech';
import AboutSkills from './AboutSkills';
import './About.scss';

export default class About extends Component {
	render() {
		return (
			<div id="about" className="page about">
				<div className="content">
					<div className="header">ABOUT</div>

					<hr className="divider pink center" />

					<AboutMe />
					<AboutSkills />
					<AboutTech />
				</div>
			</div>
		);
	}
}
