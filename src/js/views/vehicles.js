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
		<div
			className="  w-100 mx-auto"
			style={{ backgroundImage: "url(https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif)" }}>
			<div
				className="jumbotron mb-2"
				style={{
					backgroundImage: "url(https://studiofourmedia.com/wp-content/uploads/2015/12/Bannerv2.jpg)",
					backgroundRepeat: "no-repeat"
				}}>
				<h1 className="display-4" style={{ color: "white" }}>
					DISCOVER STAR WARS SHIPS
				</h1>
				{/* <p className="lead" style={{ color: "white" }}/> */}
				<a className="btn btn-dark btn-lg" href="https://www.starwars.com/databank" role="button">
					Explore
				</a>
			</div>
			<div className=" col mt-5">
				<hr style={{ border: "1px solid rgb(39, 39, 39)" }} />
				<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Candal" }}>THE CLONE WARS //</h3>
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
			</div>
			<div className="row">
				{!store.vehicles
					? "loading"
					: store.vehicles.map((vehicle, index) => {
							return (
								<div
									key={index}
									ind={index}
									style={{
										marginLeft: "4%",
										marginRight: "2%"
									}}
									className="text-center mt-5">
									<div
										className="card"
										style={{
											width: "16rem",
											backgroundColor: "rgb(39, 39, 39",
											marginBottom: "6%"
										}}>
										<img
											className="image"
											style={{
												borderBottomStyle: "solid",
												borderColor: "pink",
												borderBottomWidth: "thin"
											}}
											src={store.vehImages[index].urlImg}
											alt="test"
											width="100%"
										/>
										{/* <img src="" className="card-img-top" alt="..." /> */}
										<div className="card-body" style={{ color: "white", fontFamily: "Candal" }}>
											<h5 className="card-title" />
											<strong> Name : </strong> {vehicle.name} <br />
											<p className="card-text">
												<strong> Capacity : </strong> {vehicle.cargo_capacity} <br />
												&nbsp;
												<strong> Consumables : </strong> {vehicle.consumables} <br />
												&nbsp;
												<strong> Manufacturer : </strong> {vehicle.manufacturer} <br />
											</p>
											<a
												onClick={e => handleClick(e, index)}
												className="btn btn-dark"
												style={{ color: "pink" }}>
												Add to Favorites
											</a>
										</div>
									</div>
								</div>
							);
					  })}
			</div>
		</div>
	);
};
