import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { LocationCity, LocationOn, LocationOnOutlined, MapOutlined, School, SchoolOutlined } from '@material-ui/icons';

export default class AboutMe extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid className="about-me" container spacing={3} justify="center">
				<Grid item xs={7} sm={7}>
					<Typography className="profile-header" variant="h4">
						Profile
					</Typography>
					<Typography style={{ fontSize: '1.1em', margin: '2vh auto' }}>
						I am a software engineer who completed a Software Engineering Technology Advanced Diploma
						program at Centennial College. I am currently seeking a software engineering/full-stack
						developer position where reliability is valued.
					</Typography>
					<Typography style={{ fontSize: '1.1em', margin: '2vh auto' }}>
						Previously, I worked at a university library in Japan as an On-site IT Support Programmer, where
						I performed maintenance, troubleshooting, system update and software installation &
						configuration of LAMP stack servers. I also worked in scripting to closely help the internal
						team and library staff such as large scale bibliographic record conversion.
					</Typography>
					<Typography style={{ fontSize: '1.1em', margin: '2vh auto' }}>
						In Canada, I have gained experience through multiple projects of enterprise web application
						using various technologies, including but not limited to ASP.NET, Angular, SQL Server stack. My
						current focus are microservices and RESTful APIs but I am open to work both the front-end and
						back-end.
					</Typography>
				</Grid>
				<Grid className="profile" xs={5} sm={5}>
					<img className="profile-image" src="./images/about/profile2.png" alt="profile" />
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
						<LocationOnOutlined className="profile-location-icon" />
						<Typography component="span">Toronto, Ontario</Typography>
					</div>
				</Grid>
			</Grid>
		);
	}
}
