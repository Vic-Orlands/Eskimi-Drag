import React, { Component } from 'react';
import '../styles/Homepage.css';
import Nav from './Nav';

import { BsArrowRight } from 'react-icons/bs';

class Homepage extends Component {
	render() {
		return (
			<section className="section">
				<Nav />

				<header>
					<hgroup>
						<h4>#1 interior decoration in nigeria</h4>
						<h1>focus on</h1>
						<h1>design quality</h1>
					</hgroup>
					<p>we create lasting impression through interior designs.</p>

					<a>
						<BsArrowRight id="font" />contact us
					</a>
				</header>
			</section>
		);
	}
}

export default Homepage;
