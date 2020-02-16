import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Fade from 'react-reveal/Fade';

class Education extends Component {
	render() {
		let education;
		let educationList;
		if (this.props.education) {
			education = this.props.education;
			educationList = education.map((edu, eduIdx) => {
				return (
					<Fade duration={2500} bottom key={uuid()}>
						<div className="education-items" id="education" key={uuid()}>
							<div id="education-year">
								<p id="education-year-text">{edu.year}</p>
							</div>
							<div id="education-content">
								<h3>{edu.institution}</h3>
								<p>{edu.board}</p>
								<p>{edu.degree}</p>
								<p>{edu.percentage}</p>
							</div>
						</div>
					</Fade>
				);
			});
		}

		return (
			<div className="education">
				<h1>
					<center>ACADEMICS</center>
				</h1>
				<div className="education-container">{educationList}</div>
			</div>
		);
	}
}
export default Education;
