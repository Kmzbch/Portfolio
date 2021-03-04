import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TechStack from '../shared/TechStack';
import './About.scss';
import { Languages, FrameworksAndLibraries, DbmsAndServers, DesignAndManagements } from './AboutItems';

export default class AboutTech extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Grid className={'about-tech'} container spacing={2} justify="center">
				<Typography className="caption" variant="h4">
					What can I offer?
				</Typography>

				{/*  */}
				<Grid className={'sub-panel'} container spacing={2} direction="row">
					<Grid item xs={7} sm={7}>
						<Typography variant="h4" className="sub-header">
							Languages
						</Typography>
						{Languages.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>

					{/* https://unsplash.com/photos/ytnmGDlf_K0
						https://unsplash.com/photos/NItozEcUPrw
						https://unsplash.com/photos/szrJ3wjzOMg
						 */}
					<Grid item xs={5} sm={5} className="image-panel">
						<img className={'about-tech-image'} src={'./images/about/language2.jpg'} alt={'Notebook'} />
					</Grid>
				</Grid>
				{/* https://unsplash.com/photos/OQSCtabGkSY
					https://unsplash.com/photos/NIJuEQw0RKg
					*/}
				<Grid className={'sub-panel'} container spacing={2} direction="row-reverse">
					<Grid item xs={6} sm={6}>
						<Typography variant="h4" className="sub-header">
							Frameworks & Libraries
						</Typography>
						{FrameworksAndLibraries.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item xs={6} sm={6} className="image-panel">
						<img className={'about-tech-image'} src={'./images/about/libraries.jpg'} alt={'Libraries'} />
					</Grid>
				</Grid>
				{/* https://unsplash.com/photos/0PPKxWtYh0g 
					https://unsplash.com/photos/Q9y3LRuuxmg
					*/}
				<Grid className={'sub-panel'} container spacing={2} direction="row">
					<Grid item xs={7} sm={7}>
						<Typography variant="h4" className="sub-header">
							DBM & Servers
						</Typography>
						{DbmsAndServers.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item xs={5} sm={5} className="image-panel">
						<img className={'about-tech-image'} src={'./images/about/dbm2.jpg'} alt={'Books'} />
					</Grid>
				</Grid>
				{/* https://unsplash.com/photos/nJdwUHmaY8A
					https://unsplash.com/photos/zoCDWPuiRuA
					*/}
				<Grid className={'sub-panel'} container spacing={2} direction="row-reverse">
					<Grid item xs={6} sm={6}>
						<Typography variant="h4" className="sub-header">
							Design & Managements
						</Typography>
						{DesignAndManagements.map((item, index) => {
							return <TechStack key={item.link} src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
					<Grid item xs={6} sm={6} className="image-panel">
						<img className={'about-tech-image'} src={'./images/about/design.jpg'} alt={'Desk'} />
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
