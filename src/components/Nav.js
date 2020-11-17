import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

import { FaTwitter, FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

class Nav extends Component {
	render() {
		return (
			<nav className="nav-container">
				<div className="firstNav">
					<div className="fonts">
						<FaTwitter id="font" />
						<FaFacebookF id="font" />
						<FaInstagram id="font" />
					</div>

					<div className="contact">
						<div>
							<FaPhoneAlt />
							<h2>emmainterior@gmail.com</h2>
						</div>

						<div>
							<IoMdMail />
							<h2>09054315621</h2>
						</div>
					</div>
				</div>

				<div className="secondNav">
					<h1>
						Emma<span>Decor</span>
					</h1>

					<ul>
						<li>home</li>
						<li>
							<a href="#about" id="link">
								about
							</a>
						</li>
						<li>services</li>
						<li>contact</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
