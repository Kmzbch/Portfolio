import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

export default function AboutSkills(props) {
	return (
		<div>
			<Typography className="caption" variant="h4">
				SKILLS
			</Typography>
			<Grid
				container
				spacing={3}
				justify="center"
				style={{
					width: '70%',
					padding: '5vh 5vw',
					margin: '3vh auto'
				}}
			>
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
