import React, { useState, useEffect } from 'react';
import Load from './loaderPage/Load';
import Home from './pages/Home';

const Hub = () => {
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading({
				loading: false
			});
		}, 5000);
	});

	return (
		<div>
			{loading === true ? (
				<Load />
			) : (
				<main className="body">
					<Home />
				</main>
			)}
		</div>
	);
};

export default Hub;
