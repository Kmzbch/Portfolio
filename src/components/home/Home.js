import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';
import { ArrowForwardOutlined } from '@material-ui/icons';
import './Home.scss';

export default class Home extends Component {
	render() {
		return (
			<div id="home" className="page home">
				<div className="content">
					<div className="greeting">
						<Typography variant="h2" component="span">
							Hi,{' '}
						</Typography>
						<Typography variant="h2" component="span">
							I'm{' '}
						</Typography>
						<Typography variant="h2" className="highlight" component="span" noWrap>
							Kei Mizubuchi
						</Typography>
						<Typography variant="h3" className="jobtitle" noWrap>
							Software Developer
						</Typography>
					</div>

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
