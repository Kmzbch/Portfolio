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
				<Typography variant="h4">My Skills & Qualifications</Typography>

				<Grid
					container
					justify="space-around"
					style={{
						margin: '5vh 0'
					}}
				>
					<Grid className="skill-item">
						<DesktopWindowsOutlined className="specialties" />
						<Typography variant="h6">Full-Stack Development</Typography>
						<Typography className="skill-description" inline>
							Implement, test and refactor
						</Typography>
						<Typography className="skill-description" inline>
							front-end and/or back-end
						</Typography>
					</Grid>
					<Grid className="skill-item">
						<CodeOutlined className="specialties" />
						<Typography variant="h6">Scripting</Typography>
						<Typography className="skill-description" inline>
							Build scripts for workflow automation/streamlining
						</Typography>
					</Grid>
					<Grid className="skill-item">
						<StorageOutlined className="specialties" />
						<Typography variant="h6">Server</Typography>
						<Typography className="skill-description">
							Experienced and knowledgable with LAMP stack
						</Typography>
						<Typography className="skill-description" />
					</Grid>
					<Grid className="skill-item">
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
					<Grid className="skill-item">
						<SearchOutlined className="soft-skills" />
						<Typography variant="h6">Attention to Detail</Typography>
						<Typography className="skill-description" inline>
							Analyze for a solution
						</Typography>
						<Typography className="skill-description" inline>
							from different perspectives
						</Typography>
					</Grid>
					<Grid className="skill-item">
						<DirectionsRunOutlined className="soft-skills" />
						<Typography variant="h6">Tenacity</Typography>
						<Typography className="skill-description" inline>
							Carry things through within
						</Typography>
						<Typography className="skill-description" inline>
							a limited timeframe
						</Typography>
					</Grid>

					<Grid className="skill-item">
						<PeopleOutlined className="soft-skills" />
						<Typography variant="h6">Collaboration</Typography>
						<Typography className="skill-description" inline>
							Work well collaboratively with a team for the best results
						</Typography>
					</Grid>

					<Grid className="skill-item">
						<TrendingUpOutlined className="soft-skills" />
						<Typography variant="h6">Adaptability</Typography>
						<Typography className="skill-description" inline>
							Grow the skill set to
						</Typography>
						<Typography className="skill-description" inline>
							adapt to the changing needs
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
