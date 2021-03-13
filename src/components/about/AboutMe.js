import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { LocationOnOutlined } from '@material-ui/icons';

export default class AboutMe extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid className="about-me" container spacing={3} justify="center">
				<Grid className="description" item sm={12} md={7}>
					<Typography className="profile-header" variant="h4">
						Profile
					</Typography>
					<Typography style={{ fontSize: '1.1em', margin: '2vh auto' }}>
						I am a software developer who completed a Software Engineering Diploma program at Centennial
						College. I am currently seeking a software engineering position where reliability is valued.
					</Typography>
					<Typography style={{ fontSize: '1.1em', margin: '2vh auto' }}>
						I have five-year work experience in a university library as an On-Site IT Support Programmer, in
						which I performed maintenance, troubleshooting, system update of library management system on
						LAMP servers. Closely collaborating with the library staff and the team, I streamlined their
						business processes by scripting such as bibliographic record conversion.
					</Typography>
					<Typography style={{ fontSize: '1.1em', margin: '2vh auto' }}>
						In my most recent positions in Canda, I have accumulated further experience in web development
						with various modern technologies, including but not limited to ASP.NET Core, Angular, SQL Server
						stacks. My current focus is RESTful APIs but I am willing to work on both front-end and
						back-end.
					</Typography>
				</Grid>
				<Grid className="profile" item sm={12} md={5}>
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
