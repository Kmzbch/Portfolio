import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TechStack from '../shared/TechStack';
import './About.scss';
import { Languages, FrameworksAndLibraries, DbmsAndServers, DesignAndManagements } from './AboutItems';

export default function AboutTech(props) {
	return (
		<div>
			<Typography className="caption" variant="h4">
				What can I offer?
			</Typography>
			<Grid
				container
				spacing={2}
				justify="center"
				style={{
					width: '70%',
					padding: '5vh 5vw',
					margin: '3vh auto'
				}}
			>
				{/*  */}
				<Grid container direction="row">
					<Grid item xs={5} sm={5}>
						<img
							className={'about-tech-image l'}
							src={'./images/about/roma-exterior.jpg'}
							alt={'Engine room of Ferrari Roma'}
						/>
					</Grid>
					<Grid item xs={7} sm={7}>
						<Typography variant="h4">Languages</Typography>
						{Languages.map((item, index) => {
							return <TechStack src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
				</Grid>
				{/*  */}
				<Grid container direction="row-reverse">
					<Grid item xs={5} sm={5}>
						<img
							className={'about-tech-image l'}
							src={'./images/about/roma-exterior.jpg'}
							alt={'Engine room of Ferrari Roma'}
						/>
					</Grid>
					<Grid item xs={7} sm={7}>
						<Typography variant="h4">Frameworks & Libraries</Typography>
						{FrameworksAndLibraries.map((item, index) => {
							return <TechStack src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
				</Grid>
				{/*  */}
				<Grid container direction="row">
					<Grid item xs={5} sm={5}>
						<img
							className={'about-tech-image l'}
							src={'./images/about/roma-exterior.jpg'}
							alt={'Engine room of Ferrari Roma'}
						/>
					</Grid>
					<Grid item xs={7} sm={7}>
						<Typography variant="h4">DBM & Servers</Typography>
						{DbmsAndServers.map((item, index) => {
							return <TechStack src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
				</Grid>
				{/*  */}
				<Grid container direction="row-reverse">
					<Grid item xs={5} sm={5}>
						<img
							className={'about-tech-image l'}
							src={'./images/about/roma-exterior.jpg'}
							alt={'Engine room of Ferrari Roma'}
						/>
					</Grid>
					<Grid item xs={7} sm={7}>
						<Typography variant="h4">Design & Managements</Typography>
						{DesignAndManagements.map((item, index) => {
							return <TechStack src={item.link} title={item.altTxt} alt={item.altTxt} />;
						})}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
