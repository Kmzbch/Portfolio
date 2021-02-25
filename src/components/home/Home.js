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
						<hr className={'divider center'} />
					</div>
				</section>
				aaaa
			</div>
		);
	}
}
