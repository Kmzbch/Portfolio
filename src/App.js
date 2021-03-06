import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		currentScreen: 'home'
	};

	componentDidMount() {
		console.log("Welcome to Kei's portfolio!");
		console.log('This portfolio is build with React.');

		// set document title
		document.title = "Kei's Portfolio";

		// add onScroll event for Navbar active menu
		document.addEventListener('scroll', () => {
			const margin = 50;

			const home = document.querySelector('#home');
			const about = document.querySelector('#about');
			const project = document.querySelector('#project');
			const timeline = document.querySelector('#timeline');
			const contact = document.querySelector('#contact');

			const homePos = ReactDOM.findDOMNode(home).getBoundingClientRect();
			const aboutPos = ReactDOM.findDOMNode(about).getBoundingClientRect();
			const projectPos = ReactDOM.findDOMNode(project).getBoundingClientRect();
			const timelinePos = ReactDOM.findDOMNode(timeline).getBoundingClientRect();
			const contactPos = ReactDOM.findDOMNode(contact).getBoundingClientRect();

			if (homePos.y < 0 && aboutPos.y - margin >= 0) {
				if (this.state.currentScreen !== 'home') {
					this.setState({ currentScreen: 'home' });
					document.title = "Home - Kei's Portfolio";
				}
			} else if (aboutPos.y - margin < 0 && projectPos.y - margin >= 0) {
				if (this.state.currentScreen !== 'about') {
					this.setState({ currentScreen: 'about' });
					document.title = "About - Kei's Portfolio";
				}
			} else if (projectPos.y - margin < 0 && timelinePos.y - margin >= 0) {
				if (this.state.currentScreen !== 'projects') {
					this.setState({ currentScreen: 'projects' });
					document.title = "Projects - Kei's Portfolio";
				}
			} else if (timelinePos.y - margin < 0 && contactPos.y - margin >= 0) {
				if (this.state.currentScreen !== 'timeline') {
					this.setState({ currentScreen: 'timeline' });
					document.title = "Timeline - Kei's Portfolio";
				}
			} else if (contactPos.y - margin <= 0) {
				if (this.state.currentScreen !== 'contact') {
					this.setState({ currentScreen: 'contact' });
					document.title = "Contact - Kei's Portfolio";
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
				<Timeline />
				<Contact />
				<Footer />
			</Router>
		);
	}
}

export default App;
