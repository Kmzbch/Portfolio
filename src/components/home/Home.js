import React, { Component } from 'react';
import './Home.scss';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ArrowForwardOutlined } from '@material-ui/icons';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div id="home" className={'page home'}>
				<div className={'content'}>
					<div
						style={{
							paddingTop: '30vh',
							fontFamily: 'Raleway, Sans Serif'
						}}
					>
						<Typography
							variant="h2"
							style={{
								whiteSpace: 'pre-line',
								display: 'inline'
							}}
						>
							Hi, I'm{' '}
						</Typography>
						<Typography
							variant="h2"
							style={{
								whiteSpace: 'pre-line',
								color: '#fbe77d',
								display: 'inline'
							}}
						>
							Kei Mizubuchi
						</Typography>
						<Typography variant="h3" style={{ opacity: '.6' }}>
							Software Developer
						</Typography>
					</div>

					<Button
						className={'view-button'}
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
