import React, { Component } from 'react';
import './Home.scss';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div id="home" className={'page home'}>
				<div className={'content'}>
					<Typography
						variant="h2"
						style={{
							paddingTop: '30vh',
							fontFamily: 'Raleway, Sans Serif'
						}}
					>
						Hello. I'm Kei Mizubuchi. {'\n'}
						I'm a full-stack developer.
					</Typography>

					<Button className={'view-button'} size="large" variant="outlined" href="#about">
						Explore my work
					</Button>
				</div>
			</div>
		);
	}
}
