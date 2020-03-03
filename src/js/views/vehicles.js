import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Vehicles = props => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(false);
	const handleClick = (e, ind) => {
		setSelected(!selected);
		actions.toggleFavorite(ind);
	};
	// console.log(store.planets);
	return (
		<div className="jumbotron row w-100 mx-auto">
			{!store.vehicles
				? "loading"
				: store.vehicles.map((vehicle, index) => {
						return (
							<div key={index} ind={index} className="text-center mt-5">
								<div className="card" style={{ width: "18rem" }}>
									<img src="" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title" />

										{vehicle.name}
										<p className="card-text">
											{vehicle.cargo_capacity}
											&nbsp;
											{vehicle.consumables}
											&nbsp;
											{vehicle.manufacturer}
										</p>
										<a onClick={e => handleClick(e, index)} className="btn btn-primary">
											add to fav
										</a>
									</div>
								</div>
							</div>
						);
				  })}
		</div>
	);
};
