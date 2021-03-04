import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ArrowForwardOutlined } from '@material-ui/icons';
import './Home.scss';

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="home" className={'page home'}>
				<div className={'content'}>
					<Typography variant="h2" component="span">
						Hi, I'm{' '}
					</Typography>
					<Typography variant="h2" component="span" className="highlight">
						Kei Mizubuchi
					</Typography>
					<Typography variant="h3" style={{ opacity: '.6' }}>
						Software Developer
					</Typography>

					<Button
						className="view-button"
						size="large"
						variant="outlined"
						href="#about"
						endIcon={<ArrowForwardOutlined className="endicon" />}
					>
						Explore my work
					</Button>
				</div>
			</div>
		);
	}
}
