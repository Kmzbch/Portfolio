import React from 'react';
import './App.css';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';

function App() {
	console.log("Welcome to Kei's portfolio! ");
	console.log('This portfolio is build with React.');

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navbar />
			<Home />
			<About />
			<Projects />
			<Resume />
			<Contact />
		</Router>
	);
}

export default App;
