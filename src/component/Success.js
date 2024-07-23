// App.js
import { motion } from "framer-motion";
import { useState } from "react";
import React, {
	useEffect,
	useState
}
	from 'react';
import './Success.css';
import {
	FaUtensils,
	FaSmileBeam,
	FaList,
	FaStar
}
	from 'react-icons/fa';
	
const CountUpAnimation = ({
	iconComponent,
	initialValue,
	targetValue,
	text,
}) => {
	const [count, setCount] = useState(initialValue);
	const duration = 4000; // 4 seconds
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);
	useEffect(() => {
		let startValue = initialValue;
		const interval = Math.floor(
			duration / (targetValue - initialValue));

		const counter = setInterval(() => {
			startValue += 1;
			setCount(startValue);
			if (startValue >= targetValue) {
				clearInterval(counter);
			}
		}, interval);

		return () => {
			clearInterval(counter);
		};
	}, [targetValue, initialValue]);

	return (
		<div className="container">
			<div className="icon">{iconComponent}</div>
			<span className="num">{count}</span>
			<span className="text">{text}</span>
		</div>
	);
};

function App() {
	return (
		<div>
			<h2>
				Responsive Number Counting
				Animation - Geeksforgeeks
			</h2>
			<div className="wrapper">
				<CountUpAnimation
					iconComponent={<FaUtensils />}
					initialValue={0}
					targetValue={150}
					text="Meals Delivered"
				/>
				<CountUpAnimation
					iconComponent={<FaSmileBeam />}
					initialValue={0}
					targetValue={200}
					text="Happy Customers"
				/>
				<CountUpAnimation
					iconComponent={<FaList />}
					initialValue={0}
					targetValue={250}
					text="Menu Items"
				/>
				<CountUpAnimation
					iconComponent={<FaStar />}
					initialValue={0}
					targetValue={300}
					text="Five Stars"
				/>
			</div>
		</div>
	);
}

export default App;
