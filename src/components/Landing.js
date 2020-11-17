import React, { Component } from 'react';
import Homepage from './Homepage';
import Footer from './Footer';
import '../styles/Landing.css';

class Landing extends Component {
	render() {
		return (
			<main>
				<Homepage />

				<section className="modus">
					<h3>our modus operandum</h3>

					<div className="modusFlex">
						<div>
							<h4>We listen</h4>
							<hr />
							<p>We listen to what you envision and what you want</p>
						</div>

						<div>
							<h4>We solve</h4>
							<hr />
							<p>We take this your vision and create samples of multiple choices for you</p>
						</div>

						<div>
							<h4>We implement</h4>
							<hr className="hr" />
							<p>Upon picking a sample, we make your vision a living comfortable reality in your home</p>
						</div>
					</div>
				</section>

				<section className="samples">
					<h3>take a look at some samples</h3>

					<div className="first">
						<div>
							<h4>Living room</h4>
							<p>We design your living room to suit your comfort and that of your guests too</p>
						</div>
						<img src={require('../assets/lander.jpg')} alt="living_room_img" />
					</div>

					<div className="second">
						<img src={require('../assets/kitchen2.jpg')} alt="kitchen_room_img" />
						<div>
							<h4>Kitchen room</h4>
							<p>
								Kitchen is one of the core rooms in a home, with that in mind we create a fabulous space
								for you easy access to all your kitchen equipments{' '}
							</p>
						</div>
					</div>

					<div className="third">
						<div>
							<h4>Office room</h4>
							<p>We design this room knowing it's your safe haven for productive thinking and works. </p>
						</div>
						<img src={require('../assets/office.jpg')} alt="office_img" />
					</div>

					<div className="fourth">
						<img src={require('../assets/bedroom.jpg')} alt="bedroom_img" />
						<div>
							<h4>Bed room</h4>
							<p>
								Our interior design cannot be complete without redecorating and redefining your safest
								haven. Indeed the most important room for your comfort and relaxation
							</p>
						</div>
					</div>

					<div className="fifth">
						<div>
							<h4>Dinning room</h4>
							<p>
								You've always eaten at your bedroom, kitchen, even in your living room but have you
								tried eating in the dinning room. At EmmaDecor, We make sure you get that luxury at your
								home{' '}
							</p>
						</div>
						<img src={require('../assets/diner.jpg')} alt="dinner_img" />
					</div>
				</section>

				<section className="about" id="about">
					<div>
						<h2>Emma Custom</h2>
						<h2>Interior Designs</h2>
					</div>

					<div>
						<p>
							We believe that furnishing your home should be an expression of great love and joy. Our
							high-end team of architects, interior designers and acclaimed artisans will guide you
							effortlessly on this journey – carefully translating your dreams into a finely-crafted
							reality.
						</p>
						<p>
							We believe that every room requires a unique approach, and should be appointed with fine
							furnishings that compliment and accentuate its finest features.
						</p>
						<p>
							By individually crafting each piece of furniture, we are able to show our clients spaces in
							their best possible light. Throughout the furnishing journey we strive to bear any burden,
							so that you don’t have to, interpreting your vision and delivering and fitting the finished
							product
						</p>
					</div>
				</section>

				<Footer />
			</main>
		);
	}
}

export default Landing;
