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
	constructor(props) {
		super(props);
	}

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
					<Grid className="skill-item" item xs={12} sm={6} md={3}>
						<DesktopWindowsOutlined className="specialties" />
						<Typography variant="h6">Full-Stack Development</Typography>
						<Typography className="skill-description">Implement, test and refactor</Typography>
						<Typography className="skill-description">front-end and/or back-end</Typography>
					</Grid>
					<Grid className="skill-item" item xs={12} sm={6} md={3}>
						<CodeOutlined className="specialties" />
						<Typography variant="h6">Scripting</Typography>
						<Typography className="skill-description">
							Build scripts for workflow automation/streamlining
						</Typography>
					</Grid>
					<Grid className="skill-item" item xs={12} sm={6} md={3}>
						<StorageOutlined className="specialties" />
						<Typography variant="h6">Server</Typography>
						<Typography className="skill-description">Experienced and knowledgable</Typography>
						<Typography className="skill-description">with LAMP stack</Typography>
					</Grid>
					<Grid className="skill-item" item xs={12} sm={6} md={3}>
						<BusinessOutlined className="specialties" />
						<Typography variant="h6">On-Site IT Support</Typography>
						<Typography className="skill-description">Communicate with clients to</Typography>
						<Typography className="skill-description">offer assistance</Typography>
						<Typography className="skill-description" />
					</Grid>
				</Grid>
				<Grid
					style={{
						margin: '3vh 0'
					}}
					container
					justify="space-around"
				>
					<Grid className="skill-item" item xs={12} sm={6} md={3}>
						<SearchOutlined className="soft-skills" />
						<Typography variant="h6">Attention to Detail</Typography>
						<Typography className="skill-description">Analyze for a solution</Typography>
						<Typography className="skill-description">from different perspectives</Typography>
					</Grid>
					<Grid className="skill-item" item xs={12} sm={6} md={3}>
						<DirectionsRunOutlined className="soft-skills" />
						<Typography variant="h6">Tenacity</Typography>
						<Typography className="skill-description">Carry things through within</Typography>
						<Typography className="skill-description">a limited timeframe</Typography>
					</Grid>

					<Grid className="skill-item" item xs={12} sm={6} md={3}>
						<PeopleOutlined className="soft-skills" />
						<Typography variant="h6">Collaboration</Typography>
						<Typography className="skill-description">
							Work well collaboratively with a team for the best results
						</Typography>
						<Typography className="skill-description" />
					</Grid>

					<Grid className="skill-item" item xs={12} sm={6} md={3}>
						<TrendingUpOutlined className="soft-skills" />
						<Typography variant="h6">Adaptability</Typography>
						<Typography className="skill-description">Grow the skill set to</Typography>
						<Typography className="skill-description">adapt to the changing needs</Typography>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
