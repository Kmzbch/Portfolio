import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { CloseOutlined, MenuOutlined } from '@material-ui/icons';
import { HashLink } from 'react-router-hash-link';
import NavbarItems from './NavbarItems';
import './Navbar.scss';

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false,
			windowWidth: 0,
			windowHeight: 0
		};
	}

	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}

	updateWindowDimensions = () => {
		this.setState({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		});

		if (this.state.active && this.state.windowWidth >= 1000) {
			this.toggleMenuIcon();
		}
	};

	toggleMenuIcon = () => {
		this.setState({ active: !this.state.active });
	};

	linkClicked = () => {
		if (this.state.active) {
			this.toggleMenuIcon();
		}
	};

	render() {
		const { currentScreen } = this.props;

		return (
			<div className="navbar">
				<div className="nav-container">
					<div className="logo">
						<HashLink className="logo-link" to="#" smooth={true} onClick={this.linkClicked}>
							KEI MIZUBUCHI
						</HashLink>
					</div>

					{this.state.active ? (
						<div className={'menu-icon opened'} onClick={this.toggleMenuIcon}>
							<CloseOutlined fontSize="large" />
						</div>
					) : (
						<div className={'menu-icon'} onClick={this.toggleMenuIcon}>
							<MenuOutlined fontSize="large" />
						</div>
					)}

					<div className={this.state.active ? 'menu opened' : 'menu'}>
						<List className="menu-list">
							{NavbarItems.map((item, index) => {
								return (
									<ListItem
										button
										className={
											currentScreen === item.title.toLowerCase() ? (
												'nav-links active active-menu'
											) : (
												'nav-links'
											)
										}
										key={item.title}
										component={HashLink}
										smooth={true}
										to={'#' + item.url}
										onClick={this.linkClicked}
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
