import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default class Intro extends Component {
	render() {
		let data = {};
		if (this.props.intro) {
			data = this.props.intro;
		}
		return (
			<div className="intro">
				<div className="intro-container">
					<div className="intro-items-1">
						<h1>
							Hi!<br />I'm <span id="intro-name">{data.name}</span>
						</h1>
						<h2>
							<ReactTypingEffect text={data.description} speed={100} eraseDelay={2000} />
						</h2>
					</div>
					<div className="intro-items-2">
						<img src={data.profilePic} alt="Balamurugan Profile pic" />
					</div>
				</div>
			</div>
		);
	}
}
