import React, { Component } from 'react';
import './TechStack.scss';

export default class TechStack extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="tech-stack-wrapper">
				<div>
					<img
						className="tech-stack-image"
						src={this.props.src}
						title={this.props.title}
						alt={'Logo of ' + this.props.alt}
					/>
					<div className="middle-wrapper">
						<div className="tech-stack-description">{this.props.alt}</div>
					</div>
				</div>
			</div>
		);
	}
}
