import PersonIcon from '@material-ui/icons/Person'
import WorkIcon from '@material-ui/icons/Work'
import DescriptionIcon from '@material-ui/icons/Description'
import MailIcon from '@material-ui/icons/Mail'

const DrawerItems = [
    {
        title: 'About',
        url: '/about',
        className: 'drawer-links',
        icon: (()=>{return <PersonIcon/>})()
    },
    {
        title: 'Projects',
        url: '/projects',
        className: 'drawer-links',
        icon: (()=>{return <WorkIcon/>})()
    },
    {
        title: 'Resume',
        url: '/resume',
        className: 'drawer-links',
        icon: (()=>{return <DescriptionIcon/>})()
    },
    {
        title: 'Contact',
        url: '/contact',
        className: 'drawer-links',
        icon: (()=>{return <MailIcon/>})()
    },
]

export default DrawerItems