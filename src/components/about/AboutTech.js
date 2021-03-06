import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Languages, FrameworksAndLibraries, DbmsAndServers, DesignAndManagements } from './AboutItems';
import TechStack from '../shared/techstack/TechStack';
import './About.scss';

export default class AboutTech extends Component {
	// Image retrieved from https://unsplash.com/photos/szrJ3wjzOMg
	language = './images/about/language.jpg';

	// Image retrieved from https://unsplash.com/photos/2JIvboGLeho
	library = './images/about/library.jpg';

	// Image retrieved from https://unsplash.com/photos/0PPKxWtYh0g
	dbm = './images/about/dbm.jpg';

	// Image retrieved from https://unsplash.com/photos/zoCDWPuiRuA
	design = './images/about/design.jpg';

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
					<Grid item sm={12} md={7}>
						<Typography className="sub-header" variant="h4">
							Languages
						</Typography>
						{Languages.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item sm={12} md={5} className="image-panel">
						<img className="about-tech-image" src={this.language} alt={'Keyboard'} />
					</Grid>
				</Grid>

				<Grid className="sub-panel" container spacing={2} direction="row-reverse">
					<Grid item sm={12} md={6}>
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
					<Grid item sm={12} md={6} className="image-panel">
						<img className="about-tech-image" src={this.library} alt={'Books'} />
					</Grid>
				</Grid>

				<Grid className="sub-panel" container spacing={2} direction="row">
					<Grid item sm={12} md={7}>
						<Typography className="sub-header" variant="h4">
							DBM & Servers
						</Typography>
						{DbmsAndServers.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item sm={12} md={5} className="image-panel">
						<img className="about-tech-image" src={this.dbm} alt={'Books'} />
					</Grid>
				</Grid>

				<Grid className="sub-panel" container spacing={2} direction="row-reverse">
					<Grid item sm={12} md={6}>
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
					<Grid item sm={12} md={6} className="image-panel">
						<img className="about-tech-image" src={this.design} alt={'Desk'} />
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
