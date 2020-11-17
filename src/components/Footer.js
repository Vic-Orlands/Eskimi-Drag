import React from 'react';
import '../styles/Footer.css';

import { FaTwitter, FaFacebookF, FaInstagram, FaPhoneAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="footer">
			<div>
				<h3>
					Emma<span>Decor</span>
				</h3>

				<div>
					<p>If you'd like to get in touch with us, please drop us a mail at</p>
					<p>
						<span>emmainterior@gmail.com</span> or call us at <span>08057642851</span>
					</p>
				</div>

				<ul>
					<li>home</li>
					<li>
						<a href="#about">about</a>
					</li>
					<li>services</li>
					<li>contact</li>
				</ul>
			</div>

			<div className="copyright">
				<div className="footer_fonts">
					<FaTwitter id="font" />
					<FaFacebookF id="font" />
					<FaInstagram id="font" />
				</div>

				<div>
					<p>&copy;2020</p>
					<p>
						Built with <FaHeart id="hrt" /> by Vic-Orlands{' '}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
