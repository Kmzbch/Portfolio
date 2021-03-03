import React, { Component } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default class AboutSkills extends Component {
	constructor(props) {
		super(props);
		this.state = { showComponent: true };
	}
	render() {
		return (
			<div>
				<Typography className="caption" variant="h4">
					SKILLS
				</Typography>
				<Grid className={'about-skills'} container spacing={3} justify="center">
					<ListItem>
						<ListItemIcon
							style={{
								margin: 'auto'
							}}
						>
							<GitHubIcon
								style={{
									fontSize: '80px',
									color: '#40bdae'
								}}
							/>
						</ListItemIcon>
						<ListItemIcon
							style={{
								margin: 'auto'
							}}
						>
							<GitHubIcon
								style={{
									fontSize: '80px',
									color: '#40bdae'
								}}
							/>
						</ListItemIcon>
						<ListItemIcon
							style={{
								margin: 'auto'
							}}
						>
							<GitHubIcon
								style={{
									fontSize: '80px',
									color: '#40bdae'
								}}
							/>
						</ListItemIcon>

						<ListItemIcon
							style={{
								margin: 'auto'
							}}
						>
							<GitHubIcon
								style={{
									fontSize: '80px',
									color: '#40bdae'
								}}
							/>
						</ListItemIcon>
					</ListItem>
				</Grid>
			</div>
		);
	}
}
