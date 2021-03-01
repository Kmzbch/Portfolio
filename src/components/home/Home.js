import React, { Component } from 'react';
import './Home.scss';
import { Typography } from '@material-ui/core';
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}

	render() {
		return (
			<div className={'page'}>
				<section id="" className="home" data-section="">
					<div className={'view main content'}>
						<Typography
							variant="h2"
							style={{
								paddingTop: '30vh',
								fontFamily: 'Raleway, Sans Serif'
							}}
						>
							Hello. I'm KEI MIZUBUCHI. {'\n'}
							I'm a full-stack developer.
						</Typography>
					</div>
				</section>
			</div>
		);
	}
}
