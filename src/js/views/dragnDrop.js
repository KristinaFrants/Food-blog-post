import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "react-use-gesture";

const cards = [
	"https://image.freepik.com/free-photo/homemade-pancakes-with-berries-alarm-clock-white-wooden_127032-594.jpg",
	"https://image.freepik.com/free-photo/doner-slices-with-green-salad-onions-white-plate_141793-1719.jpg",
	"https://image.freepik.com/free-photo/flat-lay-fast-food-meal_23-2148273123.jpg",
	"https://image.freepik.com/free-photo/side-view-breakfast-served-table-scrambled-eggs-with-tomatoes-with-vegetable-omelette-omelette-with-sausage-pan_141793-3862.jpg",
	"https://image.freepik.com/free-photo/lunch-chicken-soup-with-croutons-chicken-breast-salad-wine-light-background_167180-7.jpg",
	"https://image.freepik.com/free-photo/delicious-homemade-mushroom-cream-soup-top-view_114579-8427.jpg"
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

export const DraggableList = () => {
	const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
	const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })); // Create a bunch of springs using the helpers above
	// Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
	const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
		const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
		const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
		if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
		set(i => {
			if (index !== i) return; // We're only interested in changing spring-data for the current spring
			const isGone = gone.has(index);
			const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
			const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
			const scale = down ? 1.1 : 1; // Active cards lift up a bit
			return {
				x,
				rot,
				scale,
				delay: undefined,
				config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 }
			};
		});
		if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600);
	});
	// Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
	return props.map(({ x, y, rot, scale }, i) => (
		<animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
			{/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
			<animated.div
				{...bind(i)}
				style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }}
			/>
		</animated.div>
	));
};

// render(<DraggableList />, document.getElementById("app"));
