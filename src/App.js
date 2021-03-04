import React from 'react';
import './App.css';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import { Component, useState, useEffect } from 'react';

class App extends Component {
	// console.log("Welcome to Kei's portfolio! ");
	// console.log('This portfolio is build with React.');

	// useEffect(() => {
	// 	let isMounted = true; // note this flag denote mount status
	// 	someAsyncOperation().then(data => {
	// 	  if (isMounted) setState(data);
	// 	})
	// 	return () => { isMounted = false }; // use effect cleanup to set flag false, if unmounted
	//   });

	// state = {
	// 	isTop: true
	// };

	state = {
		// isTop: true
		currentScreen: 'home'
	};

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const home = document.querySelector('#home');
			const about = document.querySelector('#about');
			const project = document.querySelector('#project');
			const resume = document.querySelector('#resume');
			const contact = document.querySelector('#contact');

			const homePos = ReactDOM.findDOMNode(home).getBoundingClientRect();
			const aboutPos = ReactDOM.findDOMNode(about).getBoundingClientRect();
			const projectPos = ReactDOM.findDOMNode(project).getBoundingClientRect();
			const resumePos = ReactDOM.findDOMNode(resume).getBoundingClientRect();
			const contactPos = ReactDOM.findDOMNode(contact).getBoundingClientRect();

			if (homePos.y < 0 && aboutPos.y - 100 >= 0) {
				if (this.state.currentScreen !== 'home') {
					this.setState({ currentScreen: 'home' });
				}
			} else if (aboutPos.y - 100 < 0 && projectPos.y - 100 >= 0) {
				if (this.state.currentScreen !== 'about') {
					this.setState({ currentScreen: 'about' });
				}
			} else if (projectPos.y - 100 < 0 && resumePos.y - 100 >= 0) {
				if (this.state.currentScreen !== 'projects') {
					this.setState({ currentScreen: 'projects' });
				}
			} else if (resumePos.y - 100 < 0 && contactPos.y - 100 >= 0) {
				console.log('RESUME!!');
				if (this.state.currentScreen !== 'resume') {
					this.setState({ currentScreen: 'resume' });
				}
			} else if (contactPos.y - 100 <= 0) {
				console.log('CONTACT!!');
				if (this.state.currentScreen !== 'contact') {
					this.setState({ currentScreen: 'contact' });
				}
			}
		});
	}

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Navbar currentScreen={this.state} />
				<Home />
				<About />
				<Projects />
				<Resume />
				<Contact />
			</Router>
		);
	}
}

export default App;
