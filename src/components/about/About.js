import React, { Component } from 'react';
import './About.scss';
import AboutMe from './AboutMe';
import AboutTech from './AboutTech';
import AboutSkills from './AboutSkills';

export default class About extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div id="about" className="page about">
				<div className={'content'}>
					<div className="header">ABOUT</div>
					<hr className={'divider center'} />
					<AboutMe />
					<AboutSkills />
					<AboutTech />
				</div>
			</div>
		);
	}
}
