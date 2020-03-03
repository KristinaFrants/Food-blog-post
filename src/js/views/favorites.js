import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const Favorites = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="jumbotron row w-100 mx-auto">
			{store.favorites.map((fav, index) => (
				<Card key={index} name={store.people[fav].name} />
			))}
		</div>
	);
};
