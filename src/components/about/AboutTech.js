import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
	LanguageImage,
	LibraryImage,
	DBMImage,
	DesignImage,
	Languages,
	FrameworksAndLibraries,
	DbmsAndServers,
	DesignAndManagements
} from './AboutItems';
import TechStack from '../shared/components/techstack/TechStack';
import './About.scss';

export default class AboutTech extends Component {
	render() {
		return (
			<Grid className="about-tech" container spacing={2} justify="center">
				<Typography className="caption" variant="h4">
					What can I offer?
				</Typography>

				<Grid className="panel" container spacing={2} direction="row">
					<Grid item sm={12} md={7}>
						<Typography className="sub-header" variant="h4">
							Languages
						</Typography>
						{Languages.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item sm={12} md={5} className="image-panel">
						<img className="about-tech-image" src={LanguageImage.link} alt={LanguageImage.link.altTxt} />
					</Grid>
				</Grid>

				<Grid className="panel" container spacing={2} direction="row-reverse">
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
						<img className="about-tech-image" src={LibraryImage.link} alt={LibraryImage.altTxt} />
					</Grid>
				</Grid>

				<Grid className="panel" container spacing={2} direction="row">
					<Grid item sm={12} md={7}>
						<Typography className="sub-header" variant="h4">
							DBM & Servers
						</Typography>
						{DbmsAndServers.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item sm={12} md={5} className="image-panel">
						<img className="about-tech-image" src={DBMImage.link} alt={DBMImage.altTxt} />
					</Grid>
				</Grid>

				<Grid className="panel" container spacing={2} direction="row-reverse">
					<Grid item sm={12} md={6}>
						<Typography className="panel-header" variant="h4">
							Design & Management
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
						<img className="about-tech-image" src={DesignImage.link} alt={DesignImage.path} />
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
