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
		<div
			className=" row w-100 mx-auto"
			style={{ backgroundImage: "url(https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif)" }}>
			{!store.planets
				? "loading"
				: store.planets.map((planet, index) => {
						return (
							<div key={index} ind={index} style={{ marginLeft: "8%" }} className="text-center mt-5">
								<div
									className="card"
									style={{ width: "18rem", backgroundColor: "black", marginBottom: "6%" }}>
									<img
										className="my-2"
										src={store.planetImages[index].urlImg}
										alt="test"
										width="100%"
									/>
									{/* <img src="" className="card-img-top" alt="..." /> */}
									<div className="card-body" style={{ color: "white", fontFamily: "Candal" }}>
										<h5 className="card-title" />
										<strong> Name : </strong> {planet.name}
										<br />
										<p className="card-text">
											<strong> Rotation Period : </strong> {planet.rotation_period}
											<br />
											&nbsp;
											<strong> Orbital Period : </strong> {planet.orbital_period}
											<br />
											&nbsp;
											<strong> Diameter : </strong> {planet.diameter}
											<br />
										</p>
										<a
											onClick={e => handleClick(e, index)}
											className="btn btn-dark"
											style={{ color: "white" }}>
											Add to Favorites
										</a>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
};
