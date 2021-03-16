import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrentPage, setCurrentPage } from './redux/actions';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Timeline from './components/timeline/Timeline';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AnimationManager from './components/shared/manager/AnimationManager';
import './App.css';

class App extends Component {
	monitorCurrentPage = () => {
		const margin = 50;

		const home = document.querySelector('#home');
		const about = document.querySelector('#about');
		const project = document.querySelector('#project');
		const timeline = document.querySelector('#timeline');
		const contact = document.querySelector('#contact');

		const homePos = home.getBoundingClientRect();
		const aboutPos = about.getBoundingClientRect();
		const projectPos = project.getBoundingClientRect();
		const timelinePos = timeline.getBoundingClientRect();
		const contactPos = contact.getBoundingClientRect();

		this.props.fetchCurrentPage();

		const current = this.props.storage.currentPage;

		if (contactPos.y - margin <= 0) {
			if (current !== 'contact') {
				this.props.setCurrentPage('contact');
				document.title = "Contact - Kei's Portfolio";
			}
		} else if (timelinePos.y - margin < 0 && contactPos.y - margin >= 0) {
			if (current !== 'timeline') {
				this.props.setCurrentPage('timeline');
				document.title = "Timeline - Kei's Portfolio";
			}
		} else if (projectPos.y - margin < 0 && timelinePos.y - margin >= 0) {
			if (current !== 'projects') {
				this.props.setCurrentPage('projects');
				document.title = "Projects - Kei's Portfolio";
			}
		} else if (aboutPos.y - margin < 0 && projectPos.y - margin >= 0) {
			if (current !== 'about') {
				this.props.setCurrentPage('about');
				document.title = "About - Kei's Portfolio";
			}
		} else if (homePos.y < 0 && aboutPos.y - margin >= 0) {
			if (current !== 'home') {
				this.props.setCurrentPage('home');
				document.title = "Home - Kei's Portfolio";
			}
		} else {
			this.props.setCurrentPage('default');
		}
	};

	componentWillUnmount() {
		clearInterval(this.monitorCurrentPage);
	}

	componentDidMount() {
		console.log("Welcome to Kei's portfolio!");
		console.log('This portfolio is built with React and Redux');

		document.title = "Kei's Portfolio";

		setTimeout(() => {
			this.monitorCurrentPage();
			setInterval(this.monitorCurrentPage, 750);

			const animeManager = new AnimationManager();
			animeManager.initializeAnimation(this.props.storage.currentPage);
		}, 300);
	}

	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Navbar />
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

// export default App;

App.propTypes = {
	fetchCurrentPage: PropTypes.func.isRequired,
	setCurrentPage: PropTypes.func.isRequired,
	storage: PropTypes.object
};

const mapStateToProps = (state) => ({
	storage: state.storage
});

export default connect(mapStateToProps, { fetchCurrentPage, setCurrentPage })(App);
