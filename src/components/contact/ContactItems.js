import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ContactItems = [
	{
		link: 'mailto:cdfray@gmail.com',
		icon: (() => {
			return <MailOutlineIcon className="contact-icon" />;
		})()
	},
	{
		link: 'https://www.linkedin.com/in/kmzbch',
		icon: (() => {
			return <LinkedInIcon className="contact-icon" />;
		})()
	},
	{
		link: 'https://github.com/Kmzbch',
		icon: (() => {
			return <GitHubIcon className="contact-icon" />;
		})()
	},
	{
		link: 'Toronto, Ontario',
		icon: (() => {
			return <LocationOnOutlinedIcon className="contact-icon" />;
		})()
	}
];

export default ContactItems;
