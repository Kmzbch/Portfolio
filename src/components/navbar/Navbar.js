import React, { Component } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

import { Typography, Link, List, ListItem, ListItemText } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';

import NavbarItems from './NavbarItems';

export default class extends Component {
	render() {
		return (
			<div className={'navbar'}>
				<div className={'nav-container'}>
					<div className={'logo'}>
						<Typography className={'logo-link'} variant="h4" component={HashLink} smooth to="#home">
							KEI MIZUBUCHI
						</Typography>
					</div>
					<div className={'menu'}>
						<List className={'menu-list'}>
							{NavbarItems.map((item, index) => {
								return (
									<ListItem
										button
										className={'nav-links'}
										key={item.title}
										component={HashLink}
										to={item.url}
									>
										<ListItemText primary={item.title} />
									</ListItem>
								);
							})}
						</List>
					</div>
				</div>
			</div>
		);
	}
}
