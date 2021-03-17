import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
	BusinessOutlined,
	CodeOutlined,
	DesktopWindowsOutlined,
	DirectionsRunOutlined,
	PeopleOutlined,
	SearchOutlined,
	StorageOutlined,
	TrendingUpOutlined
} from '@material-ui/icons';

export default class AboutSkills extends Component {
	render() {
		return (
			<Grid className="about-skills" container spacing={3} justify="center" direction="row">
				<Typography variant="h4" className="center">
					My Skills & Qualifications
				</Typography>

				<Grid
					container
					justify="space-around"
					style={{
						margin: '5vh 0'
					}}
				>
					<Grid className="skill-item specialties" item xs={12} sm={6} md={3}>
						<DesktopWindowsOutlined className="specialty-icon" />
						<Typography variant="h6">Full-Stack Development</Typography>
						<Typography className="skill-description">Design, code, and test</Typography>
						<Typography className="skill-description">in front-end and/or back-end</Typography>
					</Grid>
					<Grid className="skill-item specialties" item xs={12} sm={6} md={3}>
						<CodeOutlined className="specialty-icon" />
						<Typography variant="h6">Scripting</Typography>
						<Typography className="skill-description">
							Build scripts for workflow automation/streamlining
						</Typography>
					</Grid>
					<Grid className="skill-item specialties" item xs={12} sm={6} md={3}>
						<BusinessOutlined className="specialty-icon" />
						<Typography variant="h6">On-Site IT Support</Typography>
						<Typography className="skill-description">Provide issue resolution</Typography>
						<Typography className="skill-description">in a client-centered approach</Typography>
					</Grid>
					<Grid className="skill-item specialties" item xs={12} sm={6} md={3}>
						<StorageOutlined className="specialty-icon" />
						<Typography variant="h6">Linux Server</Typography>
						<Typography className="skill-description">Experienced in working with LAMP servers</Typography>
					</Grid>
				</Grid>
				<Grid
					style={{
						margin: '3vh 0'
					}}
					container
					justify="space-around"
				>
					<Grid className="skill-item soft-skills" item xs={12} sm={6} md={3}>
						<SearchOutlined className="soft-skill-icon" />
						<Typography variant="h6">Attention to Detail</Typography>
						<Typography className="skill-description">Analyze for solutions</Typography>
						<Typography className="skill-description">and further improvement</Typography>
					</Grid>
					<Grid className="skill-item soft-skills" item xs={12} sm={6} md={3}>
						<DirectionsRunOutlined className="soft-skill-icon" />
						<Typography variant="h6">Tenacity</Typography>
						<Typography className="skill-description">Carry things through within</Typography>
						<Typography className="skill-description">a limited timeframe</Typography>
					</Grid>

					<Grid className="skill-item soft-skills" item xs={12} sm={6} md={3}>
						<PeopleOutlined className="soft-skill-icon" />
						<Typography variant="h6">Collaboration</Typography>
						<Typography className="skill-description">Enjoy collaboration as well</Typography>
						<Typography className="skill-description">as working independently</Typography>
					</Grid>

					<Grid className="skill-item soft-skills" item xs={12} sm={6} md={3}>
						<TrendingUpOutlined className="soft-skill-icon" />
						<Typography variant="h6">Adaptability</Typography>
						<Typography className="skill-description">Grow skill sets to</Typography>
						<Typography className="skill-description">adapt to changing needs</Typography>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
