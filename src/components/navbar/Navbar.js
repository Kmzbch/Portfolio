import React, { Component } from 'react';
import './Navbar.scss';
import { NavLink } from 'react-router-dom';

import { Typography, Link, List, ListItem, ListItemText } from '@material-ui/core';

import NavbarItems from './NavbarItems';

export default class extends Component {
	render() {
		return (
			<div className={'navbar'}>
				{/* loading animation */}

				{/* container */}
				<div className={'nav-container'}>
					{/* logo */}
					<div className={'logo'}>
						<Typography className={'logo-link'} variant="h4" component={Link} to={'/'}>
							KEI MIZUBUCHI
						</Typography>
					</div>
					{/* foldable icon */}
					<div className={'menu'}>
						<List className={'menu-list'}>
							{NavbarItems.map((item, index) => {
								return (
									<ListItem button key={item.title} component={Link} to={item.url}>
										<ListItemText primary={item.title} />
									</ListItem>
								);
							})}
						</List>
					</div>

					{/* menu */}
				</div>
			</div>
		);
	}
}
