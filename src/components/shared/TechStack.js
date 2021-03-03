import { Paper } from '@material-ui/core';
import React from 'react';

export default function TechStack(props) {
	return (
		<div className={'tech-stack-wrapper'}>
			<Paper>
				<img className={'tech-stack-image'} src={props.src} title={props.title} alt={'Logo of ' + props.alt} />
				<div
					className="middle-wrapper translate middle"
					style={{
						borderTop: '1px solid #DDD',
						borderRadius: '0'
					}}
				>
					<div className={'tech-stack-description'}>{props.alt}</div>
				</div>
			</Paper>
		</div>
	);
}
