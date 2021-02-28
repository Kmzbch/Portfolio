import React from 'react';
import './App.css';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Drawer from './components/drawer/Drawer';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import NotFound from './components/404/NotFound';
import Navbar from './components/navbar/Navbar';

function App() {
	console.log("Welcome to Kei's portfolio! ");
	console.log('This portfolio is build with React.');

	//
	return (
		<Router basename={process.env.PUBLIC_URL}>
			{/* <Drawer /> */}
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Resume />

			{/* <div style={{ backgroundColor: '#CCC', width: '100%', height: '100px' }} />
			<div style={{ backgroundColor: '#DDD', width: '100%', height: '100px' }} /> */}

			<Contact />
			{/* <Route
				render={({ location }) => (
					<Switch location={location}>
						<Route exact path={'/'} component={Home} />
						<Route exact path={'/about'} component={About} />
						<Route exact path={'/projects'} component={Projects} />
						<Route exact path={'/resume'} component={Resume} />
						<Route exact path={'/contact'} component={Contact} />
						<Route exact path="*" component={NotFound} />
					</Switch>
				)}
			/> */}
		</Router>
	);
}

export default App;
