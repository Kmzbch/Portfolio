import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Languages, FrameworksAndLibraries, DbmsAndServers, DesignAndManagements } from './AboutItems';
import TechStack from '../shared/techstack/TechStack';
import './About.scss';

export default class AboutTech extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid className="about-tech" container spacing={2} justify="center">
				<Typography className="caption" variant="h4">
					What can I offer?
				</Typography>

				<Grid className="sub-panel" container spacing={2} direction="row">
					<Grid item xs={7} sm={7}>
						<Typography className="sub-header" variant="h4">
							Languages
						</Typography>
						{Languages.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item xs={5} sm={5} className="image-panel">
						<img className="about-tech-image" src={'./images/about/languages.jpg'} alt={'Keyboard'} />
					</Grid>
				</Grid>

				<Grid className="sub-panel" container spacing={2} direction="row-reverse">
					<Grid item xs={6} sm={6}>
						<Typography className="sub-header" variant="h4">
							Frameworks & Libraries
						</Typography>
						<div className="tech-panel">
							{FrameworksAndLibraries.map((item, index) => {
								return (
									<TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />
								);
							})}
						</div>
					</Grid>
					<Grid item xs={6} sm={6} className="image-panel">
						<img className="about-tech-image" src={'./images/about/libraries.jpg'} alt={'Books'} />
					</Grid>
				</Grid>

				<Grid className="sub-panel" container spacing={2} direction="row">
					<Grid item xs={7} sm={7}>
						<Typography className="sub-header" variant="h4">
							DBM & Servers
						</Typography>
						{DbmsAndServers.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item xs={5} sm={5} className="image-panel">
						<img className="about-tech-image" src={'./images/about/dbm.jpg'} alt={'Books'} />
					</Grid>
				</Grid>

				<Grid className="sub-panel" container spacing={2} direction="row-reverse">
					<Grid item xs={6} sm={6}>
						<Typography className="sub-header" variant="h4">
							Design & Managements
						</Typography>
						<div className="tech-panel">
							{DesignAndManagements.map((item, index) => {
								return (
									<TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />
								);
							})}
						</div>
					</Grid>
					<Grid className="image-panel" item xs={6} sm={6}>
						<img className="about-tech-image" src={'./images/about/design.jpg'} alt={'Desk'} />
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
