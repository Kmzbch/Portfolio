import './Projects.scss';
import React, { Component } from 'react';
import { Typography, Link } from '@material-ui/core';
import { ExpandMoreOutlined, ExpandLessOutlined } from '@material-ui/icons';

export default class ProjectDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detailsOpen: false
		};
	}

	toggleProjectDetails = () => {
		this.setState({ detailsOpen: !this.state.detailsOpen });
	};

	render() {
		const paragraphs = this.props.src.split(/\n+/);

		return (
			<div>
				{paragraphs.map((item, index) => {
					return (
						<div className="project-detail" hidden={!this.state.detailsOpen}>
							{item.match(/^https?:\/\//) ? (
								<Link href={item} target="_blank">
									{item}
								</Link>
							) : (
								<Typography component="span">{item}</Typography>
							)}
						</div>
					);
				})}

				{this.state.detailsOpen ? (
					<div className="readmore" onClick={this.toggleProjectDetails}>
						READ LESS
						<ExpandLessOutlined className="endicon" />
					</div>
				) : (
					<div className="readmore" onClick={this.toggleProjectDetails}>
						READ MORE
						<ExpandMoreOutlined className="endicon" />
					</div>
				)}
			</div>
		);
	}
}
