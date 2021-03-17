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
	homePos = 0;
	aboutPos = 0;
	projectPos = 0;
	timelinePos = 0;
	contactPos = 0;

	monitorCurrentPage = () => {
		const current = this.props.storage.currentPage;
		const currentPos = window.scrollY;
		const margin = 50;

		this.props.fetchCurrentPage();

		if (currentPos === 0) {
			// this.props.setCurrentPage('default');
		} else if (currentPos < this.homePos - margin) {
			if (current !== 'home') {
				this.props.setCurrentPage('home');
				document.title = "Home - Kei's Portfolio";
			}
		} else if (currentPos < this.aboutPos - margin) {
			if (current !== 'about') {
				this.props.setCurrentPage('about');
				document.title = "About - Kei's Portfolio";
			}
		} else if (currentPos < this.projectPos - margin) {
			if (current !== 'projects') {
				this.props.setCurrentPage('projects');
				document.title = "Projects - Kei's Portfolio";
			}
		} else if (currentPos < this.timelinePos - margin) {
			if (current !== 'timeline') {
				this.props.setCurrentPage('timeline');
				document.title = "Timeline - Kei's Portfolio";
			}
		} else if (currentPos < this.contactPos - margin) {
			if (current !== 'contact') {
				this.props.setCurrentPage('contact');
				document.title = "Contact - Kei's Portfolio";
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

		this.homePos = document.querySelector('#home').clientHeight;
		this.aboutPos = this.homePos + document.querySelector('#about').clientHeight;
		this.projectPos = this.aboutPos + document.querySelector('#project').clientHeight;
		this.timelinePos = this.projectPos + document.querySelector('#timeline').clientHeight;
		this.contactPos = this.timelinePos + document.querySelector('#contact').clientHeight;

		setTimeout(() => {
			this.monitorCurrentPage();
			const animeManager = new AnimationManager();
			animeManager.initializeAnimation(this.props.storage.currentPage);
			setInterval(this.monitorCurrentPage, 1000);
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
