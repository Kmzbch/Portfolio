import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';
import Navbar from './components/navbar/Navbar';
import { Component } from 'react';
import './App.css';

class App extends Component {
	state = {
		currentScreen: 'home'
	};

	componentDidMount() {
		document.addEventListener('scroll', () => {
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

			if (homePos.y < 0 && aboutPos.y - 100 >= 0) {
				if (this.state.currentScreen !== 'home') {
					this.setState({ currentScreen: 'home' });
				}
			} else if (aboutPos.y - 100 < 0 && projectPos.y - 100 >= 0) {
				if (this.state.currentScreen !== 'about') {
					this.setState({ currentScreen: 'about' });
				}
			} else if (projectPos.y - 100 < 0 && timelinePos.y - 100 >= 0) {
				if (this.state.currentScreen !== 'projects') {
					this.setState({ currentScreen: 'projects' });
				}
			} else if (timelinePos.y - 100 < 0 && contactPos.y - 100 >= 0) {
				if (this.state.currentScreen !== 'timeline') {
					this.setState({ currentScreen: 'timeline' });
				}
			} else if (contactPos.y - 100 <= 0) {
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
				<Timeline />
				<Contact />
			</Router>
		);
	}
}

export default App;
