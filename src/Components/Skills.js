import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Zoom from 'react-reveal/Zoom';

class Skills extends Component {
	render() {
		let skills;
		let skillList;
		if (this.props.skill) {
			skills = this.props.skill;
			skillList = skills.map((skill) => {
				return (
					<Zoom duration={2500} key={uuid()}>
						<div key={uuid()} className="skill-items">
							<div className="circle">
								<img src={skill.imgUrl} alt={skill.name} />
							</div>
							<div className="skill-contents">
								<p>{skill.name}</p>
								<p>{skill.skillLevel}%</p>
								<progress value={skill.skillLevel} max="100" />
							</div>
						</div>
					</Zoom>
				);
			});
		}

		return (
			<div className="skill">
				<h1>
					<center>SKILLS</center>
				</h1>
				<div key={uuid()} className="skill-container">
					{skillList}
				</div>
			</div>
		);
	}
}
export default Skills;
