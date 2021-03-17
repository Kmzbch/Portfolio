import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { CloseOutlined, MenuOutlined } from '@material-ui/icons';
import { HashLink } from 'react-router-hash-link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentPage } from '../../redux/actions';
import NavbarItems from './NavbarItems';
import './Navbar.scss';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuOpened: false,
			windowWidth: 0
		};
	}

	componentDidMount() {
		this.props.fetchCurrentPage();

		this.updateWindowWidth();
		window.addEventListener('resize', this.updateWindowWidth);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowWidth);
	}

	updateWindowWidth = () => {
		this.setState({
			windowWidth: window.innerWidth
		});

		if (this.state.menuOpened && this.state.windowWidth >= 960) {
			this.toggleMenuIcon();
		}
	};

	toggleMenuIcon = () => {
		this.setState({ menuOpened: !this.state.menuOpened });
	};

	linkClicked = () => {
		if (this.state.menuOpened) {
			this.toggleMenuIcon();
		}
	};

	render() {
		return (
			<div className="navbar">
				<div className="nav-container">
					<div className="logo">
						<HashLink className="logo-link" to="#" smooth={true} onClick={this.linkClicked}>
							KEI MIZUBUCHI
						</HashLink>
					</div>

					{this.state.menuOpened ? (
						<div className={'menu-icon opened'} onClick={this.toggleMenuIcon}>
							<CloseOutlined fontSize="large" />
						</div>
					) : (
						<div className={'menu-icon'} onClick={this.toggleMenuIcon}>
							<MenuOutlined fontSize="large" />
						</div>
					)}

					<div className={this.state.menuOpened ? 'menu opened' : 'menu'}>
						<List className="menu-list">
							{NavbarItems.map((item, index) => {
								return (
									<ListItem
										button
										className={
											this.props.storage.currentPage === item.title.toLowerCase() ? (
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

Navbar.propTypes = {
	fetchCurrentPage: PropTypes.func.isRequired,
	storage: PropTypes.object
};

const mapStateToProps = (state) => ({
	storage: state.storage
});

export default connect(mapStateToProps, { fetchCurrentPage })(Navbar);
