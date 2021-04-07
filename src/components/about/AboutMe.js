import React, { Component } from 'react';
import { Typography, Button, Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { LocationOnOutlined } from '@material-ui/icons';
import { ProfileContent, ProfileImagePath } from './AboutItems';

export default class AboutMe extends Component {
	renderProfileContent = () =>
		ProfileContent.split(/\n+/).map((p, index) => (
			<Typography key={index} style={{ fontSize: '1.1em', margin: '2vh auto' }}>
				{p}
			</Typography>
		));

	render() {
		return (
			<Grid className="about-me" container spacing={3} justify="center">
				<Grid className="description" item sm={12} md={7}>
					<Typography className="profile-header" variant="h4">
						Profile
					</Typography>
					{this.renderProfileContent()}
				</Grid>
				<Grid className="profile" item sm={12} md={5}>
					<img className="profile-image" src={ProfileImagePath} alt="profile" />
					<Typography variant="h4">Kei Mizubuchi</Typography>
					<Typography
						variant="h6"
						style={{
							margin: '1vh 0',
							color: '#555'
						}}
					>
						Software Developer
					</Typography>
					<div className="profile-location">
						<LocationOnOutlined className="location-icon" />
						<Typography component="span">Toronto, Ontario</Typography>
					</div>
					{/* <Link
						href={'#project'}
						style={{
							fontSize: '20px',
							color: '#3f4e67',
							marginTop: '30px',
							textDecoration: 'underline'
						}}
					>
						MY PROJECTS
					</Link> */}

					<Button className="view-button" size="large" variant="outlined" color="primary" href="#project">
						My Projects
					</Button>
				</Grid>
			</Grid>
		);
	}
}
