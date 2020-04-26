import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const Planets = props => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(false);
	const handleClick = (e, ind) => {
		setSelected(!selected);
		actions.toggleFavorite(ind);
	};
	// console.log(store.planets);
	return (
		<div className="jumbotron row w-100 mx-auto">
			{!store.planets
				? "loading"
				: store.planets.map((planet, index) => {
						return (
							<div key={index} ind={index} className="text-center mt-5">
								<div className="card" style={{ width: "18rem" }}>
									<img src="" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title" />

										{planet.title}
										<p className="card-text">
											{planet.rotation_period}
											&nbsp;
											{planet.orbital_period}
											&nbsp;
											{planet.diameter}
										</p>
										<a onClick={e => handleClick(e, index)} className="btn btn-primary">
											Go somewhere
										</a>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
};
