import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	return (
		<div
			className=" w-100 mx-auto"
			style={{
				backgroundImage: "url()"
			}}>
			<div className=" col ">
				<hr style={{ border: "1px solid rgb(39, 39, 39)", marginTop: "3%" }} />
				<h3 style={{ color: "grey", marginLeft: "2%", fontFamily: "Candal" }}>BOOKS //</h3>
				<hr style={{ border: "1px solid rgb(39, 39, 39" }} />
			</div>
			<div
				className="row"
				style={{
					marginBottom: "5%"
				}}>
				{store.favorites.map((fav, index) => (
					<Card key={index} name={store.recipe[fav].name} />
				))}
			</div>
		</div>
	);
};
