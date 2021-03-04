import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
	BusinessCenterOutlined,
	BusinessOutlined,
	CodeOutlined,
	DesktopWindowsOutlined,
	DirectionsRunOutlined,
	DirectionsWalkOutlined,
	FindInPageOutlined,
	PeopleOutlined,
	SearchOutlined,
	Settings,
	SettingsOutlined,
	StorageOutlined
} from '@material-ui/icons';

export default class AboutSkills extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid className="about-skills" container spacing={3} justify="center" direction="row">
				<Typography variant="h4">SKILLS</Typography>
				<Grid
					container
					justify="space-around"
					style={{
						margin: '3vh 0'
					}}
				>
					<Grid className="skill-item">
						<DesktopWindowsOutlined className="specialties" />
						<Typography variant="h6">Web Development</Typography>
					</Grid>
					<Grid className="skill-item">
						<CodeOutlined className="specialties" />

						<Typography variant="h6">Scripting</Typography>
					</Grid>
					<Grid className="skill-item">
						<BusinessOutlined className="specialties" />
						<Typography variant="h6">On-site Work</Typography>
					</Grid>
					<Grid className="skill-item">
						<StorageOutlined className="specialties" />
						<Typography variant="h6">LAMP</Typography>
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
						<Typography variant="h6">Detail-oriented</Typography>
					</Grid>
					<Grid className="skill-item">
						<DirectionsRunOutlined className="soft-skills" />
						<Typography variant="h6">Tenacity</Typography>
					</Grid>

					<Grid className="skill-item">
						<PeopleOutlined className="soft-skills" />
						<Typography variant="h6">Collaboration</Typography>
					</Grid>

					<Grid className="skill-item">
						<SettingsOutlined className="soft-skills" />
						<Typography variant="h6">Configuration</Typography>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
