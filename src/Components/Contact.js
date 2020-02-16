import React, { Component } from 'react';
import uuid from 'uuid/v4';
class Contact extends Component {
	render() {
		let contact;
		let addressLine1;
		let addressLine2;
		let city;
		let zip;
		let email;
		let phone;
		let socialList;
		if (this.props.contact) {
			contact = this.props.contact;
			addressLine1 = contact.address.addressLine1;
			addressLine2 = contact.address.addressLine2;
			city = contact.address.city;
			zip = contact.address.zip;
			email = contact.email;
			phone = contact.phone;
			socialList = this.props.social.map((soc) => {
				return (
					<div
						className="social-item"
						key={uuid()}
						style={{ backgroundColor: soc.bgcolor, color: soc.color }}
					>
						<a href={soc.url} target="_blank" rel="noopener noreferrer">
							<i className={soc.icon} />
						</a>
					</div>
				);
			});
		}
		return (
			<div className="contact">
				<h1>
					<center>CONTACT</center>
				</h1>
				<div className="contact-container" key={uuid()}>
					<div className="social-items">{socialList}</div>
					<div className="contact-items" id="contact">
						<div className="contact-details">
							<p>
								<i className="fas fa-envelope" />
								{email}
							</p>
							<p>
								<i className="fas fa-mobile" />
								{phone}
							</p>
						</div>
						<div className="contact-address">
							<i className="fas fa-address-card">
								<p>{addressLine1}</p>
								<p>{addressLine2}</p>
								<p>
									{city} - {zip}
								</p>
							</i>
						</div>
					</div>
				</div>
				<footer>
					<small>
						<center>&copy; with ❤ Balamurugan - 2020</center>
					</small>
				</footer>
			</div>
		);
	}
}
export default Contact;
