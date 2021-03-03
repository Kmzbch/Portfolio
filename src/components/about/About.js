import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

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

					<Typography className="caption" variant="h5">
						Have a question or want to work together?
					</Typography>

					<AboutMe />
					<AboutSkills />
					<AboutTech />
				</div>
			</div>
		);
	}
}
