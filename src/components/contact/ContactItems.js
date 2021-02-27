import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ContactItems = [
	{
		link: 'cdfray@gmail.com',
		icon: (() => {
			return (
				<MailOutlineIcon
					style={{
						fontSize: 45
						// color: '#696969'
					}}
				/>
			);
		})()
	},
	{
		link: 'https://www.linkedin.com/in/kmizubuchi/',
		icon: (() => {
			return (
				<LinkedInIcon
					style={{
						fontSize: 45
						// color: '#696969'
					}}
				/>
			);
		})()
	},
	{
		link: 'https://github.com/Kmzbch',
		icon: (() => {
			return (
				<GitHubIcon
					style={{
						fontSize: 45
						// color: '#696969'
					}}
				/>
			);
		})()
	},
	{
		link: 'Toronto, Ontario',
		icon: (() => {
			return (
				<LocationOnOutlinedIcon
					style={{
						fontSize: 45
						// color: '#696969'
					}}
				/>
			);
		})()
	}
];

export default ContactItems;
