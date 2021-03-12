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
						College. I am currently seeking a software engineering/full-stack developer position where
						reliability is valued.
					</Typography>
					<Typography style={{ fontSize: '1.1em', margin: '2vh auto' }}>
						I have over five years of work experience in a university library as an On-Site IT Support
						Programmer, in which I performed maintenance, troubleshooting, system backup and upgrade of
						integrated library management system on LAMP servers. I closely communicated with the internal
						team and library staff and helped them out with streamlining their business processes by
						scripting in Shell script / Perl such as large-scale bibliographic record conversion.
					</Typography>
					<Typography style={{ fontSize: '1.1em', margin: '2vh auto' }}>
						In most recent positions in Canda, I have accumulated further experience in web application
						development with various modern technologies, including but not limited to ASP.NET Core,
						Angular, SQL Server stacks. My current focus are microservices and RESTful APIs but I am open to
						work both the front-end and back-end.
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
