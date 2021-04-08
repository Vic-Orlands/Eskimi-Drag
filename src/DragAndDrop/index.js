import React, { useRef, useEffect, useState, createRef } from 'react';
import { TweenMax, CSSPlugin } from 'gsap/all';
import './style.css';

import first from './assets/icon1.png';
import second from './assets/icon2.png';
import third from './assets/icon3.png';
import fourth from './assets/icon4.png';
import map from './assets/before-map.png';

const Drag = () => {
	const [ list, setList ] = useState([ first, second, third, fourth ]);

	const draggingItem = useRef();
	const dragOverItem = useRef();

	const handleDragStart = (e, position) => {
		draggingItem.current = position;
	};

	const handleDragEnter = (e, position) => {
		dragOverItem.current = position;
		const listCopy = [ ...list ];
		const draggingItemContent = listCopy[draggingItem.current];
		listCopy.splice(draggingItem.current, 1);
		listCopy.splice(dragOverItem.current, 0, draggingItemContent);

		draggingItem.current = dragOverItem.current;
		dragOverItem.current = null;
		setList(listCopy);
	};

	const handleDragEnd = (e, position) => {
		// get the index of the image dragged into the map
		dragOverItem.current = position;

		// rest nd spread the array items
		const draggedList = [ ...list ];

		// delete the specific dragged icon using its index
		draggedList.splice(position, 1);

		// set the reamining icons as the new array
		setList(draggedList);
	};

	// animation with greensock
	let mapRef = useRef([ createRef(), createRef(), createRef(), createRef() ]);

	useEffect(() => {
		const mapIcon = mapRef.current.map((card) => card.current);

		TweenMax.staggerFrom(
			mapIcon,
			1,
			{
				scale: 0
			},
			0.8
		);
	}, []);

	return (
		<main className="map-body ">
			{list.length > 0 ? (
				<section className="ad" ref={mapRef.current[0]}>
					<img src={require('./assets/before-text.png')} alt="img" ref={mapRef.current[1]} />

					<img src={map} alt="img" id="before-map" ref={mapRef.current[2]} />

					<div className="imgIcons" ref={mapRef.current[3]}>
						{list &&
							list.map((item, index) => (
								<img
									src={item}
									alt="img"
									key={index}
									onDragStart={(e) => handleDragStart(e, index)}
									onDragEnter={(e) => handleDragEnter(e, index)}
									onDragOver={(e) => e.preventDefault()}
									onDragEnd={(e) => handleDragEnd(e, index)}
									draggable
								/>
							))}
					</div>
				</section>
			) : (
				<section className="afterAd">
					<section className="afterMapImg">
						<img src={require('./assets/after-text.png')} alt="img" className="afterText" />
					</section>
				</section>
			)}
		</main>
	);
};

export default Drag;
