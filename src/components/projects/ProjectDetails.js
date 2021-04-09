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

	parseTextIntoHTML = (text, index) => {
		if (text.match(/^https?:\/\//)) {
			return (
				<Link href={text} target="_blank">
					{text}
				</Link>
			);
		} else if (text.match(/^- /)) {
			return (
				<ul>
					<li key={index}>{text.replace(/^- /, '')}</li>
				</ul>
			);
		} else {
			return <Typography component="span">{text}</Typography>;
		}
	};

	render() {
		const paragraphs = this.props.src.split(/\n{2}/);

		return (
			<div>
				{paragraphs.map((item, index) => {
					return (
						<div key={index} className="project-detail" hidden={!this.state.detailsOpen}>
							{item.split(/\n/).map((subitem, i) => {
								return <div key={i}>{this.parseTextIntoHTML(subitem, i)}</div>;
							})}
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
