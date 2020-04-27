import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	return (
		<div
			className=" w-100 mx-auto"
			style={{
				backgroundImage: "url(https://media.giphy.com/media/TxVVB6PfWMjE4/giphy.gif)"
			}}>
			<h3
				style={{
					marginLeft: "45%",
					marginBottom: "5%"
				}}>
				Favorites
			</h3>
			<div
				className="row"
				style={{
					marginBottom: "5%"
				}}>
				{store.favorites.map((fav, index) => (
					<Card key={index} image={store.planetImages[index].urlImg} name={store.people[fav].name} />
				))}
			</div>
		</div>
	);
};
