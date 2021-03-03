import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { List, ListItem, ListItemIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2)
	}
}));

export default function TechStack(props) {
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div className={'tech-stack-wrapper'}>
			<div onMouseEnter={handleClick}>
				<img className={'tech-stack-image'} src={props.src} title={props.title} alt={'Logo of ' + props.alt} />
				<div className="middle-wrapper translate middle">
					<span>{props.alt}</span>
				</div>
			</div>
			{/* <Popover
				style={{
					minHeight: '10px'
				}}
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
			>
				<Typography className={classes.typography}>{props.title}</Typography>
			</Popover> */}
		</div>
	);
}
