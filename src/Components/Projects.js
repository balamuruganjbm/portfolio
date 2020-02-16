import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Fade from 'react-reveal/Fade';

class Projects extends Component {
	render() {
		let projects;
		let projectList;
		if (this.props.projects) {
			projects = this.props.projects;
			projectList = projects.map((pro) => {
				return (
					<Fade duration={3000} bottom key={uuid()}>
						<div key={uuid()} className="projects-items">
							<div className="projects-img">
								<img src={pro.images} alt="thumbnail" />
							</div>
							<div className="projects-content">
								<h3>
									<center>{pro.title}</center>
								</h3>
								<p>{pro.description}</p>
								<a href={pro.giturl} target="_blank" rel="noopener noreferrer">
									<i className="fab fa-github fa-2x" style={{ color: 'black' }} />
								</a>
							</div>
						</div>
					</Fade>
				);
			});
		}

		return (
			<div className="projects">
				<h1>
					<center>PROJECTS</center>
				</h1>
				<div className="projects-container">{projectList}</div>
			</div>
		);
	}
}
export default Projects;
