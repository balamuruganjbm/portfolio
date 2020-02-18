import React, { Component } from 'react';
import Intro from './Components/Intro';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import './css/main.css';

class App extends Component {
	static defaultProps = {
		url: 'process.env.PUBLIC_URL/ResumeData.json'
	};
	constructor(props) {
		super();
		this.state = {
			resumeData: {}
		};
	}
	componentDidMount() {
		fetch('./ResumeData.json')
			.then((req) => {
				if (!req.ok) throw Error(req.status);
				else {
					return req;
				}
			})
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				this.setState({
					resumeData: data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div className="main-container">
				<Intro intro={this.state.resumeData.intro} />
				<Education education={this.state.resumeData.education} />
				<Skills skill={this.state.resumeData.skills} />
				<Projects projects={this.state.resumeData.projects} />
				<Contact contact={this.state.resumeData.contact} social={this.state.resumeData.social} />
			</div>
		);
	}
}

export default App;
