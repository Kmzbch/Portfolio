import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
	BusinessOutlined,
	CodeOutlined,
	DesktopWindowsOutlined,
	DirectionsRunOutlined,
	PeopleOutlined,
	SearchOutlined,
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
				<Typography variant="h4">Skills & Qualifications</Typography>

				<Grid
					container
					justify="space-around"
					style={{
						margin: '5vh 0'
					}}
				>
					<Grid className="skill-item">
						<DesktopWindowsOutlined className="specialties" />
						<Typography variant="h6">Web Development</Typography>
						<Typography className="skill-description">test test test test test test </Typography>
					</Grid>
					<Grid className="skill-item">
						<CodeOutlined className="specialties" />
						<Typography variant="h6">Scripting</Typography>
						<Typography className="skill-description">test test test test test test </Typography>
					</Grid>
					<Grid className="skill-item">
						<BusinessOutlined className="specialties" />
						<Typography variant="h6">On-site Work</Typography>
						<Typography className="skill-description">test test test test test test </Typography>
					</Grid>
					<Grid className="skill-item">
						<StorageOutlined className="specialties" />
						<Typography variant="h6">LAMP</Typography>
						<Typography className="skill-description">test test test test test test </Typography>
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
						<Typography className="skill-description">test test test test test test </Typography>
					</Grid>
					<Grid className="skill-item">
						<DirectionsRunOutlined className="soft-skills" />
						<Typography variant="h6">Tenacity</Typography>
						<Typography className="skill-description">test test test test test test </Typography>
					</Grid>

					<Grid className="skill-item">
						<PeopleOutlined className="soft-skills" />
						<Typography variant="h6">Collaboration</Typography>
						<Typography className="skill-description">test test test test test test </Typography>
					</Grid>

					<Grid className="skill-item">
						<SettingsOutlined className="soft-skills" />
						<Typography variant="h6">Configuration</Typography>
						<Typography className="skill-description">test test test test test test </Typography>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
